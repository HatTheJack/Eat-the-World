<template>
  <div
    class="panzoom-container"
    :style="{ transform: `scale(${zoom}) translate(${panX}px, ${panY}px)` }"
    @mousedown="startDrag"
    @mouseup="stopDrag"
    @mousemove="drag"
    @wheel="zoomInOut"
  >
    <div class="panzoom-element">
      <!-- Your content goes here -->
      this is content
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const zoom = ref(1);
const panX = ref(0);
const panY = ref(0);
const isDragging = ref(false);
const startDragX = ref(0);
const startDragY = ref(0);

function startDrag(event) {
  isDragging.value = true;
  startDragX.value = event.clientX;
  startDragY.value = event.clientY;
}

function stopDrag() {
  isDragging.value = false;
}

function drag(event) {
  if (isDragging.value) {
    const deltaX = event.clientX - startDragX.value;
    const deltaY = event.clientY - startDragY.value;
    panX.value += deltaX;
    panY.value += deltaY;
    startDragX.value = event.clientX;
    startDragY.value = event.clientY;
  }
}

function zoomInOut(event) {
  const delta = event.deltaY > 0 ? -0.1 : 0.1;
  zoom.value += delta;
}
</script>

<style>
/* Add some basic styles for your panzoom container and element */
.panzoom-container {
  width: 400px;
  height: 300px;
  overflow: hidden;
  position: relative;
}

.panzoom-element {
  transform-origin: 0 0;
  position: absolute;
}

/* Add more styles as needed for your specific design */
</style>
