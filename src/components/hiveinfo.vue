<template>
    <div class="expandable-div" :class="{ expanded: isExpanded }" @click="toggleExpansion">
        <slot name="tooltip"></slot>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const isExpanded = ref(false);
  
  const toggleExpansion = () => {
    isExpanded.value = !isExpanded.value;
  };
</script>
  
<style scoped>
  /* Add styling for your expandable div here */
  .expandable-div {
    width: 100px; /* Set initial width */
    height: 100px; /* Set initial height */
    transition: width 0.3s ease, height 0.3s ease; /* Add smooth transitions */
    cursor: pointer;
  }
  
  /* Apply styling when expanded */
  .expanded {
    width: 200px; /* Set expanded width */
    height: 200px; /* Set expanded height */
  }
</style>