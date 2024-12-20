<template>
  <div class="main-container">
    <div class="main-content">
      <h2>Chapter 1. 템플릿 문법</h2>
      <chapter_1_template />
    </div>
  </div>
</template>

<script>
import chapter_1_template from "@/examples/chapter_1_template.vue";
export default {
  name: "MainContainer",
  components: {
    chapter_1_template
  }
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
}

.main-content h2 {
  margin-top: 2em;
  text-align: center;
}
</style>
