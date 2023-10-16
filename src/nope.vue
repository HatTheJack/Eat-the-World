<template>
  <main>
    <li>
        <span>Biomass</span>
        <span>
          <span>{{ gameData.items.biomass.formattedAmount }}</span>
          {{ gameData.items.biomass.rateGained.total - gameData.items.biomass.rateLost.total}}
        </span>
    </li>
    <p>-</p>
    <ul>
      <li>
        <span>Food</span>
        <span><span>{{ gameData.items.food.formattedAmount }} / {{ gameData.items.food.max }}</span>  {{ gameData.items.food.rateGained.total - gameData.items.food.rateLost.total }}</span></li>
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
        <span><button @click="buyUpgrade()">Buy</button></span>   test: {{gameData.items.food.rateLost.eating.autoEatFood}}
      </li>
    </ul>
  </main>

  {{ tweened }}
  <span v-show="gameData.expand">expand</span>
  <span v-show="gameData.eat">eat</span>

  <button @click="loop();">Tick</button>
  <button @click="console.clear">Clear</button>
</template>

<script setup>  
import { ref, onMounted, watch, computed} from 'vue';
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
            eating: {
                total: 0,
            },
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
            eating: {
                total: 0,
            },
        },
    },
    resource: {
        amount: 0,
        rateLost: {
            total: 0,
        },
        rateGained: {
            total: 0,
            eating: {
                total: 0,
            },
        },
    },
  },
  timestamp: 0,
  upgrades: {
    autoEatFood: {
      amount: 0,
      cost: 10,
      rateFood: 5,
    },
  },
});

function getAmountToEat(itemName) {
  let item = gameData.value.items[itemName]; 


  // check if itemName has rateGained.eating property#
  if (item.rateGained?.eating) {
    let propertiesToFilter = item.rateGained.eating;
    let filteredProperties = Object.keys(item.rateGained.eating).filter(eat => eat !== 'total');
    
    if (filteredProperties.length > 0) {
      for (const food of filteredProperties) {
        
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
  gameData.value.items.food.rateLost.eating.autoEatFood = gameData.value.upgrades.autoEatFood.rateFood * gameData.value.upgrades.autoEatFood.amount;

  let biomassGained = gameData.value.upgrades.autoEatFood.rateFood * values.value.food.biomass;
  gameData.value.items.biomass.rateGained.eating.total += biomassGained;

  if (!gameData.value.items.biomass.rateGained.eating.autoEatFood) {
    gameData.value.items.biomass.rateGained.eating.autoEatFood = 0;
  }
  gameData.value.items.biomass.rateGained.eating.autoEatFood += biomassGained;

  let resourceGained = gameData.value.upgrades.autoEatFood.rateFood * values.value.food.resource;
  gameData.value.items.resource.rateGained.eating.total += resourceGained;

  if (!gameData.value.items.resource.rateGained.eating.autoEatFood) {
    gameData.value.items.resource.rateGained.eating.autoEatFood = 0;
  }
  gameData.value.items.resource.rateGained.eating.autoEatFood += resourceGained;
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


function loop() {
  // console.time();
  let currentTimestamp = performance.now();
  let deltaTime = (currentTimestamp - gameData.value.timestamp) / 1000;
  gameData.value.timestamp = performance.now();

  let checkUpgradesToRun = checkPossibleUpgrades("autoEatFood");

  // init changes object
  let changes = {};

  // check if there is enough biomass to expand
  let enoughBiomassToExpand = gameData.value.items.biomass.amount >= gameData.value.items.biomass.rateLost.expansion.total ? 1 : 0;
  
  // calculate size of expansion
  let expansionSize = gameData.value.items.biomass.rateLost.expansion.total;
  
  
  // loop over each object in items and calculate expansion rategains and losses and assign the difference to change variable
    for ( const itemName in gameData.value.items) {

      // handle expansion
      const item = gameData.value.items[itemName];
      let gained = item.rateGained?.expansion?.total ?? 0;
      let lost = item.rateLost?.expansion?.total ?? 0;
      gained *= expansionSize;
      lost *= expansionSize;
      gained *= enoughBiomassToExpand;
      lost *= enoughBiomassToExpand;

      // handle eating
      getAmountToEat(itemName);
      

      // handle births
      gained += item.rateGained?.births?.total ?? 0;
      
      changes[itemName] = ( gained - lost ) * deltaTime;

      if (item.max) {
        item.amount = Math.max(0, Math.min(item.max, item.amount + changes[itemName]));
        item.max += 2 * enoughBiomassToExpand;
      } else {
        item.amount = Math.max(0, item.amount + changes[itemName]);
      }

    }




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
  // console.timeEnd();
}

onMounted(() => {
  setInterval(() => {
    // loop();

    // gameData.value.food.amount += gameData.value.food.rateGained.births;

    // if (gameData.value.Biomass.amount >= gameData.value.Biomass.rateLost) {
    //   gameData.value.Biomass.expand = true;
    //   setTimeout(() => {
    //     gameData.value.Biomass.expand = false;
    //   }, 1000);
    //   // expend biomass
    //   gameData.value.Biomass.amount -= gameData.value.Biomass.rateLost;
    //   // expand to include more food and more max food
    //   gameData.value.food.amount += Math.min(gameData.value.food.rateGained.expansion, gameData.value.food.max);
    //   gameData.value.food.max += 1;
    //   // consume food based on upgrade
    //   if (gameData.value.food.amount >= gameData.value.food.rateLost.total && gameData.value.food.rateLost.total > 0) {
    //     gameData.value.food.amount -= gameData.value.food.rateLost.total;
    //     gameData.value.Resource.amount += gameData.value.Resource.rateGained.total;
    //     gameData.value.Biomass.amount += gameData.value.Biomass.rateGained.food;
    //   }
    // }
    
  }, 1000);
});
setupTweenedData(gameData.value, tweened);
setupFormatNumber();

</script>

<style scoped>
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