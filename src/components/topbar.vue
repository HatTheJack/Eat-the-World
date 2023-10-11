<template>
    <div id="topMenu" class="">
        <heart />
        <div id="gameDate">
            <span>Year: {{ gameData.date.year }} </span>
            <span>Day: {{ gameData.date.day }} </span>
            
            <!-- <span>timer: {{ gameData.date.timer }}</span>  -->
        </div>
    </div>
</template>

<script setup>
import { gameData } from '@/assets/js/gameData.js';
import heart from '@/components/subcomponents/heart.vue';
</script>

<style scoped>
  #topMenu {
    position: relative;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    padding: 20px;
    opacity: 0.85;
    font-size: 1.2em;
    /* background: var(--theme-primary); */
  }
  span + span{
    margin-left: 20px;
  }
</style>