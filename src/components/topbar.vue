<template>
    <div id="topMenu" class="">
        <div id="gameDate">
        <span>Year: {{ gameData.date.year }}</span>
        <span>Day: {{ gameData.date.day }}</span>
        <!-- <span>timer: {{ gameData.date.timer }}</span>  -->
        <h3>GameData</h3>
        {{ gameData.heart.amount }} {{ gameData.date.timer }}
        </div>
    </div>
</template>

<script setup>
import { gameData } from '@/assets/js/gameData.js';
</script>

<style>
  #topMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 35px;
    background: var(--theme-primary);
    padding: 10px;
    box-sizing: border-box;
  }
</style>