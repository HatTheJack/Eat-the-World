import { COMMON_NAMES } from "@/assets/js/definitions.js";

export const foodValues = {
  Overall: 0.000001,
  [COMMON_NAMES.FOOD.NAME]: {
    [COMMON_NAMES.FOOD.FLORA.NAME]: {
      [COMMON_NAMES.FOOD.FLORA.HERBACEOUS.NAME]: {
        amountToEat: 100,
        multiplyer: 10000,
        resources: {
          Biomass: 1,
          Fibre: 1,
          Glucose: 1,
        },
        genes: {
          HerbaceousGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.FLORA.ARBOREAL.NAME]: {
        amountToEat: 100,
        multiplyer: 1,
        resources: {
          Biomass: 1,
          Fibre: 1,
          Glucose: 1,
        },
        genes: {
          ArborealGene: 1,
        }
      },
    },
    [COMMON_NAMES.FOOD.FAUNA.NAME]: {
      [COMMON_NAMES.FOOD.FAUNA.ARTHROPODS.NAME]: {
        amountToEat: 100,
        multiplyer: 200,
        resources: {
          Biomass: 10,
          Chitin: 10,
          Protein: 10,
        },
        genes: {
          ArthropodsGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.FAUNA.MAMMALIA.NAME]: {
        amountToEat: 1,
        multiplyer: 20,
        resources: {
          Biomass: 100,
          Protein: 100,
          Fat: 100,
          Bones: 100,
        },
        genes: {
          MammaliaGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.FAUNA.REPTILIA.NAME]: {
        amountToEat: 1,
        multiplyer: 20,
        resources: {
          Biomass: 100,
          Protein: 100,
          Fat: 100,
          Bones: 100,
        },
        genes: {
          ReptiliaGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.FAUNA.AVES.NAME]: {
        amountToEat: 1,
        multiplyer: 10,
        resources: {
          Biomass: 150,
          Protein: 150,
          Fat: 150,
          pneumatisedBones: 150,
        },
        genes: {
          AvianGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.FAUNA.AQUATIC.NAME]: {
        amountToEat: 1,
        multiplyer: 50,
        resources: {
          Biomass: 50000,
          Protein: 50000,
          Fat: 50000,
          Bones: 50000,
        },
        genes: {
          AquaticGene: 1,
        }
      },
    },
    [COMMON_NAMES.FOOD.MISC.NAME]: {
      [COMMON_NAMES.FOOD.MISC.FUNGI.NAME]: {
        amountToEat: 1,
        multiplyer: 10,
        resources: {
          Biomass: 1,
          Ligin: 1,
          Cellulose: 1,
        },
        genes: {
          FungiGene: 1,
        }
      },
      [COMMON_NAMES.FOOD.MISC.SENTIENTS.NAME]: {
        amountToEat: 1,
        multiplyer: 1,
        resources: {
          Biomass: 5.477e+7,
          Protein: 7e+1,
          Fat: 1.4e+7,
          Bones: 9.8e+6,
          Brains: 1.3e+6,
        },
        genes: {
          SentientsGene: 1,
        }
      },
    },
  }
};
