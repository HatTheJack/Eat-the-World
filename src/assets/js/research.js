import { COMMON_NAMES } from "@/assets/js/definitions.js";

// constructor to create research objects
class Research {
    constructor(name, description, requiredFood, unlockedBy, unlocks, biome, tier, genesCosts, resourcesCosts) {
        this.name = name;
        this.description = description;
        this.requiredFood = requiredFood;
        this.unlockedBy = unlockedBy;
        this.unlocks = unlocks;
        this.biome = biome;
        this.tier = tier;

        // Initialize the cost object for genes and resources
        this.cost = {
            genes: {},
            resources: {},
        };
        // Populate the genes and resources costs
        genesCosts.forEach((category, amount) => {
            this.cost.genes[category] = amount;
        });

        resourcesCosts.forEach((category, amount) => {
            this.cost.resources[category] = amount;
        });
    }
}

// array to hold all the research data
export const researchInfo = {
    tierBiome: {
        venusFlyTrap: new Research(
            "venus Fly trap",
            "A plant that eats insects",
            "Insects",
            undefined,
            "Leaf Cutter Ant",
            "Forest",
            1,
            [
                [COMMON_NAMES.HERBACEOUS_GENE, 1000],
            ],
            [
                [COMMON_NAMES.BIOMASS, 100],
                [COMMON_NAMES.GLUCOSE, 1000],
                [COMMON_NAMES.FIBRE, 1000],
            ]
        ),
        leafCutterAnt: new Research(
            "Leaf Cutter Ant",
            "An insect that farms plants",
            "Insects",
            "Venus Fly Trap",
            undefined,
            "Forest",
            1,
            [
                [COMMON_NAMES.ARTHROPODS_GENE, 1000],
            ],
            [
                [COMMON_NAMES.BIOMASS, 100],
                [COMMON_NAMES.GLUCOSE, 100],
                [COMMON_NAMES.FIBRE, 100],
            ]
        ),
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