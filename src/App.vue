<!-- 
To update distro run following commands
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh_pages 
-->
<script setup>
import { defineSSRCustomElement, ref, computed, onMounted, onBeforeUnmount, watch } from 'vue' 
// import { numberformat } from swarm-numberformat.min.js

// Define a variable to store the interval ID
let mainGameLoop;

// Function to calculate the area of something
function calculateArea(radius) 
  {
    return Math.PI * radius * radius;
  }
// Function to access to swarm numberformat from inside vue templates
function formatNumber(number) 
  {
    return numberformat.formatShort(number);
  };

// main loop function
function mainLoop() {
  gameData.value.hive.forEach(hive => {
    // Calculate the radius increment based on growth.persecond
    // Update the growth amount
    if  ( hive.growth.amount < hive.growth.max && 
          hive.resources.Biomass.amount >= hive.growth.cost

        ) {
        hive.growth.amount += hive.growth.pertick;
        hive.resources.Biomass.amount -= hive.growth.cost;
    } 

    // heartbeat - everytime the hive heart tickets to 100%
    if (hive.growth.amount >= hive.growth.max) {
      if (hive.resources.Biomass.amount >= hive.growth.cost && hive.area < hive.maxArea) {
        hive.radius += 1;
        hive.area = Math.min(hive.maxArea, calculateArea(hive.radius));
        hive.growth.amount = 0;
      } 
    }
  });
}

// Use the onMounted hook to start the loop when the component is mounted
onMounted(() => {
  mainGameLoop = setInterval(mainLoop, 10); // Execute mainLoop every 1000 milliseconds (1 second)
});

// Use the onBeforeUnmount hook to clean up the interval when the component is about to be destroyed
onBeforeUnmount(() => {
  clearInterval(mainGameLoop);
});

const initHive = ([
    { 
      id: 0, 
      biome: "Forest",
      radius: 10,
      areaUsed: 0,
      area: 314,
      maxArea: 1024,
      growth: 
        { 
          amount: 0, 
          max: 100, 
          pertick: 1,
          cost: 1
        }, 
      resources: {
        Biomass: 
          {
            amount: 5000, 
            perloop: 10
          }, 
        Fibre: 
          {
            amount: 0, 
            perloop: 1
          }
      }
    }, 
  ]);

const gameData = ref({
  hive: JSON.parse(JSON.stringify(initHive)),
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

  // Create a new hive object by merging properties from initHive and new properties
  const newHive = JSON.parse(JSON.stringify(initHive[0]));

  newHive.id = newId;
  newHive.biome = biome; // You can set the biome as needed

  gameData.value.hive.push(newHive);
}
function calculateHeartPosition(number, maxnumber, width) {
  return  number*(width / maxnumber) - 7
}
</script>

<template>
  <div id="hives">
    <div class="hiveinfo" v-for="item in gameData.hive">
        <!-- <font-awesome-icon :icon="['fas', 'heart']" beat size="xs" style="color: #732735;" /> -->
        <div class="heartBeat">
          <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(item.growth.amount, item.growth.max, 200) + 'px' }"/>
          <progress class="growth-progress" :value="item.growth.amount" :max="item.growth.max"></progress>
        </div>
        
        <span>Hive {{ item.id }}</span>
        <span>Biome: {{ item.biome }}</span>
        <span>Radius: {{ formatNumber(item.radius) }}</span>
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
              <td>{{ formatNumber(item.areaUsed) }}</td>
              <td class="slash">/ </td>
              <td>{{ formatNumber(item.area) }}</td>
              <td class="slash">/</td>
              <td>{{ formatNumber(item.maxArea) }} sq</td>
            </tr>
          </tbody>
        </table>
        <div v-for="(resource, key) in item.resources">
          <span>{{ key }}</span>
          <span>{{ formatNumber(resource.amount) }}</span>
        </div>
    </div>
  </div>
  <div>-------------------------------------------------------------</div>
  <div>
    <h3>Hive total</h3>
    <ul>
      <li v-for="(label, value) in gameData.resources" :key="label">
        {{ label }}: {{ value }}
      </li>
    </ul>
  </div>

  <button @click="addHive('Desert')" id="addHive">add hive</button>

  <div id="dev">
    <pre>{{ JSON.stringify(gameData, null, 2) }}</pre>
  </div>
</template>

<style scoped>
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
    width: max-content;
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
    background: lightgrey;
  }
</style>
