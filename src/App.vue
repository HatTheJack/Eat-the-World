<!-- 
To update distro run following commands
npm run build
git add dist -f
git commit -m "adding dist"
git subtree push --prefix dist origin gh_pages 
-->
<script setup>
import { defineSSRCustomElement, ref, reactive, computed, onMounted, onBeforeUnmount, watch } from 'vue'
// import { initHiveForest } from '@/assets/js/hives.js'
import { COMMON_NAMES } from '@/assets/js/definitions';
import { gameData } from '@/assets/js/gameData.js'
import { foodValues } from "@/assets/js/resources.js";
import { mainLoop, calculateArea, formatNumber, hiveManager, startWorker, setupResourceWatchers } from '@/assets/js/functions.js';
import { researchInfo } from '@/assets/js/research.js';
import ChildComponent from './components/popups.vue';
import devArea from '@/components/dev.vue';
import hiveInfo from '@/components/hiveinfo.vue';
import mainMenu from '@/components/mainmenu.vue';
import topbar from '@/components/topbar.vue';
import hiveTotals from '@/components/totals.vue';
import tooltip from '@/components/tooltip.vue';
import * as ADNotations from "@antimatter-dimensions/notations";
import Decimal from "break_infinity.js";
import { gameDataTweened } from './assets/js/gameData';
import gsap from 'gsap';



let mainGameLoop;
const loopInterval = 1000;

  // watch(() => gameData.value.hive[0].resource.biomass.amount, (n) => {
  //       // const formattedBiomass = parseFloat(n).toFixed(2);
  //       gsap.to(gameDataTweened.resource, { 
  //         duration: 0.5, 
  //         biomass: parseFloat(n) || 0,
  //         onUpdate: () => {
  //           gameDataTweened.resource.biomass = formatNumber(parseFloat(gameDataTweened.resource.biomass).toFixed(2), 'kg');
  //         }
  //       });
  //       console.log("watcher")
  // }); 

onMounted(() => {
  // if (heartbeatElement.value) {
  //   heartbeatWidth.value = heartbeatElement.value.offsetWidth;
  // }
  gameData.value.hive.find(item => item.id === 0).active = true;
  // mainGameLoop = setInterval(mainLoop, loopInterval);   
  // startWorker('src/assets/js/loopworker.js');
  setupResourceWatchers();
  // console.log(gameData.value.hive[0].resource.biomass.amount);

});


</script>

<template>
  <div></div>
  <main class="flexContainerVertical">
    <topbar />
    <div class="flexContainerHorizontal flexChild95">  
      <!-- {{ gameData.hive[0].resource.biomass.amount }} -->
      <div id="hiveView" class="flexChild40 flexChildVertical">
        <hiveInfo/>
      </div>
    
    <aside id="rightHandMenu" class="flexChild60 flexChildVertical">
      <mainMenu />
    </aside>
    </div>
  </main>
  <devArea/>
 </template>

<style scoped>
@import "@/assets/css/themes.css";

  main::before {
    opacity: 0.1;
    content: "";
    display: block;
    width: 150vw;
    height: 150vh;
    position: fixed;
    left: -500px;
    right: 0;
    z-index: -1;
    background: no-repeat center url('@/assets/images/Firefly -brain cells- dark purple 37713.jpg');
    filter: blur(5px);
  }
  

  #hiveTotals ul li {
    display: inline-block;
    margin: 0 10px;
  }
  .flexContainerVertical {
      display: flex;
      flex-direction: column;
      height: 100vh;
  }
  .flexContainerHorizontal {
      display: flex;
  }
  .flexChild5 {
    flex: 5;
  }
  .flexChild95 {
    flex: 95;  
  }
  .flexChild40 {
    flex: 40;
  }  
  .flexChild60 {
    flex: 60;
  }  
  .flexChildVertical:first-child {
    margin-right: 10px;
  }
  .food {
    display: inline-block;
  }
  #hiveView {
    box-sizing: border-box;
    padding: 10px;
    /* height: 100vh; */
    overflow-y: auto;
  }
/* Style the progress bar container */
  .growth-progress {
    display: block;
    width: 100%;
    height: 5px;
    border: 1px solid #ccc;
    border-radius: 0;
    background-color: violet;
    box-sizing: border-box;

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
 #rightHandMenu {
    position: relative;
  }
  .progress-heart {
    width: 25%;
    transform-origin: 0% 0%;
    transition: transform 0.05s linear;
    transform: scaleX(v-bind(gameData.heart.amountPercent));

  }
  .progress-heart::after {
    content: "♥";
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    transform: scaleX(v-bind(gameData.heart.amountPercentInverted));
    color: red;
  }
  
  .heartIcon {
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: -4px;
  }
  /* Dev Tools styling */
 
</style>


