<template>
  <div id="app">
    <MainHeader />
    <MainContainer />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainContainer from "@/components/MainContainer.vue";
import MainFooter from "@/components/MainFooter.vue";

export default {
  name: "App",
  components: {
    MainHeader,
    MainContainer,
    MainFooter,
  },
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}
</style>
