<template>
  <div id="loading-screen">
  <p>Loading...</p>
  <progress id="loading-progress-bar" value="0" max="100"></progress>
</div>

  <div id="all">
    <main id="main">
      <li>
          <span>Biomass</span>
          <span>
            <span>{{ gameData.items.biomass.amount }}</span>
            {{ gameData.items.biomass.rateGained.total - gameData.items.biomass.rateLost.total}}
          </span>
      </li>
      <p>-</p>
      <ul>
        <li>
          <span>Food</span>
          <span><span>{{ gameData.items.food.formattedAmount }} / {{ gameData.items.food.formattedMax }}</span>  {{ gameData.items.food.rateGained.total - gameData.items.food.rateLost.total }}</span></li>
        <li>
          <span>Resources</span>
          <span><span>{{  gameData.items.resource.formattedAmount }}</span>{{ gameData.items.resource.rateGained.total - gameData.items.resource.rateLost.total }}</span>
        </li>
      </ul>
      <button @click="eat('food', 1)">Eat</button>

    <ul>
      <li>
        <span>Auto Eat Food</span>
        <span><span>{{ gameData.upgrades.autoEatFood.amount }}</span> {{ gameData.upgrades.autoEatFood.rateFood * gameData.upgrades.autoEatFood.amount }}</span>
        <span><button @click="buyUpgrade()">Buy</button></span>
      </li>
    </ul>
  </main>

  {{ tweened }}
  <span v-show="gameData.expand">expand</span>
  <span v-show="gameData.eat">eat</span>

    <button @click="loop();">Tick</button>
    <button @click="console.clear">Clear</button>
    <button @click="handleEating()">handleEating</button>
    <button @click="getMaxTicks()">getMaxDelta</button>
    <button @click="togglePause()">{{ gameData.isPaused ? "Resume" : "Pause" }}</button>
    <button @click="saveLocal()">Save</button>"
    <button @click="retrieveLocal()">Load</button>
    {{ gameData.accumulatedDeltaTime }}
  </div>
</template>

<script setup>  
import { ref, onMounted, watch, computed, onBeforeUnmount } from 'vue';
import { formatNumber } from '@/assets/js/functions.js';

const gameData = ref({
  expand: false,
  eat: false,
  items: {
    food: {
        amount: 10,
        max: 100,
        rateLost: {
            total: 0,
        },
        rateGained: {
            total: 3,
            expansion: {
                total: 1,
            },
            births: {
                total: 1,
                natural: 1,
                farms: 0,
            },
        },
    },
    biomass: {
        amount: 0,
        rateLost: {
            total: 10,
            expansion: {
                total: 10,
            },
        },
        rateGained: {
            total: 0,
        },
    },
    resource: {
        amount: 0,
        rateLost: {
            total: 0,
        },
        rateGained: {
            total: 0,
        },
    },
  },
  timestamp: 0,
  accumulatedDeltaTime: 3600,
  isPaused: false,
  upgrades: {
    autoEatFood: {
      amount: 0,
      cost: 10,
      rateFood: 5,
    },
  },
});

// Watch for changes and save to local storage




function togglePause() {
  gameData.value.isPaused = !gameData.value.isPaused;
}

function getAmountToEat(itemName) {
  let item = gameData.value.items[itemName]; 
  

  // check if itemName has rateGained.eating property
  if (item.rateGained?.eating) {
    let propertiesToFilter = item.rateGained.eating;
    let filteredProperties = Object.keys(item.rateGained.eating).filter(eat => eat !== 'total');
    
    if (filteredProperties.length > 0) {
      for (const food of filteredProperties) {
        console.log(food);
      }
    }
  } else if (!item.rateLost?.eating) {

  } else { return 0 }



  // // get amount of item to give from eating from rateGained.eating
  let amountToEat = gameData.value.items[itemName].rateGained?.eating?.total ?? 0

  return amountToEat;
}

const values = ref ({
  food: {
    resource: 1,
    biomass: 1,
  },
  biomass: {
    rateFood: 10,
  },
  resource: {
  },
  timestamp: 0,
  upgrades: {
    autoEatFood: {
      cost: 10,
      rateFood: 5,
    },
  },
});
// function eat() {
//   if (gameData.value.items.food.amount >= 1) {
//     gameData.value.items.food.amount -= 1;
//     gameData.value.items.biomass.amount += 1;
//   }
// }

// function to iterate over all items in gameData.value.items and create computed property using formatNumber
function setupFormatNumber() {
  for (const itemName in gameData.value.items) {
    const item = gameData.value.items[itemName];
    item.formattedAmount = computed(() => formatNumber(item.amount));
    if (item.max) {
      item.formattedMax = computed(() => formatNumber(item.max));
    }
  }
}

// function to eat food. iterates over each resource and checks it's  rateGained.eating.food property and adds it to the resource's amount
function eat(food, amount) {
  amount = Math.min(gameData.value.items.food.amount, amount)
  gameData.value.items.food.amount -= amount

  for (const itemName in values.value[food]) {    
    
    const item = gameData.value.items[itemName];
    item.amount += values.value.food[itemName] * amount;
  }
}

// function to check 
// function getAmountToEat(food) {
//   let amountToEat = 0;

//   for (const itemName in gameData.value.items) {
//     amountToEat += values.value.food[itemName] ?? 0;
//   }

//   return amountToEat;
// }

// function to check how many upgrades can run based on the amount of food available
function checkPossibleUpgrades(upgrade) {  
  let amountOfFood = gameData.value.items.food.amount;
  let amountUpgrades = gameData.value.upgrades[upgrade].amount;
  let rateFood = values.value.upgrades[upgrade].rateFood;

  let upgradesToRun = Math.floor(amountOfFood / rateFood);

  upgradesToRun = Math.min(upgradesToRun, amountUpgrades);



  return upgradesToRun;
}


// function to buy an upgrade. adds the upgrade's rateFood to the food's rateLost.eating.food property
function buyUpgrade() {
  gameData.value.upgrades.autoEatFood.amount += 1;

  gameData.value.items.food.rateLost.total += gameData.value.upgrades.autoEatFood.rateFood;

  
  if (!gameData.value.items.food.rateLost.eating?.autoEatFood) {
    gameData.value.items.food.rateLost.eating.autoEatFood = 0;
  }
  gameData.value.items.food.rateLost.eating.autoEatFood = gameData.value.upgrades.autoEatFood.rateFood * gameData.value.upgrades.autoEatFood.amount;

  let biomassGained = gameData.value.upgrades.autoEatFood.rateFood * values.value.food.biomass;
  let resourceGained = gameData.value.upgrades.autoEatFood.rateFood * values.value.food.resource;
  
  gameData.value.items.biomass.rateGained.total += biomassGained;
  gameData.value.items.resource.rateGained.total += resourceGained;
  
  if (!gameData.value.items.biomass.rateGained.eating?.autoEatFood) {
    gameData.value.items.biomass.rateGained.eating.autoEatFood = 0;
  }
  if (!gameData.value.items.biomass.rateGained.eating?.total) {
    gameData.value.items.biomass.rateGained.eating.total = 0;
  }
  gameData.value.items.biomass.rateGained.eating.autoEatFood += biomassGained;
  gameData.value.items.biomass.rateGained.eating.total = biomassGained;

  
 
  
  
  if (!gameData.value.items.resource.rateGained.eating.autoEatFood) {
    gameData.value.items.resource.rateGained.eating.autoEatFood = 0;
  }
  if (!gameData.value.items.resource.rateGained.eating.total) {
    gameData.value.items.resource.rateGained.eating.total = 0;
  }
  gameData.value.items.resource.rateGained.eating.autoEatFood += resourceGained;
  gameData.value.items.resource.rateGained.eating.total += resourceGained;
}

const tweened = ref({}); // Make tweened a ref

function setupTweenedData(data, targetObject) {
  for (const key in data) {
    if (typeof data[key] === 'object') {
      // console.log(data[key])
      setupTweenedData(data[key], targetObject);
    } else if (key === 'amount') {
      // Use ref for each 'amount' property
      targetObject[key] = ref(data[key]);
      watch(targetObject[key], (n) => {
        gsap.to(targetObject.value, { duration: 0.5, [key]: Number(n) || 0 });
      });
    }
  }
}
function handleEating() {
    const item = gameData.value.items.resource;
    // check if item has eating property 
    if (item.rateGained?.eating) {
    // get amount to eat
    let amountToEat = item.rateGained.eating.total;
    // check each property in eating except total and see how many each upgrade there is for each property
    for (const food in item.rateGained.eating) {
      if (food !== 'total') {
        // get amount of upgrades to run
        let upgradesToRun = checkPossibleUpgrades(food);
        // add amount of upgrades to run to amount to eat
        amountToEat += item.rateGained.eating[food] * upgradesToRun;
        // add amount of upgrades to run to changes
        changes[itemName] = ( gained - lost ) * deltaTime;
      }
    }
  }
}
let data = JSON.parse(JSON.stringify(gameData.value));
function handleUpdating() {
  for (const itemName in data.items) {
    const item = data.items[itemName];

    let gained = item.rateGained?.total ?? 0;
    let lost = item.rateLost?.total ?? 0;
    let max = item.max ?? Infinity;
    data.items[itemName].amount = Math.min(Math.max(0, item.amount + (gained - lost)), max);

    if (item.max !== undefined) {
      item.max += item.rateGained.expansion.total;
    }
  }
}

function handleChange() {

}

// check biomass and all food and get maximum delta possible
function getMaxTicks() {  
  let deltaTime = gameData.value.accumulatedDeltaTime;
  let deltas = [];
  if (deltaTime <= 0) return;

  for (const itemName in gameData.value.items) {    
    if (gameData.value.items[itemName].rateLost.eating !== undefined) continue;
    const item = gameData.value.items[itemName];
    let lost = item.rateLost?.eating?.total ?? 0;
    console.log(lost);
    console.log(itemName);

    let maxDelta = item.amount;

    deltaTime = Math.min(deltaTime, maxDelta);
  }
}

function loop() {
  if (gameData.value.isPaused) return;
  // set up deltatime
  let currentTimestamp = performance.now();
  let deltaTime = (currentTimestamp - gameData.value.timestamp) / 1000;
  // gameData.value.accumulatedDeltaTime += (currentTimestamp - gameData.value.timestamp) / 1000;
  // console.log(gameData.value.accumulatedDeltaTime);
  // gameData.value.timestamp = performance.now();
  // gameData.value.accumulatedDeltaTime += deltaTime;  

  // let maxdeltaTime = getMaxTicks();
  // console.log("maxDelta: ",maxdeltaTime);
  // maxdeltaTime = Math.min(maxdeltaTime, gameData.value.accumulatedDeltaTime);
  // console.log(maxdeltaTime);
  // gameData.value.accumulatedDeltaTime -= maxdeltaTime;
  // console.log(deltaTime);

  // // make changes based on gamedata gained and lost
  handleUpdating(1);


}
function loopNoRef() {
  if (gameData.value.isPaused) return;
  // set up deltatime
  // let currentTimestamp = performance.now();
  // // let deltaTime = (currentTimestamp - gameData.value.timestamp) / 1000;
  // gameData.value.accumulatedDeltaTime += (currentTimestamp - gameData.value.timestamp) / 1000;
  // console.log(gameData.value.accumulatedDeltaTime);
  // gameData.value.timestamp = performance.now();
  // gameData.value.accumulatedDeltaTime += deltaTime;  

  // let maxdeltaTime = getMaxTicks();
  // console.log("maxDelta: ",maxdeltaTime);
  // maxdeltaTime = Math.min(maxdeltaTime, gameData.value.accumulatedDeltaTime);
  // console.log(maxdeltaTime);
  // gameData.value.accumulatedDeltaTime -= maxdeltaTime;
  // console.log(deltaTime);

  // // make changes based on gamedata gained and lost
  handleUpdating(1);

  //     if (item.max) {
  //       item.amount = Math.max(0, Math.min(item.max, item.amount + changes[itemName]));
  //       item.max += 2 * enoughBiomassToExpand;
  //     } else {
  //       item.amount = Math.max(0, item.amount + changes[itemName]);
  //     }

  //   }




  // apply changes to each item amount 
  // for ( const itemName in changes) {
  //   const item = gameData.value.items[itemName];
  //   if (item.max) {
  //     item.amount = Math.max(0, Math.min(item.max, item.amount + changes[itemName]));
  //     item.max += 2;
  //   } else {
  //     item.amount = Math.max(0, item.amount + changes[itemName]);
  //   }

  // }
}
function readGameData() {
  return JSON.parse(JSON.stringify(gameData.value));
}

function writeGameData() {
  gameData.value = JSON.parse(JSON.stringify(data));
}

function saveLocal() {
  const serializedData = JSON.stringify(gameData.value);
  localStorage.setItem('gameData', serializedData);
  console.log(gameData.value);
}

function retrieveLocal() {
  const storedData = localStorage.getItem('gameData');
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    console.log(parsedData);
    // You can assign parsedData back to your gameData variable if needed
    gameData.value = parsedData;
  }
}

function rejoin() {
  document.getElementById("loading-screen").style.display = "block";

  let currentTimestamp = performance.now();
  let deltaTime = (currentTimestamp - gameData.value.timestamp) / 1000;
  gameData.value.timestamp = performance.now();
  console.log(deltaTime);
  if (deltaTime <= 1) return;
  console.log("You've been gone for " + Math.round(deltaTime / 60 / 60) + " hours " + Math.round(deltaTime / 60) + "minutes" + Math.round(deltaTime) + "seconds" );

  const progressBar = document.getElementById("loading-progress-bar");
  const app = document.getElementById("main");
  app.style.display = "none"; 

  let int = Math.round(deltaTime);
  console.log(int);
  let interval = int / 100

  console.time('rejoin');
  for (let i = 0; i < int; i++) {
    setTimeout(() => {
    loopNoRef();
    
    if (i % interval === 0) {
      const progress = (i / int) * 100;
      progressBar.value = progress;
    }
    // const progress = (i / int) * 100;
    // progressBar.value = progress;
    if ( i === int - 1) {
      document.getElementById("loading-screen").style.display = "none"; 
      app.style.display = "block"; 
      console.log(JSON.stringify(data));
    }
    }, 1);
  }
  console.timeEnd('rejoin');  
  
}

onMounted(() => {
  setTimeout(() => {}, 1000);
  retrieveLocal();
    rejoin();
    // loop();
    
  
  // const savedData = localStorage.getItem('gameData');
  // if (savedData) {
  //   console.log('Loading game data');
  //   const parsedData = JSON.parse(savedData);
  //   for (const key in parsedData) {
  //     if (gameData.value.hasOwnProperty(key)) {
  //       gameData.value[key] = parsedData[key];
  //     }
  //   }
  // }
  // // setInterval(() => {
  // //   loop();    
  // // }, 1000);

  watch(() => gameData.value, () => {
    console.log('Saving game data');
    saveLocal();
  }, { deep: true });

});
setupTweenedData(gameData.value, tweened);
setupFormatNumber();

onBeforeUnmount(() => {
  // Clean up the watcher when the component is unmounted
  // gameData.$stop();
});
</script>

<style scoped>
#all {
  display: flex;
  flex-direction: column;
  align-items: center;
}
button {
  padding: 10px;
  margin: 10px;
}
main {
  width: 300px;
}
li {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
span span {
  margin-right: 20px;
}
</style>