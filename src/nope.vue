<template>
  <main>
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
        <span><span>{{ gameData.items.food.amount }} / {{ gameData.items.food.max }}</span>  {{ gameData.items.food.rateGained.total - gameData.items.food.rateLost.total }}</span></li>
      <li>
        <span>Resources</span>
        <span><span>{{  gameData.items.resource.amount }}</span>{{ gameData.items.resource.rateGained.total - gameData.items.resource.rateLost.total }}</span>
      </li>
    </ul>
    <button @click="eat()">Eat</button>

    <ul>
      <li>
        <span>Auto Eat Food</span>
        <span><span>{{ gameData.upgrades.autoeatfood.amount }}</span> {{ gameData.upgrades.autoeatfood.rateFood * gameData.upgrades.autoeatfood.amount }}</span>
        <span><button @click="buyUpgrade()">Buy</button></span>
      </li>
    </ul>
  </main>

  {{ tweened }}
  <span v-show="gameData.expand">expand</span>
  <span v-show="gameData.eat">eat</span>

  <button @Click="loop();">Tick</button>
</template>

<script setup>  
import { ref, onMounted, watch } from 'vue';

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
                building1: 0,
            },
        },
        rateGained: {
            total: 3,
            expansion: {
                total: 2,
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
                food: 0,
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
                food: 0,
            },
        },
    },
  },
  timestamp: 0,
  upgrades: {
    autoeatfood: {
      amount: 0,
      cost: 10,
      rateFood: 5,
    },
  },
});

const values = ref ({
  food: {
    rateResource: 1,
    rateBiomass: 1,
  },
  biomass: {
    rateFood: 10,
  },
  resource: {
  },
  timestamp: 0,
  upgrades: {
    autoeatfood: {
      cost: 10,
      rateFood: 5,
    },
  },
});
function eat() {
  if (gameData.value.items.food.amount >= 1) {
    gameData.value.items.food.amount -= 1;
    gameData.value.items.biomass.amount += 1;
  }
}

function buyUpgrade() {
  gameData.value.upgrades.autoeatfood.amount += 1;
  gameData.value.food.rateLost.total += gameData.value.upgrades.autoeatfood.rateFood;
  gameData.value.food.rateLost.autoEatFood += gameData.value.upgrades.autoeatfood.rateFood;
  let biomassGained = gameData.value.upgrades.autoeatfood.rateFood * values.value.food.rateBiomass;
  gameData.value.biomass.rateGained.total += biomassGained;
  gameData.value.biomass.rateGained.autoEatFood += biomassGained;
  let resourceGained = gameData.value.upgrades.autoeatfood.rateFood * values.value.food.rateResource;
  gameData.value.resource.rateGained.total += resourceGained;
  gameData.value.resource.rateGained.food += resourceGained;
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
  gameData.value.timestamp = Date.now();


    let changes = {};

    // loop over each object in items and calculate expansion rategains and losses and assign the difference to change variable
    if (gameData.value.items.biomass.amount > changes.biomass * -1) {
      for ( const itemName in gameData.value.items) {
        const item = gameData.value.items[itemName];
        let gained = item.rateGained?.expansion?.total ?? 0;
        let lost = item.rateLost?.expansion?.total ?? 0;
        changes[itemName] = gained - lost;  
      }
    }

  

    // apply changes to each item amount 
    for ( const itemName in changes) {
      const item = gameData.value.items[itemName];
      if (item.max) {
        item.amount = Math.max(0, Math.min(item.max, item.amount + changes[itemName]));
        item.max += 2;
      } else {
        item.amount = Math.max(0, item.amount + changes[itemName]);
      }

    }
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