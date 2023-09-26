export const growthsInfo = {
    tierBiome: {
        venusFlyTrap:
        {
            name: "Venus Fly Trap",
            description: "A plant that eats insects",
            // variable that will be used to determine which resource and how many resources are gained per growth
            actions: {
                eat: {
                    food: {
                        Insects: 1,
                    }
                }
            },
            costMultiplyer: 2,
            cost: {
                },
                resources: {
                    Biomass: 100,
                    Glucose: 1000,
                    Fibre: 1000,
                },
            },
            unlockedBy: "Venus Fly Trap",
            biome: "Forest",
            tier: 1,
    },
}
export const growthsData = {
    tierBiome: {
        venusFlyTrap: {
            available: false,
            unlocked: false,
        },
        leafCutterAnt: {
            available: false,
            unlocked: false,
        },
    }
}