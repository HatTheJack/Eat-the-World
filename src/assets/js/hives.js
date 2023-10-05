import { COMMON_NAMES } from "@/assets/js/definitions.js";

export const initHiveForest = ([
  { 
    id: 0, 
    biome: "Forest",
    radius: 10,
    radiusPerBeat: 1,
    areaUsed: 0,
    area: 314.16,
    previousArea: 0,
    maxArea: 100000000,
    heart: 
      { 
        healthMultiplyer: 1,
        dyingState: true,
      }, 
    [COMMON_NAMES.RESOURCES.NAME]: {
      [COMMON_NAMES.RESOURCES.BIOMASS.NAME]: {
        amount: 10000000,
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
    [COMMON_NAMES.FOOD.NAME]: {
      [COMMON_NAMES.FOOD.FLORA.NAME]: {
        show: true,
        [COMMON_NAMES.FOOD.FLORA.HERBACEOUS.NAME]: {
          show: true,
          amount: 314, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.FOOD.FLORA.ARBOREAL.NAME]: {
          show: false,
          amount: 0,
          perloop: 0,
          max: 0,
        },
      },
      [COMMON_NAMES.FOOD.FAUNA.NAME]: {
        show: false,
        [COMMON_NAMES.FOOD.FAUNA.ARTHROPODS.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.FOOD.FAUNA.MAMMALIA.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max : 0,
        },
        [COMMON_NAMES.FOOD.FAUNA.REPTILIA.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.FOOD.FAUNA.AVES.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.FOOD.FAUNA.AQUATIC.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
    },
      [COMMON_NAMES.FOOD.MISC.NAME]: {
        show: false,
        [COMMON_NAMES.FOOD.MISC.FUNGI.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.FOOD.MISC.SENTIENTS.NAME]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      },
    },
  }, 
]);