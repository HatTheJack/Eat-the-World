<template>

</template>

<script setup>
import { ref, onMounted } from 'vue';

let previousTime = Date.now();
let timer = 0;
let timeDifferenceArray = [];

function sassyIntervalFunction() {
  const currentTime = Date.now();
  const timeDifference = currentTime - previousTime;

  if (timer <= 1000 ) {
    timer += timeDifference;
    console.log(timer);
    previousTime = currentTime;
  }
  if (timer >= 1000) {
    timeDifferenceArray.push(timer);
    console.log(timeDifferenceArray);
    timer = 0;
  }

  // Do your sassy stuff here.
}
onMounted(() => {
  // if (heartbeatElement.value) {
  //   heartbeatWidth.value = heartbeatElement.value.offsetWidth;
  // }
  setInterval(sassyIntervalFunction, 100);
});


</script>

<style scoped>

</style>
