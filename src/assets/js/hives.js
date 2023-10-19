import { COMMON_NAMES } from "@/assets/js/definitions.js";

export const initHiveForest = ([
  { 
    id: 0,
    active: false,
    biome: "Forest",
    radius: 0.0001,
    radiusPerBeat: 1,
    areaUsed: 0,
    area: 0.000000031416,
    previousArea: 0,
    maxArea: 10000000000000,
    heart: 
      { 
        healthMultiplyer: 1,
        dyingState: true,
      }, 
    [COMMON_NAMES.RESOURCES]: {
      [COMMON_NAMES.BIOMASS]: {
        amount: 0.0001 * 100000,
        show: true,
        lost: {
          total: 0.0001,
          expansion: 0.00001,
        }
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
    [COMMON_NAMES.FOOD]: {
      [COMMON_NAMES.FLORA]: {
        show: true,
        [COMMON_NAMES.HERBACEOUS]: {
          show: true,
          amount: 314, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.ARBOREAL]: {
          show: false,
          amount: 0,
          perloop: 0,
          max: 0,
        },
      },
      [COMMON_NAMES.FAUNA]: {
        show: false,
        [COMMON_NAMES.ARTHROPODS]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.MAMMALIA]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max : 0,
        },
        [COMMON_NAMES.REPTILIA]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.AVES]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.AQUATIC]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
    },
      [COMMON_NAMES.MISC]: {
        show: false,
        [COMMON_NAMES.FUNGI]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
        [COMMON_NAMES.SENTIENTS]: {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      },
    },
  }, 
]);