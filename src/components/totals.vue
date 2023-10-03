<template>
<div id="hiveTotals">        
    <h3>Total</h3>
    <ul>
      <li v-for="(amount, label) in gameData.genes" :key="label">
        {{ label }}: {{ formatNumber(amount) }} 
      </li>
    </ul>
    <ul v-if="hasMultipleHives">
      <li v-for="(amount, label) in gameData.resources" :key="label">
        {{ label }}: {{ formatNumber(amount, "mg") }} 
      </li>
    </ul>
</div>
</template>

<script setup>
import { computed } from 'vue';
import { gameData } from '@/assets/js/gameData.js'
import { formatNumber } from '@/assets/js/functions.js';

console.log(gameData.value.hive);
const hasMultipleHives = computed(() => gameData.value.hive.length > 1);
</script>

<style scoped>
@import url('@/assets/css/themes.css');
#hiveTotals {
  top: 0;
  right: 0;
  background: var(--theme-primary);
  padding: 10px;
  border-radius: 10px;
}
#hiveTotals ul {
    display: flex;
    flex-wrap: wrap;
}
#hiveTotals ul li {
    flex-basis: calc(33.33% - 10px); /* 33.33% width with some spacing */
    margin-bottom: 10px; /* Add some margin for spacing between rows */
    box-sizing: border-box; /* Include padding and border in the width calculation */
    padding: 4px; /* Add padding to the list items */
    border-left: 1px solid var(--theme-accent); /* Add a border to the left of each list item */
    line-height: 15px;
    margin: 0;
}
</style>