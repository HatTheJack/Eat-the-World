<!-- 
To update distro run following commands
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh_pages 
-->
<script setup>
import { defineSSRCustomElement, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
// import { initHiveForest } from '@/assets/js/hives.js'
import { gameData, tabMapping, showDev } from '@/assets/js/gameData.js'
import { foodValues } from "@/assets/js/resources.js";
import { calculateArea, formatNumber, calculateHeartPosition, eatFood, heartBeat, tickHour, addHive, tabs, unlockResearch } from '@/assets/js/functions.js';
import { researchInfo } from '@/assets/js/research.js';
import ChildComponent from './components/popups.vue';
import tooltip from './components/tooltip.vue';


//init some variables
// Define a variable to store the interval ID
const loopInterval = 10;
let mainGameLoop;


// main loop function
function mainLoop() {
  // let biomassAreaMultiplyer = 500;
  // let fibreAreaMultiplyer = 1.5;
  gameData.value.date.timer++;
  heartBeat();

  if (gameData.value.date.timer == 100) {
    gameData.value.date.timer = 0;// reset counter
    //add to hour every time then add to day when hour is 24 and year when day is 365
    tickHour();
    // add to each harvest resource based on harvest multiplyer and current area
    gameData.value.hive.forEach(hive => {
      for (const resourceKey in hive.food) {
        // add the harvest if there is less of the harvest than the total area times multiplyer
        if (hive.food[resourceKey].amount < hive.food[resourceKey].max) {
          hive.food[resourceKey].amount += Math.round(foodValues[resourceKey] * hive.area/1000000);
        }
      }
    });


    if (gameData.value.heart.dyingState == true) {
      gameData.value.hive.forEach(hive => {
        hive.heart.healthMultiplyer = Math.max(hive.heart.healthMultiplyer - 0.001, -1)
      });  
    }

   
    // do stuff every second
  }


  // gameData.value.hive.forEach(hive => {
  //   // Calculate the radius increment based on growth.persecond
  //   // Update the growth amount
  //   if  ( hive.growth.amount < hive.growth.max && hive.resources.Biomass.amount >= hive.area/biomassAreaMultiplyer) {
  //     hive.growth.amount += hive.growth.pertick;
  //     hive.resources.Biomass.amount -= hive.area/biomassAreaMultiplyer;
  //     heartBeat();
  //   } 
  //   // heartbeat - everytime the hive heart tickets to 100%
  //   if ( hive.growth.amount >= hive.growth.max && hive.resources.Biomass.amount >= hive.growth.pertick && hive.area < hive.maxArea) {
  //       hive.growth.amount = 0; // reset progres bar
  //       hive.radius += hive.radiusPerBeat; // increase radius by radius per beat
  //       hive.area = Math.min(hive.maxArea, calculateArea(hive.radius)); // calculate new area
  //   } 
  // });
}
// Create a ref to store the width of the element
const heartbeatWidth = ref(0);

// Create a ref to the DOM element you want to measure
const heartbeatElement = ref(null);

// Use the onMounted hook to measure the element's width after it's mounted
// Use the onMounted hook to start the loop when the component is mounted
onMounted(() => {
  // if (heartbeatElement.value) {
  //   heartbeatWidth.value = heartbeatElement.value.offsetWidth;
  // }
  mainGameLoop = setInterval(mainLoop, loopInterval); // Execute mainLoop every 1000 milliseconds (1 second)
});


</script>

<template>
  <!-- <child-component /> -->
  <!-- top information menu in game date and time etc -->
  <div class="flexContainerVertical">
    <div id="topMenu" class="">
      <div id="gameDate">
        <span>Year: {{ gameData.date.year }}</span>
        <span>Day: {{ gameData.date.day }}</span>
        <!-- <span>timer: {{ gameData.date.timer }}</span>  -->
      </div>
    </div>

    <div class="flexContainerHorizontal flexChild95">
      <div id="hiveView" class="flexChild40 flexChildVertical">
        <div class="heartBeat" ref="heartbeatElement">
          <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(gameData.heart.amount, gameData.heart.max, heartbeatWidth) + 'px' }"/>
          <progress class="growth-progress" :value="gameData.heart.amount" :max="gameData.heart.max"></progress>
        </div>   
        <div id="resourceoverview"></div>
        <div id="hives">
          <div class="hiveinfo" v-for="hive in gameData.hive">  
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
                    <td>{{ formatNumber(hive.areaUsed, "cm") }}</td>
                    <td class="slash">/ </td>
                    <td>{{ formatNumber(hive.area, "cm") }}</td>
                    <td class="slash">/</td>
                    <td>{{ formatNumber(hive.maxArea, "cm") }} sq</td>
                  </tr>
                </tbody>
              </table>
              <div class="hiveResources">
                <div v-for="(resource, key) in hive.resources">
                  <div v-if="resource.show == true">
                    <span>{{ key }}</span>
                    <span>{{ formatNumber(resource.amount, "mg") }}</span>
                  </div>
                </div>
              </div>
              <p>-</p>
              <ul>
                <li class="harvest" v-for="(food, key) in hive.food">
                  <div v-if="food.show == true">
                    <span>{{ key }}</span>
                    <span>{{ formatNumber(food.amount)}}</span>
                    <!--show max harvest value in tooltip -->
                    <span>{{ formatNumber(food.max)}}</span>
                    <button v-if="key === 'Plants'" @click="eatFood(hive, key)">Eat</button>
                  </div>        
                </li>
              </ul>
          </div>
        </div>
        <div id="hiveTotals">
          <h3>Hive total</h3>
          <ul>
            <li v-for="(amount, label) in gameData.genes" :key="label">
              {{ label }}: {{ formatNumber(amount) }} 
            </li>
          </ul>
          <ul>
            <li v-for="(amount, label) in gameData.resources" :key="label">
              {{ label }}: {{ formatNumber(amount, "mg") }} 
            </li>
          </ul>
        </div>
      </div>
      <aside id="rightHandMenu" class="flexChild60 flexChildVertical">
      <nav id="appTabs">
        <a @click="tabs('hives')" :class="{ active: tabMapping.hive}" href="#">Hives</a>
        <a @click="tabs('mutations')" :class="{ active: tabMapping.mutations}" href="#">Mutations</a>
        <a @click="tabs('research')" :class="{ active: tabMapping.research}" href="#">Research</a>
        <a @click="tabs('grow')" :class="{ active: tabMapping.grow}" href="#">Grow</a>
      </nav>  
      <div id="tabContent">
        <div v-show="tabMapping.hives">
          <h3>Mutations are here</h3>
        </div>
        <!-- Mutations buff the creatures, make them breed quicker, can turn them into soldiers etc -->
        <div v-show="tabMapping.muations">
            <h3>Mutations are here</h3>
        </div>
        <!-- Research unlocks everything -->
        <div v-show="tabMapping.research">
          <div v-for="(research, key) in researchInfo.tierBiome">
              <tooltip class="purchaseButton" v-if="gameData.research.tierBiome[key].available && !gameData.research.tierBiome[key].unlocked">
              <!-- Content goes here, it could be a button, text, an image, etc. -->
                <button @click="unlockResearch(key)">{{ key }}</button>
                <!-- Tooltip content goes here using the tooltip slot -->
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
              <!-- <button @click="unlockResearch(key)">{{ key }}</button> -->
              <!-- <div class="tooltip">

              </div> -->
          </div>
        </div>
        <!-- Growing creates new things like 'buildings' the do things -->
        <div v-show="tabMapping.grow">
          <h3>Growing is here</h3>
          <button @click="addHive('Desert')" id="addHive">add hive</button>
        </div>
      </div>
    </aside>
    </div>
  </div>
  <div id="devArea">
    <div v-if="showDev" id="dev">
      <h4>I am some debug info</h4>
      <!--debug tool set heart value to max -->
      <button @click="gameData.heart.amount = gameData.heart.max">Max heart</button>
      <!-- button to increase radius per beat by 100 -->
      <button @click="gameData.hive[0].radiusPerBeat += 100">Increase radius per beat 100</button>
      <!-- button to increase radius per beat by 1000 -->
      <button @click="gameData.hive[0].radiusPerBeat += 1000">Increase radius per beat 1000</button>
      <!-- button to increase radius per beat by 10000 -->
      <button @click="gameData.hive[0].radiusPerBeat += 10000">Increase radius per beat 10000</button>
      <!-- button to increase radius per beat by 100000 -->
      <button @click="gameData.hive[0].radiusPerBeat += 1000000000">Increase radius per beat 1000000000</button>

      <pre>{{ gameData }}</pre>
      <!-- <pre>{{ JSON.stringify(tabMapping, null, 2) }}</pre>
      <pre>{{ JSON.stringify(tabMapping, null, 2) }}</pre> -->
    </div>
    <button @click="showDev = !showDev">Toggle Dev</button>
  </div>
</template>

<style scoped>
@import "@/assets/css/themes.css";
  .purchaseButton button {
    background-color: var(--theme-primary);
    padding: 10px;
  }
  .purchaseButton button:hover {
    background-color: var(--theme-secondary);
  }
  #topMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    background: var(--theme-primary);
    padding: 10px;
    box-sizing: border-box;
  }
  #hiveTotals ul {

  }
  #hiveTotals ul li {
    display: inline-block;
    margin: 0 10px;
  }
  .flexContainerVertical {
      display: flex;
      flex-direction: column;
      height: 100vh;
  }
  .flexContainerHorizontal {
      display: flex;
  }
  .flexChild5 {
    flex: 5;
  }
  .flexChild95 {
    flex: 95;  
  }
  .flexChild40 {
    flex: 40;
  }  
  .flexChild60 {
    flex:60;
  }  
  .flexChildVertical:first-child {
    margin-right: 10px;
  }
  .food {
    display: inline-block;
  }
  #rightHandMenu {
    position: relative;
  }
  #tabContent {
    margin-top: 35px;
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
  .heartBeat {
      position: relative;
      box-sizing: border-box;
      padding: 5px;
      width: 100%;
      background: var(--theme-accent);
    }
  /* Style the progress bar container */
  .growth-progress {
    display: block;
    width: 100%;
    height: 5px;
    border: 1px solid #ccc;
    border-radius: 0;
    background-color: violet;
    box-sizing: border-box;

    /* Style the progress bar fill for WebKit browsers (Chrome and Safari) */
    &::-webkit-progress-value {
      background: yellowgreen; /* Set the fill color using a gradient */
      border-radius: 0;
    }

    /* Style the progress bar fill for Firefox */
    ::-moz-progress-bar {
      background: green; /* Set the fill color using a gradient */
      border-radius: 0;
    }

    /* Style the text inside the progress bar (percentage) */
    ::-webkit-progress-bar {
      background-color: red ;
      border-radius: 0;
    }
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
  .heartIcon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: -4px;
  }
  /* Dev Tools styling */
  #devArea {
    text-align: right;
    position: absolute; 
    bottom: 0;
    right: 0;   
  }
  #dev {
    position: relative;
    width: 250px;
    height: 300px;
    background: lightgrey;
    bottom: 0;
    right: 0;
    color: black;
    overflow-y: scroll;
  }
</style>


