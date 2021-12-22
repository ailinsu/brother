<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
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
  width: 100%;
  transition-duration: 0.4s;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

html,body {
  height: 100%;
  margin: 0;
}
</style>
