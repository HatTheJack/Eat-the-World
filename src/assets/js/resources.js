export const foodValues = {
  Overall: 0.00001,
  food: {
    Plants: {
      amountToEat: 100,
      multiplyer: 100000,
      resources: {
        Biomass: 1,
        Fibre: 1,
        Glucose: 1,
      },
      genes: {
        PlantsGene: 1,
      }
    },
    Insects: {
      amountToEat: 100,
      multiplyer: 200,
      resources: {
        Biomass: 10,
        Chitin: 10, // Scaled to match Biomass
        Protein: 10, // Scaled to match Biomass
      },
      genes: {
        InsectsGene: 1,
      }
    },
    Fish: {
      amountToEat: 1,
      multiplyer: 50,
      resources: {
        Biomass: 50000,
        Protein: 50000, // Scaled to match Biomass
        Fat: 50000, // Scaled to match Biomass
        Bones: 50000, // Scaled to match Biomass
      },
      genes: {
        FishGene: 1,
      }
    },
    Animals: {
      amountToEat: 1,
      multiplyer: 20,
      resources: {
        Biomass: 100,
        Protein: 100, // Scaled to match Biomass
        Fat: 100, // Scaled to match Biomass
        Bones: 100, // Scaled to match Biomass
      },
      genes: {
        AnimalsGene: 1,
      }
    },
    Humans: {
      amountToEat: 1,
      multiplyer: 1,
      resources: {
        Biomass: 5.477e+7,
        Protein: 7e+1, // Scaled to match Biomass
        Fat: 1.4e+7, // Scaled to match Biomass
        Bones: 9.8e+6, // Scaled to match Biomass
        Brains: 1.3e+6, // Scaled to match Biomass
      },
      genes: {
        HumansGene: 1,
      }
    },
    Trees: {
      amountToEat: 1,
      multiplyer: 10,
      resources: {
        Biomass: 7e+8,
        Ligin: 1e+8, // Scaled to match Biomass
        Cellulose: 2e+8, // Scaled to match Biomass
      },
      genes: {
        TreesGene: 1,
      }
    },
    Birds: {
      amountToEat: 1,
      multiplyer: 10,
      resources: {
        Biomass: 150,
        Protein: 150, // Scaled to match Biomass
        Fat: 150, // Scaled to match Biomass
        pneumatisedBones: 150, // Scaled to match Biomass
      },
      genes: {
        BirdsGene: 1,
      }
    }
  }
};
