<template>    

  <div id="hives">
    <hiveTotals/>
    <div :class="{ active: hive.active }" class="hiveinfo" v-for="hive in gameData.hive" :key="hive.id" @click="activateHive(hive)">
      <!-- Your hive content here -->
      <h4>{{ hive.biome }}</h4>
      <ul>
      <li><span>Radius:</span> <span v-html="gameDataTweened.radius"></span></li>
      <li><span> {{ formatPropertyName(COMMON_NAMES.BIOMASS) }}:</span><span v-html="gameDataTweened.resource.biomass"></span> </li>
      </ul>
      <!-- {{ formatNumber(hive.area, 'cm2') }} / {{ formatNumber(hive.maxArea, 'cm2') }} -->
      <bar :barNumbers="[hive.area, hive.areaUsed]" :max="hive.maxArea"/>
      <h4>Resources</h4>
      <!-- <div v-show="hive.active" class="hiveResources"> -->
      <div class="hiveResources">
        <ul>
          <template v-for="(resource, key) in hive[COMMON_NAMES.RESOURCES]">
            <li v-if="resource.show == true && key !== 'biomass'">
                <span>{{ formatPropertyName(key) }}:</span><span v-html="formatNumber(resource.amount, 'kg')"></span>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData, gameDataTweened } from '@/assets/js/gameData.js'
  import { COMMON_NAMES } from '@/assets/js/definitions.js'
  import { formatNumber, hiveManager, formatPropertyName } from '@/assets/js/functions.js';
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
  /* transform: translateY(-50%); */
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
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 10px;
  width: 100%;
  padding: 10px 0;
  max-width: 600px; /* Adjust this max-width as needed */
}
  .unit {
    margin-left: 10px;
  }
</style>

