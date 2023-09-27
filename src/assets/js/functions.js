import { gameData, tabMapping } from '@/assets/js/gameData.js'
import { researchInfo } from '@/assets/js/research.js';
import { foodValues } from "@/assets/js/resources.js";

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
      if (researchInfo.tierBiome[key].unlockedBy === researchInfo.tierBiome[researchKey].name) {
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
// Function to access to swarm numberformat from inside vue templates
export function formatNumber(number, unit) {
  if (unit === "cm") {
    if (number >= 1000000) {
      number /= 1000000;
      unit = "km";
    } else if (number >= 1000) {
      number /= 1000;
      unit = "m";
    } 
  } else if (unit === "mg") {
    if (number >= 1000000) {
      number /= 1000000;
      unit = "kg";
    } else if (number >= 1000) {

      number /= 1000;
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

  return unit ? numberformat.formatShort(number, {suffixes: ['mg', 'g', 'kg']}) + unit : numberformat.formatShort(number);
}

// function to position object on progress bar on the bar percent
export function calculateHeartPosition(number, maxnumber, width) {
    return  number*(width / maxnumber) - 7
  }
// Define the eatFood function
export function eatFood(item, key, amount) {
  let amounttoeat;
  if (amount === undefined) {
  // get the amount from the foodValues amounttoeat
    amounttoeat = foodValues.food[key].amountToEat;
  } else {
    amounttoeat = amount;
  }
  //check if there is enough food to devourer
  if (item.food[key].amount > 0) {
    let howMuch = Math.min(amounttoeat, item.food[key].amount);
    item.food[key].amount -= howMuch;
    // set foodUnlocked to true for current food
    gameData.value.foodUnlocked[key] = true;
    


    // Check if the food exists in foodValues
    if (foodValues.food[key]) {
      for (const resourceKey in foodValues.food[key].resources) {
        // Check if the resource exists in the hive
        if (item.resources[resourceKey]) {
          // Add the resource to the hive
          item.resources[resourceKey].amount += foodValues.food[key].resources[resourceKey] * howMuch;
          // set the resource to show if it is greater than 0
          if(item.resources[resourceKey].amount > 0 && item.resources[resourceKey].show == false) {
            item.resources[resourceKey].show = true;
          }
        } else {
          console.error(`Resource '${resourceKey}' not found in hive resources.`);
        }
      }
      // for each gene in foodValues add the gene to the hive
      for (const geneKey in foodValues.food[key].genes) {
        // Check if the gene exists in the hive
        if (gameData.value.genes[geneKey]) {
          // Add the gene to the hive
          // gameData.value.genes[geneKey] += foodValues.food[key].genes[geneKey] * amounttoeat * (howMuch/amounttoeat);
          gameData.value.genes[geneKey] += foodValues.food[key].genes[geneKey] * howMuch;
        } else {
          console.error(`Gene '${geneKey}' not found in hive genes.`);
        }
      }
    } else {
      console.error(`Food type '${key}' not found in foodValues.`);
    }
  }
}
// function to grow each food based on the number of growths built
export function growFood() {

}
export function heartBeat() {
  // checks if there is enough biomass each tick
  const hasEnoughBiomass = gameData.value.hive.some(hive => {
    return hive.resources.Biomass.amount >= gameData.value.heart.pertick;
  });

  // things that happen if there is enough biomass
  if (hasEnoughBiomass) {
    
    // Check if heart amount is less than heart max
    if (gameData.value.heart.amount < gameData.value.heart.max) { 
      gameData.value.heart.amount += gameData.value.heart.pertick; // Subtract pertick from each hive if it has enough biomass

      // Check each hive if they have enough biomass then tick down.
      gameData.value.hive.forEach(hive => {
        if (hive.resources.Biomass.amount >= gameData.value.heart.pertick) {
          // what happens if there is enough
          //increase radius using pertick
          hive.resources.Biomass.amount -= gameData.value.heart.pertick;
          hive.heart.dyingState = false          
        } else {
          // what happens if there isn't
          hive.heart.dyingState = true;
        }
      });
      // checks if heart is 100 then reset if it is.
    } else if (gameData.value.heart.amount == gameData.value.heart.max) {
      gameData.value.heart.amount = 0;

      // Performs actions on each hive
      for (const hive of gameData.value.hive) {
        hive.radius += hive.radiusPerBeat;
        // set hive previous area to current area
        hive.previousArea = hive.area;
        // calculate new area based on radius
        hive.area = Math.min(hive.maxArea, calculateArea(hive.radius));
        let difference = hive.area - hive.previousArea;

        // iterates through each food on 
        for (const foodKey in hive.food) {
          // increase each harvest amount by the difference in area
          hive.food[foodKey].amount += Math.round((difference * foodValues.food[foodKey].multiplyer)*foodValues.Overall);
          if(hive.food[foodKey].amount > 0 && hive.food[foodKey].show == false) {
            hive.food[foodKey].show = true;
          }
        }
        growFood();
      }
      // adds to each harvest max based on area using forEach vue
    }
        
  } else {
    // Handle the case when no hive has enough biomass
    // You can add your own logic here if needed
    gameData.value.heart.dyingState = true;
  }
}
export function tickHour() {
  gameData.value.date.hour += 4;
  if (gameData.value.date.hour == 24) {
    gameData.value.date.hour = 0;
    gameData.value.date.day++;
  }
  if (gameData.value.date.day == 365) {
    gameData.value.date.day = 0;
    gameData.value.date.year++;
  }   
}

export function addHive(biome, totalArea) {
  const lastHive = gameData.value.hive[gameData.value.hive.length - 1];
  const newId = lastHive.id + 1;

  // Create a new hive object by merging properties from initHiveForest and new properties
  const newHive = JSON.parse(JSON.stringify(initHiveForest[0]));

  newHive.id = newId;
  newHive.biome = biome; // You can set the biome as needed

  gameData.value.hive.push(newHive);
}

export function tabs(content) {
  // Set all properties to false
  for (const key in tabMapping.value) {
    tabMapping.value[key] = false;
  }

  // Set the corresponding variable to true based on the content input
  if (tabMapping.value.hasOwnProperty(content)) {
    tabMapping.value[content] = true;
  }
}