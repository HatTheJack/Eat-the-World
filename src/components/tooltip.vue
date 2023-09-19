<!-- <template lang="">
    <div>
        <h3>The start</h3>
        <p>You crashland into a forest on a new planet, a small mound of pulsating flesh with a radius of approximately 10 centimeters. Stationary and without the ability to explore or move, your world is limited to your immediate surroundings. You are driven by an unending hunger and an instinctual need to consume, assimilate, and mutate. With each heartbeat you grow larger while you hungry grows larger still</p>

        <p>Your focus is solely on the resources within your reach. You absorb nutrients and energies from your immediate environment, steadily increasing in size and muting and transforming youself and your enviroment. </p>
        <button @click="removeSelf">Remove</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const isVisible = ref(true);

const removeSelf = () => {
  isVisible.value = false;
};
</script>

<style lang="">
    
</style> -->

<script setup>
import { ref } from 'vue'

const open = ref(true)
</script>

<template>    
    <div v-if="open" class="modal">
        <h3>Debug</h3>
        <p></p>

        <p></p>
      <button @click="open = false">Close</button>
    </div>
    <div v-if="open" class="background"></div>
</template>

<style scoped>
.background {
    position: absolute;
    opacity: 0.95;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    z-index: 998;
}
.modal {
  position: fixed;
  background: darkslategrey;
  padding: 20px;
  z-index: 999;
  top: 20%;
  left: 25%;
  width: 75%;
  margin-left: -150px;
  font-family: Lato;
}
.modal h3 {
    font-family: Creepster;
}
</style>