<template>
  <div id="app">
    <h1>Magnise Test Task</h1>
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 10px;
  max-width: 960px;
  margin: 0 auto;
}

.list__item {
  border: 1px solid #ccc;
  padding: 0 15px;
  margin-bottom: 5px;
  padding-bottom: 16px;

  button {
    cursor: pointer;
  }
}
</style>