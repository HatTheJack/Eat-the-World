<template>
    <div class="viewport" 
      @wheel="handleMouseWheel"
      @mousedown="startDragging"
      @mouseup="stopDragging"
      @mousemove="drag"
    >
      <div class="zoom-content" :style="zoomStyle">
        <!-- Your content goes here -->
        <div class="element">Element 1</div>
        <div class="element">Element 2</div>
        <!-- Add more elements as you wish -->
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // const isDragging = ref(false);
  // const mouseX = ref(0);
  // const mouseY = ref(0);

  // zoom level
  const zoom = ref(1);
  // zoom style to apply to zoom-content
  const zoomStyle = ref(
    `transform: scale(1); transform-origin: 0 0;`
  );

  // function to zoom in and out using mousewheel centered on mouse position
  const handleMouseWheel = (e) => {
    // zoom in if mouse wheel up
    let zoomChanged = false;
    if (e.deltaY < 0 && zoom.value < 2) {
      zoom.value += 0.1;
      zoomChanged = true;
    } else if (e.deltaY > 0 && zoom.value > 0.5) {
      zoom.value -= 0.1;
      zoomChanged = true;      
    }
    // get mouse position relative to area

    if (zoomChanged) {
      const zoomContent = document.querySelector('.zoom-content');
      const rect = zoomContent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      zoomStyle.value = `transform: scale(` + zoom.value + `); transform-origin: `+ x +`px `+ y +`px;`;
      console.log(zoomStyle.value);
    }
  };
  
  
  </script>
  
  <style scoped>
  .viewport {
    width: 100vw; /* Adjust as needed */
    height: 100vh; /* Adjust as needed */
    overflow: hidden;
    border: 1px solid #000;
  }

  
  .zoom-content {
  position: relative;
  top: 0;
  left: 0;
  width: 2000px;
  height: 2000px;
  background: red;
}
  
  .element {
    width: 50px;
    height: 50px;
    background-color: #3498db;
    position: absolute;
  }
  </style>
  