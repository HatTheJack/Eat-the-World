import { ref, computed } from "vue";
import { initHiveForest } from "@/assets/js/hives.js";
import { researchData } from "@/assets/js/research.js";

// Define the gameData object
export const gameData = ref({
    hive: JSON.parse(JSON.stringify(initHiveForest)),
    heart: 
      { 
        amount: 0, 
        max: 100, 
        pertick: 1,
        multiplyer: 1,
        dyingState: false,
      },
    resources: {
        Biomass: 
          {
            amount: 0,
            show: true,
          }, 
        Fibre: 
          {
            amount: 0, 
            show: true,
          },
        Glucose:
          {
            amount: 0,
            show: true,
          },
        Chitin:
          {
            amount: 0,
            show: false,
          },
        Protein:
          {
            amount: 0,
            show: false,
          },
        Fat:
          {
            amount: 0,
            show: false,
          },
        Bones:
          {
            amount: 0,
            show: false,
          },
        Brains:
          {
            amount: 0,
            show: false,
          },
        Ligin:
          {
            amount: 0,
            show: false,
          },  
      },
    // object that contains all of the different genes and the amount of each
    genes: {
      PlantsGene: 1,
      HumansGene: 1,
      AnimalsGene: 1,
      InsectsGene: 1,
      Treesgene: 1,
      BirdsGene: 1,
    },
    date: 
      {
        // year days and hours since start of game where each second is an hour
        year: 0,
        day: 0,
        hour: 0,
        timer: 0,
    },
    research: JSON.parse(JSON.stringify(researchData)),
    foodUnlocked: {
      Plants: false,
      Insects: false,
      Fish: false,
      Animals: false,
      Birds: false,
      Trees: false,
      Humans: false,
    },
    totalEaten: {
      Flora: {
        Herbaceous: 0,
        Arthropods: 0,
      },
      Fauna: {      
        Mammalia: 0,
        Reptilia: 0,
        Aves: 0,
      },
      Fungi: 0,      
      Sentients: 0,
    },
});

// Define the tabMapping object, doesn't need to be stored in gameData
export const tabMapping = ref({
    hive: true,
    mutations: false,
    research: false,
    grow: false,
});

//computed values
export const totalResourcesInHive = computed(() => {
    const result = {};
  
    gameData.value.hive.forEach(hive => {
      for (const resourceKey in hive.resources) {
        if (result[resourceKey]) {
          result[resourceKey] += hive.resources[resourceKey].amount;
        } else {
          result[resourceKey] = hive.resources[resourceKey].amount;
        }
      }
    });
  
    return result;
  });
//binds the totalResourcesInHive to the gameData
gameData.value.resources = totalResourcesInHive;

export const showDev = ref(false);