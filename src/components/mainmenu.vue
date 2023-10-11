<template>
        <nav id="appTabs">
            <a @click="tabs('hive')" :class="{ active: tabMapping.hive}" href="#">Hives</a>
            <a @click="tabs('mutations')" :class="{ active: tabMapping.mutations}" href="#">Mutations</a>
            <a @click="tabs('research')" :class="{ active: tabMapping.research}" href="#">Research</a>
            <a @click="tabs('grow')" :class="{ active: tabMapping.grow}" href="#">Grow</a>
        </nav>  
        <div id="tabContent">
            <div v-show="tabMapping.hive">
                <h3>hives are here</h3>
            </div>
            <div v-show="tabMapping.mutations">
                <h3>Mutations are here</h3>
            </div>
            <div v-show="tabMapping.research">
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
            </div>
            <div v-show="tabMapping.grow">
            <h3>Growing is here</h3>
            <button @click="addHive('Desert')" id="addHive">add hive</button>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import { gameData, tabMapping } from '@/assets/js/gameData.js';
import { researchInfo } from '@/assets/js/research.js';
import { addHive } from '@/assets/js/functions.js';
import tooltip from '@/components/tooltip.vue';

function tabs(content) {
  // Set all properties to false
  for (const key in tabMapping.value) {
    tabMapping.value[key] = false;
  }

  // Set the corresponding variable to true based on the content input
  if (tabMapping.value.hasOwnProperty(content)) {
    tabMapping.value[content] = true;
  }
}
</script>

<style>
@import url('@/assets/css/themes.css');
aside {
    position: absolute;
    top: 35px;
    right: 0;
    left: 40%;
    width: 100%;
    height: 100%;
}   
</style>