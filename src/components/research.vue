<template>    
    <div v-for="(research, key) in researchInfo.tierBiome">
        <tooltip class="purchaseButton" v-if="gameData.research.tierBiome[key].available && !gameData.research.tierBiome[key].unlocked">
            <button @click="unlockResearch(key)">{{ key }}</button>
            <template #tooltip>
                <h3>{{ key }}</h3>
                <span>{{ research.description }}</span>
                <ul>
                <li v-for="(cost, key) in research.cost.genes">{{ key }}: {{ cost }}</li>
                </ul>
                <ul>
                <li v-for="(cost, key) in research.cost.resources">{{ key }}: {{ cost }}</li>
                </ul>
            </template>
        </tooltip>
    </div>
</template>

<script setup>
import { researchInfo } from '@/assets/js/research.js';
import { gameData, tabMapping } from '@/assets/js/gameData.js';
import tooltip from '@/components/tooltip.vue';


</script>

<style scoped>
@import url('@/assets/css/themes.css');
  .purchaseButton button {
      background-color: var(--theme-primary);
      padding: 10px;
    }
  .purchaseButton button:hover {
    background-color: var(--theme-secondary);
  }
</style>