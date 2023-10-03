<template>    
  <div id="hives">
      <div class="hiveinfo" v-for="hive in gameData.hive">
        <div class="expandable-div" :class="{ expanded: isExpanded }" @click="toggleExpansion"></div> 
          <span>Biome: {{ hive.biome }}</span>
          <span>Radius: {{ formatNumber(hive.radius, "cm") }}</span>
          <span class="hivearea">Area:</span>
          <table style="margin-bottom: -3.5px" class="hiveAreaTable">
            <thead>
              <tr>
                <th>Used</th>
                <th></th>
                <th>Occupied</th>
                <th></th>
                <th>Available</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ formatNumber(hive.areaUsed, "cm2") }}</td>
                <td class="slash">/ </td>
                <td>{{ formatNumber(hive.area, "cm2") }}</td>
                <td class="slash">/</td>
                <td>{{ formatNumber(hive.maxArea, "cm2") }} sq</td>
              </tr>
            </tbody>
          </table>
          <div class="hiveResources">
              <div v-for="(resource, key) in hive[COMMON_NAMES.RESOURCES.NAME]">
                <div v-if="resource.show == true">
                    {{ key }}: {{ formatNumber(resource.amount, 'mg') }}
                  </div>
              </div>
          </div>
          <p>-</p>
          <ul>
            <template v-for="(category, key) in hive[COMMON_NAMES.FOOD.NAME]">
              <li v-if="category.show === true">
              {{ key }}
                <ul>
                  <template v-for="(resource, subKey) in category">
                    <li v-if="resource.show === true">
                      <span>{{ subKey }} :</span>
                      <span>{{ formatNumber(resource.amount) }}</span> 
                      <button @click="hiveManager.eatFood(hive, key, subKey)">Eat</button>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>
        </div>
      </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData } from '@/assets/js/gameData.js'
  import { COMMON_NAMES } from '@/assets/js/definitions.js'
  import { formatNumber, hiveManager } from '@/assets/js/functions.js';
  
  const isExpanded = ref(false);
  
  const toggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>
  
<style scoped>
  /* Add styling for your expandable div here */
  .expandable-div {
    width: 100px; /* Set initial width */
    height: 100px; /* Set initial height */
    transition: width 0.3s ease, height 0.3s ease; /* Add smooth transitions */
    cursor: pointer;
  }
  
  /* Apply styling when expanded */
  .expanded {
    width: 200px; /* Set expanded width */
    height: 200px; /* Set expanded height */
  }
  .hivearea span {
    display: inline-block;
    width: 150px;
  }
  .food span, .hiveResources span  {
    display: inline-block;
    width: 75px;
  }
  span {
    display: inline-block;
    width: 150px;
  }
  .hivearea {
    width: max-content;
    margin-right: 5px;
  }
  .hiveAreaTable {
    display: inline-block;
    vertical-align: bottom;
  }
  .hiveAreaTable tr {
    font-size: 0.5rem;
    text-align: center;
  }
  .hiveAreaTable tr td {
    font-size: 1rem;
    text-align: center;
    width: 100px;
  }
  .hiveAreaTable .slash {
    width: 10px;
  }
  .hiveinfo {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    margin: 0 0 10px 0;
    background:   var(--theme-secondary);
    color: wheat
  }
  #hives {
    width: 100%;
  }
  #hiveView {
    box-sizing: border-box;
    /* height: 100vh; */
    overflow-y: auto;
  }
</style>