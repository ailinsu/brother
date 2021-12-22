<template>
  <div class="clue">
    <div class="phase">{{phase}}</div>
    <div class="number">{{number}}</div>
    <div class="text">aaaaaaaaaa{{text}}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    phase: String,
    number: Number,
    text: String
  }
}
</script>

<style scoped>
.clue {
  margin: auto;
  display: block;
  background-color: white;
  border-top-color: black;
  border-top-width: 5px;
  border-bottom-color: black;
  border-bottom-width: 5px;
  width: 300px;
  height: 200px;
  filter: drop-shadow(0 0 10px rgb(150, 150, 150));
  margin: 40px 0 0;
}
</style>
