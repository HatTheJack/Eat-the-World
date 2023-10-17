import { gameData, tabMapping } from '@/assets/js/gameData.js'
import { researchInfo } from '@/assets/js/research.js';
import { foodValues } from "@/assets/js/resources.js";
import { COMMON_NAMES } from '@/assets/js/definitions';
import { initHiveForest } from '@/assets/js/hives';
import * as ADNotations from "@antimatter-dimensions/notations";

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
  if (unit === "cm") {
    if (number >= 100000) {
      number /= 100000;
      unit = "km";
    } else if (number >= 100) {
      number /= 100;
      unit = "m";
    } 
  } else if (unit === "mg") {
    if (number >= 100000) {
      number /= 100000;
      unit = "kg";
    } else if (number >= 100) {
      
      number /= 100;
      unit = "g";
    }    
  }  // if unit = cm2 then convert to m2 or km2 if above threadhold
  else if (unit === "cm2") { 
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


export function mainLoop(forced) {
  if (gameData.value.paused === false || forced === true) { 
    let delta = calculateDeltaTime();
    tickHour(24);
    // hiveManager.expandHive(0, 10000);
  }
}

export function getMaxExpandPerTick(hiveId) {
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
}

export function calculateMaxRadius(hiveID) {
  let maxRadius = 0;
  let maxArea = gameData.value.hive[hiveID].maxArea;
  maxRadius = calculateRadius(maxArea);
  return maxRadius;
}




export const hiveManager = {
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
  expandHive(hiveId, amount) {
    const hive = gameData.value.hive[hiveId];
    amount = Math.min(amount, getMaxExpandPerTick(hiveId));

    let maxRadius = calculateMaxRadius(hiveId);
    console.log(maxRadius);

    hive.radius = Math.min(hive.radius + amount, maxRadius);

    let newArea = calculateArea(hive.radius);
    hive.area = newArea;
  } 
}

export function tickHour(amount) {
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


