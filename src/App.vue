<!-- 
To update distro run following commands
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh_pages 
-->
<script setup>
import { defineSSRCustomElement, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { initHiveForest } from './assets/hives.js'
import { calculateArea, formatNumber, calculateHeartPosition } from './assets/functions.js';


// Define a variable to store the interval ID
let mainGameLoop;

const timer = 0;
const loopInterval = 10;
// main loop function

function mainLoop() {
  let biomassAreaMultiplyer = 500;
  let fibreAreaMultiplyer = 1.5;

  

  gameData.value.hive.forEach(hive => {
    // Calculate the radius increment based on growth.persecond
    // Update the growth amount
    if  ( hive.growth.amount < hive.growth.max && hive.resources.Biomass.amount >= hive.area/biomassAreaMultiplyer) {
      hive.growth.amount += hive.growth.pertick;
      hive.resources.Biomass.amount -= hive.area/biomassAreaMultiplyer;
    } 
    // heartbeat - everytime the hive heart tickets to 100%
    if ( hive.growth.amount >= hive.growth.max && hive.resources.Biomass.amount >= hive.growth.pertick && hive.area < hive.maxArea) {
        hive.growth.amount = 0; // reset progres bar
        hive.radius += hive.radiusPerBeat; // increase radius by radius per beat
        hive.area = Math.min(hive.maxArea, calculateArea(hive.radius)); // calculate new area
    } 
  });
}

// Use the onMounted hook to start the loop when the component is mounted
onMounted(() => {
  mainGameLoop = setInterval(mainLoop, loopInterval); // Execute mainLoop every 1000 milliseconds (1 second)
});

const gameData = ref({
  hive: JSON.parse(JSON.stringify(initHiveForest)),
  resources: {
        Biomass: 
          {
            amount: 120, 
            perloop: 10
          }, 
        Fibre: 
          {
            amount: 0, 
            perloop: 1
          }
      }
});

const totalResourcesInHive = computed(() => {
  const result = {};

  gameData.value.hive.forEach(hive => {
    for (const resourceKey in hive.resources) {
      if (result[resourceKey]) {
        result[resourceKey] += hive.resources[resourceKey].amount;
      } else {
        result[resourceKey] = hive.resources[resourceKey].amount;
      }
    }
  });

  return result;
});

// Bind the computed property to the resources item in gameData
gameData.value.resources = totalResourcesInHive;

// function add a new hive to the colony
function addHive(biome, totalArea) {
  const lastHive = gameData.value.hive[gameData.value.hive.length - 1];
  const newId = lastHive.id + 1;

  // Create a new hive object by merging properties from initHiveForest and new properties
  const newHive = JSON.parse(JSON.stringify(initHiveForest[0]));

  newHive.id = newId;
  newHive.biome = biome; // You can set the biome as needed

  gameData.value.hive.push(newHive);
}
const tabMapping = ref({
    hive: true,
    mutations: false,
    research: false,
    grow: false,
  });

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

<template>
  <nav id="appTabs">
    <a @click="tabs('hive')" :class="{ active: tabMapping.hive}" href="#">Hives</a>
    <a @click="tabs('mutations')" :class="{ active: tabMapping.mutations}" href="#">Mutations</a>
    <a @click="tabs('research')" :class="{ active: tabMapping.research}" href="#">Research</a>
    <a @click="tabs('grow')" :class="{ active: tabMapping.grow}" href="#">Grow</a>
  </nav>
  <div v-show="tabMapping.hive">
    <div id="resourceoverview"></div>
    <div id="hives">
      <div class="hiveinfo" v-for="item in gameData.hive">
          <div class="heartBeat">
            <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(item.growth.amount, item.growth.max, 200) + 'px' }"/>
            <progress class="growth-progress" :value="item.growth.amount" :max="item.growth.max"></progress>
          </div>         
          <!-- <span>Hive {{ item.id }}</span> -->
          <span>Biome: {{ item.biome }}</span>
          <span>Radius: {{ formatNumber(item.radius, "cm") }}</span>
          <span class="hivearea">Area:</span>
          <table class="hiveAreaTable">
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
                <td>{{ formatNumber(item.areaUsed, "cm") }}</td>
                <td class="slash">/ </td>
                <td>{{ formatNumber(item.area, "cm") }}</td>
                <td class="slash">/</td>
                <td>{{ formatNumber(item.maxArea, "cm") }} sq</td>
              </tr>
            </tbody>
          </table>
          <div v-for="(resource, key) in item.resources">
            <span>{{ key }}</span>
            <span>{{ formatNumber(resource.amount, "mg") }}</span>
          </div>
          <p>-</p>
          <div class="harvest" v-for="(resource, key) in item.harvest">
            <span>{{ key }}</span>
            <span>{{ formatNumber(resource.amount)}}</span>
          </div>
      </div>
    </div>
    <div>-------------------------------------------------------------</div>
    <div>
      <h3>Hive total</h3>
      <ul>
        <li v-for="(amount, label) in gameData.resources" :key="label">
          {{ label }}: {{ formatNumber(amount, "mg") }} 
        </li>
      </ul>
    </div>
    <button @click="addHive('Desert')" id="addHive">add hive</button>
  
  </div>
  <div v-show="tabMapping.mutations">Mutations are here</div>
  <div v-show="tabMapping.research">Research is here</div>
  <div v-show="tabMapping.grow">Growing is here</div>
  <div id="dev">
    <h4>I am some debug info</h4>
    <pre>{{ gameData }}</pre>
    <!-- <pre>{{ JSON.stringify(tabMapping, null, 2) }}</pre>
    <pre>{{ JSON.stringify(tabMapping, null, 2) }}</pre> -->
  </div>
</template>

<style scoped>
.harvest {
  display: inline-block;
}
 #appTabs {
  width: 100%;
  height: 35px;
 }
 #appTabs a {
  width: max-content;
  padding: 5px 20px;
  margin-right: 10px;
  border-bottom: 3px solid black;
  text-decoration: none;
  color: black;
 }
 #appTabs a:visited {
  width: max-content;
  padding: 5px 20px;
  margin-right: 10px;
  border-bottom: 3px solid black;
  text-decoration: none;
  color: black;
 }
 #appTabs a.active {
  border: 3px solid black;
  border-radius: 3px;
  border-bottom: 0px solid black;
 }
 .heartBeat {
    position: relative;
    width: 200px;
  }
  /* Style the progress bar container */
  .growth-progress {
    display: block;
    width: 100%;
    height: 5px;
    margin: 0 0 5px 0;
    border: 1px solid #ccc;
    border-radius: 0;
    background-color: violet;

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
    width: 850px;
    padding: 10px;
    margin: 10px 0;
    background: darkslategrey;
    color: wheat
  }
  .heartIcon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: -4px;
  }
  /* Dev Tools styling */
  #dev {
    position: absolute;
    width: 250px;
    height: 300px;
    background: lightgrey;
    bottom: 0;
    right: 0;
    overflow-y: scroll;
  }
</style>
