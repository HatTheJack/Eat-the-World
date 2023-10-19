import { gameData, tabMapping, gameDataTweened } from '@/assets/js/gameData.js'
import { researchInfo } from '@/assets/js/research.js';
import { foodValues } from "@/assets/js/resources.js";
import { COMMON_NAMES } from '@/assets/js/definitions';
import { initHiveForest } from '@/assets/js/hives';
import * as ADNotations from "@antimatter-dimensions/notations";
import gsap from 'gsap'; 
import { watch } from 'vue';

// function to setup watchers for resource amounts with animations for the amount
export function setupResourceWatchers() {
  // Initialize gameDataTweened with an empty resources object
  gameDataTweened.resources = {};

  for (const hiveID in gameData.value.hive) {
    let hive = gameData.value.hive[hiveID];

    for (const resourceKey in hive.resource) {
      const resource = gameData.value.hive[hiveID].resource[resourceKey];
      // Ensure the resourceKey exists in gameDataTweened.resources
      if (!gameDataTweened.resource[resourceKey]) {
        gameDataTweened.resource[resourceKey] = formatNumber(gameData.value.hive[hiveID].resource[resourceKey].amount, "kg");
      }
      watch(() => gameData.value.hive[hiveID].resource[resourceKey].amount, (n) => {
        // const formattedBiomass = parseFloat(n).toFixed(2);
        gsap.to(gameDataTweened.resource, { 
          duration: 0.5, 
          biomass: parseFloat(n) || 0,
          onUpdate: () => {
            gameDataTweened.resource[resourceKey] = formatNumber(parseFloat(gameDataTweened.resource.biomass).toFixed(2), 'kg');
          }
        });
      });   
    }
    gameDataTweened.radius = formatNumber(gameData.value.hive[hiveID].radius);
    watch(() => gameData.value.hive[hiveID].radius, (n) => {
      gsap.to(gameDataTweened, { 
        duration: 0.5, 
        radius: (n) || 0,
        onUpdate: () => {
          gameDataTweened.radius = formatNumber(gameDataTweened.radius, 'km');
        }
      });
    });   
  }
  
}



// function to unlock research
export function unlockResearch(researchKey) {
  // Check if the research exists in researchData
  if (gameData.value.research.tierBiome[researchKey]) {
    const researchCost = researchInfo.tierBiome[researchKey].cost;
    // check if there is enough genes in gameData.genes to unlock research

    // Check genes cost
    for (const geneKey in researchCost.genes) {
      const requiredGeneAmount = researchCost.genes[geneKey];
      if (gameData.value.genes[geneKey] < requiredGeneAmount) {
        return; // Exit the function if there's not enough genes
      }
    }

    // Check resources cost
    for (const resourceKey in researchCost.resources) {
      const requiredResourceAmount = researchCost.resources[resourceKey];
      if (gameData.value.resources[resourceKey].amount < requiredResourceAmount) {
        return; // Exit the function if there's not enough resources
      }
    }
    
    // Unlock the research
    gameData.value.research.tierBiome[researchKey].unlocked = true;
    // deducate the cost of genes 
    for (const geneKey in researchCost.genes) {
      const requiredGeneAmount = researchCost.genes[geneKey];
      gameData.value.genes[geneKey] -= requiredGeneAmount;
    }
    for (const resourceKey in researchCost.resources) {
      const requiredGeneAmount = researchCost.resources[resourceKey];
      console.log(resourceKey + ": " + requiredGeneAmount);
      gameData.value.hive[0].resources[resourceKey].amount -= requiredGeneAmount;
    }
    // makes available any research than can be unlocked by this research
    for (const key in gameData.value.research.tierBiome) {
      let research = gameData.value.research.tierBiome[key];
      if (researchInfo.tierBiome[key].unlockedBy === researchInfo.tierBiome[researchKey]) {
        research.available = true;
      }
    }
  } else {
    console.error(`Research '${researchKey}' not found in researchData.`);
  }
}

// Function to calculate the area of something
export function calculateArea(radius) 
  {
    return Math.PI * radius * radius;
  }
export function calculateRadius(area) 
  {
    return Math.sqrt(area / Math.PI);
  }
// Function to access to swarm numberformat from inside vue templates
export function formatNumber(number, unit) {
  const scientific = new ADNotations.ScientificNotation();
  if (unit === "km") {
    if (number <= 0.001) {
      number *= 100000;
      unit = "cm";
    } else
    if (number <= 1) {
      number *= 1000;
      unit = "m";
    }  
  } else if (unit === "kg") {
    if (number <= 0.001) {
      number *= 100000;
      unit = "mg";
    } else
    if (number <= 1) {
      number *= 1000;
      unit = "g";
    }
  }
  else if (unit === "km2") { 
    unit === "cm²";
    if (number >= 1e+10) {
      number /= 1e+10;
      unit = "km²";
    } else if (number >= 10000) {
      number /= 10000;
      unit = "m²";
    }
  }

  const container = document.createElement("div");
  container.innerHTML = unit ? scientific.format(number, 2, 2) + `<span class="unit" style="display: inline-block; width: 20px; margin-left: 10px;">` +  unit + "</span>" : scientific.format(number, 2, 2);
  return container.innerHTML;
}

export function calculateDeltaTime() {
  const now = Date.now();
  const delta = now - gameData.value.date.timestamp;
  gameData.value.lastTick = now;
  return delta;
}

export function formatPropertyName(property) {
  // Split the property name by uppercase letters or underscores
  const words = property.split(/(?=[A-Z])|_/);

  // Capitalize the first letter of each word
  const formattedName = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return formattedName;
}
export function mainLoop(forced) {
  if (gameData.value.paused === false || forced === true) { 
    let delta = calculateDeltaTime();
    tickHour(24);
    hiveManager.expandHive(0, 1);
    // gameLogic
  }
}
export function startWorker(workerScriptPath) {
  // Create a new web worker instance
  const worker = new Worker(workerScriptPath, { type: "module" });

  // Set up an event listener for messages from the web worker
  worker.onmessage = function(event) {
    // Handle messages received from the web worker
    const receivedGameData = JSON.parse(event.data.gameData);
    gameData.value = receivedGameData.value;
    // console.log(receivedGameData);
    // Use receivedGameData to update your user interface or application state
  };

  // Use postMessage to send the gameData object to the web worker
  const serialisedGameData = JSON.stringify(gameData.value);
  worker.postMessage({ type: 'initialize', gameData: serialisedGameData });
}




export const callFunction = (object, func, gameData) => {
  if (typeof func === 'function') {
    func(gameData);
  } else if (object && typeof object[func] === 'function') {
    object[func]();
  } else {
    console.error(`Function not found.`);
  }
};


export function loopMultiple(loops) {
  for (let i = 0; i < loops; i++) {
    mainLoop(true);
  }
}

export const hiveManager = {
  _calculateMaxRadius(hiveID) {
    let maxRadius = 0;
    let maxArea = gameData.value.hive[hiveID].maxArea;
    maxRadius = calculateRadius(maxArea);
    return maxRadius;
  },
  _getMaxExpandPerTick(hiveId) {
    const resources = gameData.value.hive[hiveId][COMMON_NAMES.RESOURCES];
    let maxExpansions = [];
    let maxExpansion = 0;
  
  
    for (const item in resources) {
      let resource = gameData.value.hive[hiveId][COMMON_NAMES.RESOURCES][item];
      
      if (resource.lost) {
        let maxExpansion = resource.amount / resource.lost.total;
        maxExpansions.push(maxExpansion);
      }
    }
    maxExpansion = Math.min(...maxExpansions);
  
    return maxExpansion;
  },  
  // checks if hiveID is default, if so, returns the active hive id else return hiveID
  _checkDefaultID(hiveID) {
    if (hiveID === 'default' || hiveID === undefined) {
      return this.getActiveHive().id;      
    }
    return hiveID;
  },
  getActiveHive() {
    return gameData.value.hive.find(hive => hive.active === true) || null;
  },  
  addHive(biome, totalArea) {
    const lastHive = gameData.value.hive[gameData.value.hive.length - 1];
    const newId = lastHive.id + 1;
  
    // Create a new hive object by merging properties from initHiveForest and new properties
    const newHive = JSON.parse(JSON.stringify(initHiveForest[0]));
  
    newHive.id = newId;
    newHive.biome = biome;
    newHive.maxArea = totalArea; // You can set the biome as needed
  
    gameData.value.hive.push(newHive);
  },
  expandHive(hiveID = 'default', amount = 0.00001, gameData = gameData) {
    hiveID = this._checkDefaultID(hiveID);
    const hive = gameData.value.hive[hiveID];
    let biomassRequired = (amount * 100000) * 0.0001;

    if ( hive.resource.biomass.amount >= biomassRequired) {
      
      amount = Math.min(amount, this._getMaxExpandPerTick(hiveID));
      let maxRadius = this._calculateMaxRadius(hiveID);

      hive.resource.biomass.amount -= biomassRequired;
      hive.radius = Math.min(hive.radius + amount, maxRadius);

      let newArea = calculateArea(hive.radius);

      hive.area = newArea;  

    }

  },
  checkAmountLost(hiveID = 'default', type, toCheck) {
    hiveID = this._checkDefaultID(hiveID);
    for ( const itemName of gameData.value.hive[hiveID][type]) {
        const item = gameData.value.hive[hiveID][type][itemName];
        console.log(itemName);
    }
  },
}

export function tickHour(amount, gameData = gameData) {
  gameData.value.date.hour += amount;
  
  
  if (gameData.value.date.hour >= 24) {
    let days = Math.floor(gameData.value.date.hour / 24);
    gameData.value.date.hour = gameData.value.date.hour % 24;
    gameData.value.date.day += days;
  }

  if (gameData.value.date.day >= 365) {
    let years = Math.floor(gameData.value.date.day / 365);
    gameData.value.date.day = gameData.value.date.day % 365; // Calculate remaining days
    gameData.value.date.year += years;
  }
}


