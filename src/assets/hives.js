export const initHiveForest = ([
    { 
      id: 0, 
      biome: "Forest",
      radius: 10,
      radiusPerBeat: 1,
      areaUsed: 0,
      area: 314.16,
      previousArea: 0,
      maxArea: 10000000,
      heart: 
        { 
          healthMultiplyer: 1,
          dyingState: true,
        }, 
      resources: {
        Biomass: 
          {
            amount: 500000000000, 
            perloop: 10
          }, 
        Fibre: 
          {
            amount: 0, 
            perloop: 1
          }
      },
      harvest: {
        Plants: 
          {
            amount: 314, 
            perloop: 100,
            max: 0,
          },
        Trees: 
          {
            amount: 0,
            perloop: 1,
            max: 0,
          },
        Insects: 
          {
            amount: 0, 
            perloop: 1,
            max: 0,
          },
        Animals: 
          {
            amount: 0, 
            perloop: 1,
            max: 0,
          },
        Birds: 
          {
            amount: 0, 
            perloop: 1,
            max: 0,
          },
        Fish: 
          {
            amount: 0, 
            perloop: 1,
            max: 0,
          },
        Humans: 
          {
            amount: 0, 
            perloop: 1,
            max: 0,
          }
      }
    }, 
  ]);