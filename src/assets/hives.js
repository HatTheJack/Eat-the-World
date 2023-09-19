export const initHiveForest = ([
    { 
      id: 0, 
      biome: "Forest",
      radius: 10,
      radiusPerBeat: 1,
      areaUsed: 0,
      area: 314.16,
      maxArea: 10000000,
      heart: 
        { 
          healthMultiplyer: 0, 
        }, 
      resources: {
        Biomass: 
          {
            amount: 500, 
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
            amount: 0, 
            perloop: 100,
            max: 100000000000,
          },
        Trees: 
          {
            amount: 0,
            perloop: 1

          },
        Insects: 
          {
            amount: 0, 
            perloop: 1
          },
        Animals: 
          {
            amount: 0, 
            perloop: 1
          },
        Birds: 
          {
            amount: 0, 
            perloop: 1
          },
        Fish: 
          {
            amount: 0, 
            perloop: 1
          },
        Humans: 
          {
            amount: 0, 
            perloop: 1
          }
      }
    }, 
  ]);