import { ref, computed } from "vue";
import { initHiveForest } from "@/assets/js/hives.js";
import { researchData } from "@/assets/js/research.js";
import { COMMON_NAMES } from "@/assets/js/definitions.js";

// Define the gameData object
export const gameData = ref({
    paused: false,
    hive: JSON.parse(JSON.stringify(initHiveForest)),
    heart: 
      { 
        amount: 0,
        amountPercent: 0,
        amountPercentInverted: 0,
        max: 1000, 
        pertick: 10,
        multiplyer: 1,
        dyingState: false,
      },
    [COMMON_NAMES.RESOURCES.NAME]: {
        [COMMON_NAMES.RESOURCES.BIOMASS.NAME]: {
          amount: 0,
          show: true,
        },
        [COMMON_NAMES.RESOURCES.FIBRE.NAME]: {
          amount: 0,
          show: true,
        },
        [COMMON_NAMES.RESOURCES.GLUCOSE.NAME]: {
          amount: 0,
          show: true,
        },
        [COMMON_NAMES.RESOURCES.CHITIN.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.PROTEIN.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.FAT.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.BONES.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.BRAINS.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.LIGIN.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.CELLULOSE.NAME]: {
          amount: 0,
          show: false,
        },
        [COMMON_NAMES.RESOURCES.PNEUMATISED_BONES.NAME]: {
          amount: 0,
          show: false,
        },
      },
    // object that contains all of the different genes and the amount of each
    [COMMON_NAMES.GENES.NAME]: {
      [COMMON_NAMES.FOOD.FLORA.HERBACEOUS.GENE]: 0,
      [COMMON_NAMES.FOOD.FLORA.ARBOREAL.GENE]: 0,
      [COMMON_NAMES.FOOD.FAUNA.ARTHROPODS.GENE]: 0,
      [COMMON_NAMES.FOOD.FAUNA.MAMMALIA.GENE]: 0,
      [COMMON_NAMES.FOOD.FAUNA.REPTILIA.GENE]: 0,
      [COMMON_NAMES.FOOD.FAUNA.AVES.GENE]: 0,
      [COMMON_NAMES.FOOD.MISC.FUNGI.GENE]: 0,
      [COMMON_NAMES.FOOD.MISC.SENTIENTS.GENE]: 0,
    },
    date: 
      {
        // year days and hours since start of game where each second is an hour
        year: 0,
        day: 0,
        hour: 0,
        timer: 0,
        timestamp: 0,
        tickstamp: 0,
    },
    research: JSON.parse(JSON.stringify(researchData)),
    foodUnlocked: {
      [COMMON_NAMES.FOOD.FLORA.HERBACEOUS.NAME]: false,
      [COMMON_NAMES.FOOD.FLORA.ARBOREAL.NAME]: false,
      [COMMON_NAMES.FOOD.FAUNA.ARTHROPODS.NAME]: false,
      [COMMON_NAMES.FOOD.FAUNA.MAMMALIA.NAME]: false,
      [COMMON_NAMES.FOOD.FAUNA.REPTILIA.NAME]: false,
      [COMMON_NAMES.FOOD.FAUNA.AVES.NAME]: false,
      [COMMON_NAMES.FOOD.FAUNA.AQUATIC.NAME]: false,
      [COMMON_NAMES.FOOD.MISC.FUNGI.NAME]: false,
      [COMMON_NAMES.FOOD.MISC.SENTIENTS.NAME]: false,
    },
    totalEaten: {
      [COMMON_NAMES.FOOD.FLORA.NAME]: {
        [COMMON_NAMES.FOOD.FLORA.HERBACEOUS.NAME]: 0,
        [COMMON_NAMES.FOOD.FLORA.ARBOREAL.NAME]: 0,
      },
      [COMMON_NAMES.FOOD.FAUNA.NAME]: {
        [COMMON_NAMES.FOOD.FAUNA.ARTHROPODS.NAME]: 0,
        [COMMON_NAMES.FOOD.FAUNA.MAMMALIA.NAME]: 0,
        [COMMON_NAMES.FOOD.FAUNA.REPTILIA.NAME]: 0,
        [COMMON_NAMES.FOOD.FAUNA.AVES.NAME]: 0,
        [COMMON_NAMES.FOOD.FAUNA.AQUATIC.NAME]: 0,
      },
      [COMMON_NAMES.FOOD.MISC.NAME]: {
        [COMMON_NAMES.FOOD.MISC.FUNGI.NAME]: 0,
        [COMMON_NAMES.FOOD.MISC.SENTIENTS.NAME]: 0,
      },
    },
});

export const heartAmountPercent = computed(() => {
  return gameData.value.heart.amount / gameData.value.heart.max;
});
gameData.value.heart.amountPercent = heartAmountPercent;

export const heartAmountPercentInverted = computed(() => {
  return 1 - (gameData.value.heart.amount / gameData.value.heart.max);
});
gameData.value.heart.amountPercentInverted = heartAmountPercentInverted;

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
      for (const resourceKey in hive[COMMON_NAMES.RESOURCES.NAME]) {
        if (result[resourceKey]) {
          result[resourceKey] += hive[COMMON_NAMES.RESOURCES.NAME][resourceKey].amount;
        } else {
          result[resourceKey] = hive[COMMON_NAMES.RESOURCES.NAME][resourceKey].amount;
        }
      }
    });
  
    return result;
  });
//binds the totalResourcesInHive to the gameData
gameData.value.resources = totalResourcesInHive;

// export const showDev = ref(false);
// const paused = ref(false);