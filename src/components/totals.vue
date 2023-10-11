<template>
<div id="hiveTotals">        
    <h4>Genes</h4>
    <ul>
      <li v-for="(amount, label) in gameData.genes" :key="label">
        <span>{{ label }}</span> 
        <span>{{ formatNumber(amount) }}</span>
      </li>
    </ul>
    <!-- <ul v-if="hasMultipleHives">
      <li v-for="(amount, label) in gameData.resources" :key="label">
        {{ label }}: {{ formatNumber(amount, "mg") }} 
      </li>
    </ul> -->
</div>
</template>

<script setup>
import { computed } from 'vue';
import { gameData } from '@/assets/js/gameData.js'
import { COMMON_NAMES } from '@/assets/js/definitions.js'
import { formatNumber } from '@/assets/js/functions.js';

console.log(gameData.value.hive);
const hasMultipleHives = computed(() => gameData.value.hive.length > 1);
</script>

<style scoped>
  @import url('@/assets/css/themes.css');
  /* #hiveTotals {
    top: 0;
    right: 0;
    background: var(--theme-primary);
    padding: 10px;
    border-radius: 10px;
  } */
  #hiveTotals {
    display: block;
    box-sizing: border-box;
    overflow: hidden;
    /* filter: blur(1px); */
    /* opacity: 0.5; */
    height: 250px;
    /* width: 250px; */
    padding: 10px;
    /* transform: scale(0.9); */
    /* height: 75px; */
    margin: 0 0 10px 0;
    background:   var(--theme-primary);
    border: 1px solid var(--theme-secondary);
    border-radius: 5px;
    color: wheat;
    transition: all 0.3s ease;
  }
  h4 {
    display: block;
    text-align: center;
  }
  h4:not(:first-child) {
    margin-top: 10px;
  }
  li {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  li::before {
    content: '';
    position: absolute;
    opacity: 0.2;
    bottom: 2px;
    left: 0;
    width: 100%;
    border-bottom: 1px dashed var(--theme-text);
    transform: translateY(-50%);
  }
</style>