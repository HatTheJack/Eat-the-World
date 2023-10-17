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
            <research v-if="tabMapping.research"/>
            <div v-show="tabMapping.grow">
            <h3>Growing is here</h3>
            <button @click="hiveManager.addHive('Desert')" id="addHive">add hive</button>
            </div>
        </div>
</template>

<script setup>
import { ref } from 'vue';
import { gameData, tabMapping } from '@/assets/js/gameData.js';
import { researchInfo } from '@/assets/js/research.js';
import { hiveManager } from '@/assets/js/functions.js';
import tooltip from '@/components/tooltip.vue';
import research from '@/components/research.vue'

function tabs(content) {
  // Set all properties to false
  for (const key in tabMapping.value) {
    tabMapping.value[key] = false;
  }
  // Set the corresponding variable to true based on the content input
  if (tabMapping.value.hasOwnProperty(content)) {
    console.log(content);
    tabMapping.value[content] = true;
  }
}
</script>

<style scoped>

@import url('@/assets/css/themes.css');

  #tabContent {
    margin-top: 35px;
    padding: 10px;
    border-top: 3px solid var(--theme-accent);
  }
  #appTabs {
    position: absolute;
    padding: 5px;
    width: 100%;
    height: 35px;
  }
  #appTabs a {
    display: inline-block;
    box-sizing: border-box;
    padding: 5px 20px;
    margin-right: 10px;
    width: max-content;
    border: 3px solid transparent;
    /* border-bottom: 3px solid var(--theme-accent); */
    text-decoration: none;
    color: var(--theme-accent);
  }
  #appTabs a.active {
    background: var(--theme-background);
    border: 3px solid var(--theme-accent);
    border-radius: 3px;
    border-bottom: 3px solid transparent;
  }
</style>