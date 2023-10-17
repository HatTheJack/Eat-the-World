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
  [COMMON_NAMES.RESOURCES]: {
      [COMMON_NAMES.BIOMASS]: {
        amount: 0,
        show: true,
      },
      [COMMON_NAMES.FIBRE]: {
        amount: 0,
        show: true,
      },
      [COMMON_NAMES.GLUCOSE]: {
        amount: 0,
        show: true,
      },
      [COMMON_NAMES.CHITIN]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.PROTEIN]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.FAT]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.BONES]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.BRAINS]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.LIGIN]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.CELLULOSE]: {
        amount: 0,
        show: false,
      },
      [COMMON_NAMES.PNEUMATISED_BONES]: {
        amount: 0,
        show: false,
      },
    },
  // object that contains all of the different genes and the amount of each
  [COMMON_NAMES.GENES]: {
    [COMMON_NAMES.HERBACEOUS_GENE]: 0,
    [COMMON_NAMES.ARBOREAL_GENE]: 0,
    [COMMON_NAMES.ARTHROPODS_GENE]: 0,
    [COMMON_NAMES.MAMMALIA_GENE]: 0,
    [COMMON_NAMES.REPTILIA_GENE]: 0,
    [COMMON_NAMES.AVES_GENE]: 0,
    [COMMON_NAMES.FUNGI_GENE]: 0,
    [COMMON_NAMES.SENTIENTS_GENE]: 0,
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
    [COMMON_NAMES.HERBACEOUS]: false,
    [COMMON_NAMES.ARBOREAL]: false,
    [COMMON_NAMES.ARTHROPODS]: false,
    [COMMON_NAMES.MAMMALIA]: false,
    [COMMON_NAMES.REPTILIA]: false,
    [COMMON_NAMES.AVES]: false,
    [COMMON_NAMES.AQUATIC]: false,
    [COMMON_NAMES.FUNGI]: false,
    [COMMON_NAMES.SENTIENTS]: false,
  },
  totalEaten: {
    [COMMON_NAMES.FLORA]: {
      [COMMON_NAMES.HERBACEOUS]: 0,
      [COMMON_NAMES.ARBOREAL]: 0,
    },
    [COMMON_NAMES.FAUNA]: {
      [COMMON_NAMES.ARTHROPODS]: 0,
      [COMMON_NAMES.MAMMALIA]: 0,
      [COMMON_NAMES.REPTILIA]: 0,
      [COMMON_NAMES.AVES]: 0,
      [COMMON_NAMES.AQUATIC]: 0,
    },
    [COMMON_NAMES.MISC]: {
      [COMMON_NAMES.FUNGI]: 0,
      [COMMON_NAMES.SENTIENTS]: 0,
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
      for (const resourceKey in hive[COMMON_NAMES.RESOURCES]) {
        if (result[resourceKey]) {
          result[resourceKey] += hive[COMMON_NAMES.RESOURCES][resourceKey].amount;
        } else {
          result[resourceKey] = hive[COMMON_NAMES.RESOURCES][resourceKey].amount;
        }
      }
    });
  
    return result;
  });
//binds the totalResourcesInHive to the gameData
gameData.value.resources = totalResourcesInHive;

// export const showDev = ref(false);
// const paused = ref(false);