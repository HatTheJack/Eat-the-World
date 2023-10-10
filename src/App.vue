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
import { COMMON_NAMES } from '@/assets/js/definitions';
import { gameData } from '@/assets/js/gameData.js'
import { foodValues } from "@/assets/js/resources.js";
import { calculateArea, formatNumber, calculateHeartPosition, hiveManager, heartBeat, tickHour, addHive, unlockResearch } from '@/assets/js/functions.js';
import { researchInfo } from '@/assets/js/research.js';
import ChildComponent from './components/popups.vue';
import devArea from '@/components/dev.vue';
import hiveInfo from '@/components/hiveinfo.vue';
import mainMenu from '@/components/mainmenu.vue';
import topbar from '@/components/topbar.vue';
import hiveTotals from '@/components/totals.vue';
import tooltip from '@/components/tooltip.vue';


//init some variables
// Define a variable to store the interval ID
let mainGameLoop;
const loopInterval = 2000;


// main loop function
function mainLoop() {
  // make delta just the time difference as that's what I am trhing t add anyway
  let prevTime = gameData.value.date.timestamp;
  let currentTime = performance.now();
  let delta = (currentTime - prevTime)/10;
  console.log(delta, "|||", Math.round(delta*10));
  // let biomassAreaMultiplyer = 500;
  // let fibreAreaMultiplyer = 1.5;
  if (gameData.value.heart.amount < gameData.value.date.timer) {
    heartBeat(delta);
  }
  // heartBeat();
  if (gameData.value.date.timer < 100) {
    gameData.value.date.timer += Math.round(10*delta, 0);
  } else if (gameData.value.date.timer > 1000) {
    gameData.value.date.timer = gameData.value.date.timer - 1000;// reset counter
    //add to hour every time then add to day when hour is 24 and year when day is 365
    tickHour();
    // add to each food based on harvest multiplyer and current area
    gameData.value.hive.forEach(hive => {
      for (const resourceKey in hive[COMMON_NAMES.FOOD.NAME]) {
        // add the harvest if there is less of the harvest than the total area times multiplyer
        if (hive[COMMON_NAMES.FOOD.NAME][resourceKey].amount < hive[COMMON_NAMES.FOOD.NAME][resourceKey].max) {
          hive[COMMON_NAMES.FOOD.NAME][resourceKey].amount += Math.round(foodValues[resourceKey] * hive.area/1000000);
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
  gameData.value.date.timestamp = currentTime;
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
  <main class="flexContainerVertical">
    <topbar/>
    <div class="flexContainerHorizontal flexChild95">
      <!-- <div id="hiveView" class="flexChild40 flexChildVertical">
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
                          <button @click="eatFood(key, hive, subKey)">Eat</button>
                        </li>
                      </template>
                    </ul>
                  </li>
                </template>
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
      </div> -->
      <div id="hiveView" class="flexChild40 flexChildVertical">
        <div class="heartBeat" ref="heartbeatElement">
          <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(gameData.heart.amount, gameData.heart.max, heartbeatWidth) + 'px' }"/>
          <progress class="growth-progress" :value="gameData.heart.amount" :max="gameData.heart.max"></progress>
        </div>
        <hiveTotals/>
        <hiveInfo/>
      </div>
      <mainMenu/>
      <aside id="rightHandMenu" class="flexChild60 flexChildVertical">
        
        <!-- <nav id="appTabs">
          <a @click="tabs('hives')" :class="{ active: tabMapping.hive}" href="#">Hives</a>
          <a @click="tabs('mutations')" :class="{ active: tabMapping.mutations}" href="#">Mutations</a>
          <a @click="tabs('research')" :class="{ active: tabMapping.research}" href="#">Research</a>
          <a @click="tabs('grow')" :class="{ active: tabMapping.grow}" href="#">Grow</a>
        </nav>  
        <div id="tabContent">
          <div v-show="tabMapping.hives">
            <h3>Mutations are here</h3>
          </div>
          <div v-show="tabMapping.muations">
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
        </div> -->
    </aside>
    </div>
  </main>
  <devArea/>
  <!-- <div id="devArea">
    <div v-if="showDev" id="dev">
      <h4>I am some debug info</h4>
      <div class="flexContainerHorizontal">
        <div class="buttons">
        <button @click="heartBeat()">Tick</button>
        <button @click="gameData.heart.amount = gameData.heart.max">Max heart</button>
        <button @click="gameData.hive[0].radiusPerBeat += 100">Increase radius per beat 100</button>
        <button @click="gameData.hive[0].radiusPerBeat += 1000">Increase radius per beat 1000</button>
        <button @click="gameData.hive[0].radiusPerBeat += 10000">Increase radius per beat 10000</button>
        <button @click="gameData.hive[0].radiusPerBeat += 1000000000">Increase radius per beat 1000000000</button>
        </div>
        <pre>{{ gameData }}</pre>
      </div>
    </div>
    <button @click="showDev = !showDev">Toggle Dev</button>
  </div> -->
</template>

<style scoped>
@import "@/assets/css/themes.css";
  main {
   
  }
  main::before {
    opacity: 0.1;
    content: "";
    display: block;
    width: 150vw;
    height: 150vh;
    position: fixed;
    left: -500px;
    right: 0;
    z-index: -1;
    background: no-repeat center url('@/assets/images/Firefly -brain cells- dark purple 37713.jpg');
    filter: blur(5px);
  }
  
  .purchaseButton button {
    background-color: var(--theme-primary);
    padding: 10px;
  }
  .purchaseButton button:hover {
    background-color: var(--theme-secondary);
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
 
  
  .heartIcon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: -4px;
  }
  /* Dev Tools styling */
 
</style>


