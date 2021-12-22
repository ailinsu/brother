<template>
  <div id="app">
    <router-view/>
    <!-- <Clue/> -->
  </div>
</template>

<script>
// import Clue from './components/Clue.vue'

export default {
  name: 'App',
  components: {
    // Clue
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
#app {
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;;
}

html,body {
  height: 100%;
  margin: 0;
}
</style>
