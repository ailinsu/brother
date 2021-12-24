<template>
  <div id="app">
    <div class="ticket">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <div class="tm">
      © Brother's Festive Labs, Inc.
    </div>
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
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: auto;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  transition-duration: 0.4s;
  overflow: auto;
}
.ticket {
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: auto;
}
.fade-enter-active, .fade-leave-active {
  transition: all 1s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.tm {
  margin: 20px;
  font-size: 10px;
  align-self: flex-end;
  justify-self: right;
}

html,body {
  height: 100%;
  margin: 0;
}

textarea {
  overflow: auto;
  outline: none;

  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
</style>
