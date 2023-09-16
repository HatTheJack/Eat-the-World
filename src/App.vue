<script setup>
import { ref } from 'vue' 

// const gameData = ref({
//   resources: {
//     biomass: 3,
//     fibre: 0,
//   }
// })

const gameData = ref({
  hive: [
    { 
      hive: 1, 
      radius: 1085, 
      growth: 16,
      resources: [
        {label: "biomass", value: 3, persecond: 10}, 
        {label: "fibre",value: 0, persecond: 1}
      ]  
    }, 
    { 
      hive: 2, 
      radius: 1, 
      growth: 1,
      resources: [
        {label: "biomass", value: 3, persecond: 10}, 
        {label: "fibre",value: 0, persecond: 1}
      ]  
    }
  ],
  resources: [
    {label: "biomass", value: 0, persecond: 10}, 
    {label: "fibre",value: 0, persecond: 1}
  ]
})

</script>

<template>
  <div id="resources">
    <div v-for="item in gameData.hive">
        <span>Hive: {{ item.hive }}</span>
        <span>Radius: {{ item.radius }}</span>
        <span>Growth: {{ item.growth }}</span>
        <div v-for="resources in item.resources">
          <span>{{resources.label}}</span>
          <span>{{resources.value}}</span>
        </div>
    </div>
  </div>
</template>

<style scoped>
  span {
    display: inline-block;
    width: 100px;
  }
</style>
