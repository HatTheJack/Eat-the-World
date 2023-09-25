export const foodValues = {
  Overall: 0.00001,
  food: {
    Plants: {
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
      resources: {
        Biomass: 50,
        Protein: 50, // Scaled to match Biomass
        Fat: 50, // Scaled to match Biomass
        Bones: 50, // Scaled to match Biomass
      },
      genes: {
        FishGene: 1,
      }
    },
    Animals: {
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
      resources: {
        Biomass: 200,
        Protein: 200, // Scaled to match Biomass
        Fat: 200, // Scaled to match Biomass
        Bones: 200, // Scaled to match Biomass
        Brains: 200, // Scaled to match Biomass
      },
      genes: {
        HumansGene: 1,
      }
    },
    Trees: {
      resources: {
        Biomass: 300,
        Lignin: 300, // Scaled to match Biomass
        Cellulose: 300, // Scaled to match Biomass
      },
      genes: {
        TreesGene: 1,
      }
    },
    Birds: {
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
