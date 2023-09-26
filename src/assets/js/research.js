// array to hold all the research data
export const researchInfo = {
    tierBiome: {
        venusFlyTrap: {
            name: "Venus Fly Trap",
            description: "A plant that eats insects",
            cost: {
                genes: {
                    PlantsGene: 1000,
                },
                resources: {
                    Biomass: 100,
                    Glucose: 1000,
                    Fibre: 1000,
                },
            },
            requiredFood: "Insects",
            unlockedBy: undefined,
            unlocks: "Leaf Cutter Ant",
            biome: "Forest",
            tier: 1,
        },
        leafCutterAnt: {
            name: "Leaf Cutter Ant",
            description: "An insect that farms plants",
            cost: {
                genes: {
                    InsectsGene: 1000,
                },
                resources: {
                    Biomass: 100,
                    Glucose: 100,
                    Fibre: 100,
                },
            },
            requiredFood: "Insects",
            unlockedBy: "Venus Fly Trap",
            unlocks: undefined,
            biome: "Forest",
            tier: 1,
        },
    }
}

export const researchData = {
    tierBiome: {
        venusFlyTrap: {
            requiredFoodMet: false,
            affordable: false,
            available: true,
            unlocked: false,
        },
        leafCutterAnt: {
            requiredFoodMet: false,
            affordable: false,
            available: false,
            unlocked: false,
        },
    }
}

