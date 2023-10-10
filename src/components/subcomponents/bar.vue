<template>
    <div class="progress-bar">
        <template class="progress-bar-index" v-for="number in barNumbersPercent" :key="index">
            <div class="progress-bar-bar"  :style="{ transform: 'scaleX('+ number +')' }"></div>
            <div v-if="props.showNumbers" class="progress-bar-number">{{ number }}</div> 
        </template>
    </div>
</template>
<script setup>
    import { ref } from 'vue';

    const props = defineProps(['barNumbers','colours','max', 'showNumbers'])
    
    // iterate each item in variablees and convert it to a percent of 1000
    const barNumbersPercent = props.barNumbers.map(number => (number / props.max));
    console.log(barNumbersPercent);
</script>
<style scoped>
    @import url('@/assets/css/themes.css');
    .progress-bar {
        position:relative;
        background: var(--theme-primary);
        width: 100%;
        height: 20px;
    }
    .progress-bar-bar {
        position: absolute;
        transform-origin: 0% 50%;
        color: black;
        width: 100%;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
    .progress-bar-bar:nth-child(odd of .progress-bar-bar) {
        background: var(--theme-accent);
    }
    .progress-bar-bar:nth-child(even of .progress-bar-bar) {
        background: var(--theme-tertiary);
    }
</style>