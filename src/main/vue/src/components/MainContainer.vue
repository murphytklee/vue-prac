<template>
  <div class="main-container">
    <div class="main-content">
      <h2>Main Content</h2>
      <p>This is the main content area where the core content will go.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex: 1;
  width: 100%;
  position: relative;
}

.main-content {
  width: 100%;
  margin: auto;
}
</style>
