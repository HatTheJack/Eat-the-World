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
import { foodValues } from "./assets/resources.js";
import { calculateArea, formatNumber, calculateHeartPosition } from './assets/functions.js';
import ChildComponent from './components/popups.vue';


//init some variables
// Define a variable to store the interval ID
const loopInterval = 10;
let mainGameLoop;


//function to devourer food from current hive and provide resources based on foodValues
function devourerFood(hive, food) {
  //const selectedHive = gameData.hive.find((hive) => hive.id === hiveId);
  // check if there is enough food to devourer
  if (hive.food[food].amount >= 100) {
    // remove 100 food
    hive.food[food].amount -= 100;
    // add 100 glucose
    hive.resources.Glucose.amount += 100 * foodValues.food[food].glucose;
    // add 100 fibre
    hive.resources.Fibre.amount += 100 * foodValues.food[food].fibre;
    // add 100 biomass
    hive.resources.Biomass.amount += 100 * foodValues.food[food].biomass;
  }
}


function heartBeat() {
  // checks if there is enough biomass each tick
  const hasEnoughBiomass = gameData.value.hive.some(hive => {
    return hive.resources.Biomass.amount >= gameData.value.heart.pertick;
  });

  // things that happen if there is enough biomass
  if (hasEnoughBiomass) {
    
    if (gameData.value.heart.amount < gameData.value.heart.max) { // Check if heart amount is less than heart max
      gameData.value.heart.amount += gameData.value.heart.pertick; // Subtract pertick from each hive if it has enough biomass

      // Check each hive if they have enough biomass then tick down.
      gameData.value.hive.forEach(hive => {
        if (hive.resources.Biomass.amount >= gameData.value.heart.pertick) {
          // what happens if there is enough
          //increase radius using pertick
          hive.resources.Biomass.amount -= gameData.value.heart.pertick;
          hive.heart.dyingState = false          
        } else {
          // what happens if there isn't
          hive.heart.dyingState = true;
        }
      });
      // checks if heart is 100 then reset if it is.
    } else if (gameData.value.heart.amount == gameData.value.heart.max) {
      gameData.value.heart.amount = 0;


      for (const hive of gameData.value.hive) {
        hive.radius += hive.radiusPerBeat;
        // set hive previous area to current area
        hive.previousArea = hive.area;
        // calculate new area based on radius
        hive.area = Math.min(hive.maxArea, calculateArea(hive.radius));
        let difference = hive.area - hive.previousArea;

        for (const resourceKey in hive.food) {
          // check if current resource is Plants
          if (resourceKey == "Plants") {

          }
          // increase each harvest amount by the difference in area
          hive.food[resourceKey].amount += Math.round((difference * foodValues.food[resourceKey].multiplyer)*foodValues.Overall);
          // increase kill one human each time

        }
      }
      // adds to each harvest max based on area using forEach vue
    }
        
  } else {
    // Handle the case when no hive has enough biomass
    // You can add your own logic here if needed
    gameData.value.heart.dyingState = true;
  }
}
function noHeartBeat() {
  hive.heart.healthMultiplyer -= 0.001;
}
// main loop function
function mainLoop() {
  // let biomassAreaMultiplyer = 500;
  // let fibreAreaMultiplyer = 1.5;
  gameData.value.date.timer++;
  heartBeat();

  function tickHour() {
  gameData.value.date.hour += 4;
  if (gameData.value.date.hour == 24) {
    gameData.value.date.hour = 0;
    gameData.value.date.day++;
  }
  if (gameData.value.date.day == 365) {
    gameData.value.date.day = 0;
    gameData.value.date.year++;
  }   
}
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

//funciton to devourer plants and provide fibre and glucose
function devourerPlants() {
  // check if there is enough plants to devourer
  if (gameData.value.resources.Plants.amount >= 100) {
    // remove 100 plants
    gameData.value.resources.Plants.amount -= 100;
    // add 100 fibre
    gameData.value.resources.Fibre.amount += 100;
    // add 100 glucose
    gameData.value.resources.Glucose.amount += 100;
  }
}
      

const gameData = ref({
  hive: JSON.parse(JSON.stringify(initHiveForest)),
  heart: 
    { 
      amount: 0, 
      max: 100, 
      pertick: 1,
      multiplyer: 1,
      dyingState: false,
    },
  resources: {
    // glucose
    Glucose:
      {
        amount: 0,
        perloop: 0
      },
    Biomass: 
      {
        amount: 120, 
        perloop: 0
      }, 
    Fibre: 
      {
        amount: 0, 
        perloop: 0
      }
    }, 
  date: 
    {
      // year days and hours since start of game where each second is an hour
      year: 0,
      day: 0,
      hour: 0,
      timer: 0,
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
  <!-- <child-component /> -->
  <!-- top information menu in game date and time etc -->
  <div id="topMenu">
    <div id="gameDate">
      <span>Year: {{ gameData.date.year }}</span>
      <span>Day: {{ gameData.date.day }}</span>
      <span>timer: {{ gameData.date.timer }}</span> 
    </div>
  </div>

    <div class="flexContainer">
      <div id="hiveView" class="flexChild40 flexChild">
        <div class="heartBeat" ref="heartbeatElement">
          <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(gameData.heart.amount, gameData.heart.max, heartbeatWidth) + 'px' }"/>
          <progress class="growth-progress" :value="gameData.heart.amount" :max="gameData.heart.max"></progress>
        </div>   
        <div id="resourceoverview"></div>
        <div id="hives">
          <div class="hiveinfo" v-for="item in gameData.hive">
      
              <!-- <span>Hive {{ item.id }}</span> -->
              <span>Biome: {{ item.biome }}</span>
              <span>Radius: {{ formatNumber(item.radius, "cm") }}</span>
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
                    <td>{{ formatNumber(item.areaUsed, "cm") }}</td>
                    <td class="slash">/ </td>
                    <td>{{ formatNumber(item.area, "cm") }}</td>
                    <td class="slash">/</td>
                    <td>{{ formatNumber(item.maxArea, "cm") }} sq</td>
                  </tr>
                </tbody>
              </table>
              <div class="hiveResources">
                <div v-for="(resource, key) in item.resources">
                  <span>{{ key }}</span>
                  <span>{{ formatNumber(resource.amount, "mg") }}</span>
                </div>
              </div>
              <p>-</p>
              <div class="harvest" v-for="(resource, key) in item.food">
                <span>{{ key }}</span>
                <span>{{ formatNumber(resource.amount)}}</span>
                <!--show max harvest value in tooltip -->
                <span>{{ formatNumber(resource.max)}}</span>
                <button @click="devourerFood(item, key)">Devourer {{ key }}</button>
                
              </div>
          </div>
        </div>
        <div>
          <h3>Hive total</h3>
          <ul>
            <li v-for="(amount, label) in gameData.resources" :key="label">
              {{ label }}: {{ formatNumber(amount, "mg") }} 
            </li>
          </ul>
        </div>
      </div>
      <aside id="rightHandMenu" class="flexChild60 flexChild">
      <nav id="appTabs">
        <a @click="tabs('hives')" :class="{ active: tabMapping.hive}" href="#">Hives</a>
        <a @click="tabs('mutations')" :class="{ active: tabMapping.mutations}" href="#">Mutations</a>
        <a @click="tabs('research')" :class="{ active: tabMapping.research}" href="#">Research</a>
        <a @click="tabs('grow')" :class="{ active: tabMapping.grow}" href="#">Grow</a>
      </nav>
        <div v-show="tabMapping.hives">
          <h3>Mutations are here</h3>
        </div>
        <div v-show="tabMapping.mutations">
          <h3>Mutations are here</h3>
        </div>
        <div v-show="tabMapping.research">
          <h3>Research is here</h3>
        </div>
        <div v-show="tabMapping.grow">
          <h3>Growing is here</h3>
        <button @click="addHive('Desert')" id="addHive">add hive</button>
        </div>
      </aside>
    </div>
  <div id="dev">
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
</template>

<style scoped>
  .flexContainer {
      display: flex;
  }
  .flexChild40 {
    overflow: hidden;
    flex: 40;
  }  
  .flexChild60 {
    overflow: hidden;
    flex:60;
  }  
  .flexChild:first-child {
    margin-right: 10px;
  }
  .food {
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
      width: 100%;
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
    background:   darkslategrey;
    color: wheat
  }
  #hives {
    width: 100%;
  }
  #hiveView {
    box-sizing: border-box;
    padding: 10px;
    height: 100vh;
    background: grey;
    overflow-y: scroll;
  }
  #rightHandMenu {
    box-sizing: border-box;
    padding: 10px;
    height: 100vh;
    background: grey;
    overflow-y: scroll;
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


