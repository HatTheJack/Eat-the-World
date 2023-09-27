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
    resources: {
      Biomass: 
        {
          amount: 500,
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
      Cellulose:
        {
          amount: 0,
          show: false,
        },
      pneumatisedBones:
        {
          amount: 0,
          show: false,
        },
    },
    food: {
      Plants: 
        {
          show: true,
          amount: 314, 
          perloop: 0,
          max: 0,
        },
      Insects: 
        {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      Animals: 
        {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      Trees: 
        {
          show: false,
          amount: 0,
          perloop: 0,
          max: 0,
        },
      Birds: 
        {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      Fish: 
        {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        },
      Humans: 
        {
          show: false,
          amount: 0, 
          perloop: 0,
          max: 0,
        }
    }
  }, 
]);