import { COMMON_NAMES } from "@/assets/js/definitions.js";

// export const foodValues = {
//   Overall: 0.000001,
//   [COMMON_NAMES.FOOD]: {
//     [COMMON_NAMES.FLORA]: {
//       [COMMON_NAMES.HERBACEOUS]: {
//         amountToEat: 100,
//         multiplyer: 10000,
//         resources: {
//           Biomass: 1,
//           Fibre: 1,
//           Glucose: 1,
//         },
//         genes: {
//           HerbaceousGene: 1,
//         }
//       },
//       [COMMON_NAMES.ARBOREAL]: {
//         amountToEat: 100,
//         multiplyer: 1,
//         resources: {
//           Biomass: 1,
//           Fibre: 1,
//           Glucose: 1,
//         },
//         genes: {
//           ArborealGene: 1,
//         }
//       },
//     },
//     [COMMON_NAMES.FAUNA]: {
//       [COMMON_NAMES.ARTHROPODS]: {
//         amountToEat: 100,
//         multiplyer: 200,
//         resources: {
//           Biomass: 10,
//           Chitin: 10,
//           Protein: 10,
//         },
//         genes: {
//           ArthropodsGene: 1,
//         }
//       },
//       [COMMON_NAMES.MAMMALIA]: {
//         amountToEat: 1,
//         multiplyer: 20,
//         resources: {
//           Biomass: 100,
//           Protein: 100,
//           Fat: 100,
//           Bones: 100,
//         },
//         genes: {
//           MammaliaGene: 1,
//         }
//       },
//       [COMMON_NAMES.REPTILIA]: {
//         amountToEat: 1,
//         multiplyer: 20,
//         resources: {
//           Biomass: 100,
//           Protein: 100,
//           Fat: 100,
//           Bones: 100,
//         },
//         genes: {
//           ReptiliaGene: 1,
//         }
//       },
//       [COMMON_NAMES.AVES]: {
//         amountToEat: 1,
//         multiplyer: 10,
//         resources: {
//           Biomass: 150,
//           Protein: 150,
//           Fat: 150,
//           pneumatisedBones: 150,
//         },
//         genes: {
//           AvianGene: 1,
//         }
//       },
//       [COMMON_NAMES.AQUATIC]: {
//         amountToEat: 1,
//         multiplyer: 50,
//         resources: {
//           Biomass: 50000,
//           Protein: 50000,
//           Fat: 50000,
//           Bones: 50000,
//         },
//         genes: {
//           AquaticGene: 1,
//         }
//       },
//     },
//     [COMMON_NAMES.MISC]: {
//       [COMMON_NAMES.FUNGI]: {
//         amountToEat: 1,
//         multiplyer: 10,
//         resources: {
//           Biomass: 1,
//           Ligin: 1,
//           Cellulose: 1,
//         },
//         genes: {
//           FungiGene: 1,
//         }
//       },
//       [COMMON_NAMES.SENTIENTS]: {
//         amountToEat: 1,
//         multiplyer: 1,
//         resources: {
//           Biomass: 5.477e+7,
//           Protein: 7e+1,
//           Fat: 1.4e+7,
//           Bones: 9.8e+6,
//           Brains: 1.3e+6,
//         },
//         genes: {
//           SentientsGene: 1,
//         }
//       },
//     },
//   }
// };

export const foodValues = {
  Overall: 0.000001,
  [COMMON_NAMES.FOOD]: {
    [COMMON_NAMES.FLORA]: {
      [COMMON_NAMES.HERBACEOUS]: {
        amountToEat: 100,
        multiplyer: 10000,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 1,
          [COMMON_NAMES.FIBRE]: 1,
          [COMMON_NAMES.GLUCOSE]: 1,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.HERBACEOUS_GENE]: 1,
        }
      },
      [COMMON_NAMES.ARBOREAL]: {
        amountToEat: 100,
        multiplyer: 1,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 1,
          [COMMON_NAMES.FIBRE]: 1,
          [COMMON_NAMES.GLUCOSE]: 1,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.ARBOREAL_GENE]: 1,
        }
      },
    },
    [COMMON_NAMES.FAUNA]: {
      [COMMON_NAMES.ARTHROPODS]: {
        amountToEat: 100,
        multiplyer: 200,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 10,
          [COMMON_NAMES.CHITIN]: 10,
          [COMMON_NAMES.PROTEIN]: 10,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.ARTHROPODS_GENE]: 1,
        }
      },
      [COMMON_NAMES.MAMMALIA]: {
        amountToEat: 1,
        multiplyer: 20,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 100,
          [COMMON_NAMES.PROTEIN]: 100,
          [COMMON_NAMES.FAT]: 100,
          [COMMON_NAMES.BONES]: 100,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.MAMMALIA_GENE]: 1
        }
      },
      [COMMON_NAMES.REPTILIA]: {
        amountToEat: 1,
        multiplyer: 20,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 100,
          [COMMON_NAMES.PROTEIN]: 100,
          [COMMON_NAMES.FAT]: 100,
          [COMMON_NAMES.BONES]: 100,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.REPTILIA_GENE]: 1,
        }
      },
      [COMMON_NAMES.AVES]: {
        amountToEat: 1,
        multiplyer: 10,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 150,
          [COMMON_NAMES.PROTEIN]: 150,
          [COMMON_NAMES.FAT]: 150,
          [COMMON_NAMES.PNEUMATISED_BONES]: 150,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.AVES_GENE]: 1,
        }
      },
      [COMMON_NAMES.AQUATIC]: {
        amountToEat: 1,
        multiplyer: 50,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 50000,
          [COMMON_NAMES.PROTEIN]: 50000,
          [COMMON_NAMES.FAT]: 50000,
          [COMMON_NAMES.BONES]: 50000,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.AQUATIC_GENE]: 1,
        }
      },
    },
    [COMMON_NAMES.MISC]: {
      [COMMON_NAMES.FUNGI]: {
        amountToEat: 1,
        multiplyer: 10,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 1,
          [COMMON_NAMES.LIGIN]: 1,
          [COMMON_NAMES.CELLULOSE]: 1,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.FUNGI_GENE]: 1,
        }
      },
      [COMMON_NAMES.SENTIENTS]: {
        amountToEat: 1,
        multiplyer: 1,
        [COMMON_NAMES.RESOURCES]: {
          [COMMON_NAMES.BIOMASS]: 5.477e+7,
          [COMMON_NAMES.PROTEIN]: 7e+1,
          [COMMON_NAMES.FAT]: 1.4e+7,
          [COMMON_NAMES.BONES]: 9.8e+6,
          [COMMON_NAMES.BRAINS]: 1.3e+6,
        },
        [COMMON_NAMES.GENES]: {
          [COMMON_NAMES.SENTIENTS_GENE]: 1,
        }
      },
    },
  }
};