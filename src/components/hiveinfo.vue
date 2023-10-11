<template>    

  <div id="hives">
    <hiveTotals/>
    <div :class="{ active: hive.active }" class="hiveinfo" v-for="hive in gameData.hive" :key="hive.id" @click="activateHive(hive)">
      <!-- Your hive content here -->
      <h4>{{ hive.biome }}</h4>
      <ul>
      <li><span>Radius:</span> <span>{{ formatNumber(hive.radius, "cm") }}</span></li>
      <li><span> {{ COMMON_NAMES.RESOURCES.BIOMASS.NAME }}:</span><span> {{ formatNumber(hive[COMMON_NAMES.RESOURCES.NAME][COMMON_NAMES.RESOURCES.BIOMASS.NAME].amount, 'mg') }}</span> </li>
      </ul>
      <bar :barNumbers="[hive.area, hive.areaUsed]" :max="hive.maxArea"/>
      <h4>Resources</h4>
      <!-- <div v-show="hive.active" class="hiveResources"> -->
      <div class="hiveResources">
        <ul>
          <template v-for="(resource, key) in hive[COMMON_NAMES.RESOURCES.NAME]">
            <li v-if="resource.show == true && key !== 'Biomass'">
                <span>{{ key }}:</span> {{ formatNumber(resource.amount, 'mg') }}
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
  <!-- <div id="hives">
      <div class="hiveinfo" v-for="hive in gameData.hive">
        <div class="expandable-div" :class="{ expanded: isExpanded }" @click="toggleExpansion">
          <span>Biome: {{ hive.biome }}</span>
          <span>Radius: {{ formatNumber(hive.radius, "cm") }}</span>
          <span class="hivearea">Area:</span>
          <bar :barNumbers="[60, 10]" :max="100"/>
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
  </div> -->
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData } from '@/assets/js/gameData.js'
  import { COMMON_NAMES } from '@/assets/js/definitions.js'
  import { formatNumber, hiveManager } from '@/assets/js/functions.js';
  import bar from '@/components/subcomponents/bar.vue';
  import hiveTotals from '@/components/totals.vue';
  
  const activateHive = (clickedHive) => {
  gameData.value.hive.forEach((hive) => {
    hive.active = hive === clickedHive;
  });
};
  // const toggleExpansion = () => {
  //   isExpanded.value = !isExpanded.value;
  // };
</script>
  
<style scoped>
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
  /* .food span, .hiveResources span  {
    display: inline-block;
    width: 75px;
  }
  span {
    display: inline-block;
    width: 150px;
  } */
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
    overflow: hidden;
    /* filter: blur(1px); */
    opacity: 0.5;
    height: 250px;
    /* width: 250px; */
    padding: 10px;
    transform: scale(0.9);
    /* height: 75px; */
    margin: 0 0 10px 0;
    background:   var(--theme-secondary);
    border: 1px solid var(--theme-accent);
    border-radius: 5px;
    color: wheat;
    transition: all 0.3s ease;
  }
  .hiveinfo.active {
    border: 1px solid var(--theme-tertiary);
    /* height: 200px; */
    /* filter: blur(0px); */
    transform: scale(1);
    opacity: 1;
  }
  #hives {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    width: 100%;
    padding: 10px 0;
  }

</style>

