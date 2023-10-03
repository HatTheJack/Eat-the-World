<template>
    <div id="devArea">
        <div v-if="showDev" id="dev">
            <h4>I am some debug info</h4>
            <div class="flexContainerHorizontal">
            <div class="buttons">
            <button @click="heartBeat()">Tick</button>
            <button @click="gameData.heart.amount = gameData.heart.max">Max heart</button>
            <button @click="gameData.hive[0].radiusPerBeat += 100">Increase radius per beat 100</button>
            <button @click="gameData.hive[0].radiusPerBeat += 1000">Increase radius per beat 1000</button>
            <button @click="gameData.hive[0].radiusPerBeat += 10000">Increase radius per beat 10000</button>
            <button @click="gameData.hive[0].radiusPerBeat += 1000000000">Increase radius per beat 1000000000</button>
            </div>
            <pre>{{ gameData }}</pre>
            </div>
        </div>
        <button @click="showDev = !showDev">Toggle Dev</button>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { gameData } from '@/assets/js/gameData.js'

  const showDev = ref(false);
</script>
  
<style scoped>
  /* import theme variables from theme.css */
  @import url('@/assets/css/themes.css');
  
    #devArea {
        text-align: right;
        position: absolute; 
        bottom: 0;
        right: 0;   
    }
    #dev {
        position: relative;
        width: 700px;
        height: 700px;
        background: lightgrey;
        bottom: 0;
        right: 0;
        color: black;
        overflow-y: auto;
    }
    #dev .buttons {
        flex: 25;
    }
    #dev pre {
        flex: 75;
        height: 680px;
        overflow-y: auto;
    }
</style>
  
