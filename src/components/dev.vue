<template>
    <div id="devArea">
        <transition>
        <div v-if="showDev" id="dev">
            <h4>I am some debug info</h4>
            <div class="devContent">
                <div class="buttons">
                    <button @click="mainLoop(true)">Tick</button>
                    <button @click="gameData.paused = !gameData.paused">{{ gameData.paused ? 'Resume' : 'Pause' }}</button>  
                    <button @click="gameData.heart.amount = gameData.heart.max">Max heart</button>
                    <button @click="gameData.hive[0].radiusPerBeat += 100">Increase radius per beat 100</button>
                    <button @click="gameData.hive[0].radiusPerBeat += 1000">Increase radius per beat 1000</button>
                    <button @click="gameData.hive[0].radiusPerBeat += 10000">Increase radius per beat 10000</button>
                    <button @click="gameData.hive[0].radiusPerBeat += 1000000000">Increase radius per beat 1000000000</button>
                </div>
                <pre>{{ gameData }}</pre>
            </div>
        </div>
        </transition>
        <button @click="showDev = !showDev">Toggle Dev</button> 
        <div> {{ gameData.heart.amount }} - {{ gameData.date.timer }} - {{  }} </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData } from '@/assets/js/gameData.js';
  import { mainLoop } from '@/assets/js/functions.js';

  const showDev = ref(false);
</script>
  
<style scoped>
  /* import theme variables from theme.css */
  @import url('@/assets/css/themes.css');

  /* button {
    padding: 5px;
    margin: 5px;
  } */
  .devContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  
    #devArea {
        text-align: right;
        position: fixed; 
        bottom: 0;
        right: 0;   
    }
    #dev {
        position: relative;
        /* padding: 5px; */
        width: 700px;
        height: 700px;
        background: lightgrey;
        bottom: 0;
        right: 0;
        color: black;
        overflow-y: auto;
    }
    #dev .buttons {
        display: flex;
        flex-wrap: wrap;
        flex: 60;
        padding: 5px;
        height: max-content;
        justify-content: space-between;        
    }
    button {
        flex: calc(33.33% - 10px);
        margin: 0 10px 5px 0;
    }
    #dev pre {
        flex: 40;
        height: 680px;
        overflow-y: auto;
    }

    .v-enter-active, .v-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
    }

    .v-enter-from, .v-leave-to {
    transform: scaleY(0); /* Start with a height of 0 */
    transform-origin: 100% 100%;
    opacity: 0; /* You can also transition opacity if desired */
    overflow: hidden; /* Ensure content is hidden when height is 0 */
    }
    .v-enter-to, .v-leave-from {
    transform: scaleY(1);
    transform-origin: 100% 100%;
    opacity: 1; /* Make the content fully visible */
    }
</style>
  
