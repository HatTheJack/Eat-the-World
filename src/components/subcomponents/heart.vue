<template>
    <div class="heartBeat">
        <!-- <font-awesome-icon class="heartIcon" icon="heart" :style="{ left: calculateHeartPosition(gameData.heart.amount, gameData.heart.max, heartbeatWidth) + 'px' }"/> -->
        <!-- <progress class="growth-progress" :value="gameData.heart.amount" :max="gameData.heart.max"></progress> -->
        <div class="progress-heart" style="color: black">
        <!-- {{  gameData.heart.amountPercent }} -->
        </div>
    </div>
  </template>

<script setup>
import { gameData } from '@/assets/js/gameData.js';
import { calculateHeartPosition } from '@/assets/js/functions.js';

</script>
  
<style scoped>
    @import url('@/assets/css/themes.css');
    .heartBeat {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        height: 25px;
        box-sizing: border-box;
        padding: 5px;
        width: 100px;
        background: var(--theme-accent);
    }
    .progress-heart {
        width: 100%;
        height: 100%;
        background: var(--theme-tertiary);
        transform-origin: 0% 0%;
        transition: transform 0.05s linear;
        transform: scaleX(v-bind(gameData.heart.amountPercent));
    }
  /* .progress-heart::after {
    content: "♥";
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.5rem;
    transform: scaleX(v-bind(gameData.heart.amountPercentInverted));
    color: red;
  } */
</style>
  