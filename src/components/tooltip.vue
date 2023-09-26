<template>
  <div class="tooltip-container" @mouseover="showTooltip = true" @mouseleave="showTooltip = false">
    <slot></slot>
    <div v-if="showTooltip" class="tooltip">
      <slot name="tooltip"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showTooltip = ref(false);
</script>

<style scoped>
/* import theme variables from theme.css */
@import url('@/assets/css/themes.css');
.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 3px;
  display: none;
  z-index: 1;
}

.tooltip-container:hover .tooltip {
  display: block;
}
</style>
