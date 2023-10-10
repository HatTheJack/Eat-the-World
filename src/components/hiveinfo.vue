<template>    
  <div id="hives">
      <div class="hiveinfo" v-for="hive in gameData.hive">
        <div class="expandable-div" :class="{ expanded: isExpanded }" @click="toggleExpansion">
          <span>Biome: {{ hive.biome }}</span>
          <span>Radius: {{ formatNumber(hive.radius, "cm") }}</span>
          <span class="hivearea">Area:</span>
          <bar :barNumbers="[60, 10]" :max="100"/>
          <!-- <table style="margin-bottom: -3.5px" class="hiveAreaTable">
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
          </table> -->
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
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData } from '@/assets/js/gameData.js'
  import { COMMON_NAMES } from '@/assets/js/definitions.js'
  import { formatNumber, hiveManager } from '@/assets/js/functions.js';
  import bar from '@/components/subcomponents/bar.vue';
  
  const isExpanded = ref(true);
  
  const toggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>
  
<style scoped>
  /* Add styling for your expandable div here */
  .expandable-div {
    height: max-content;
    max-height: 100px;
    transition: max-height 1s ease; 
    cursor: pointer;
    overflow: hidden;
  }
  
  /* Apply styling when expanded */
  .expanded {
    max-height: 500px; 
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
    border: 1px solid var(--theme-tertiary);
    border-radius: 5px;
    color: wheat
  }
  #hives {
    width: 100%;
    padding: 10px
  }
  #hiveView {
    box-sizing: border-box;
    /* height: 100vh; */
    overflow-y: auto;
  }
</style>