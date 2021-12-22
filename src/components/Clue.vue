<template>
  <div class="clue">
    <div class="text">{{text}}</div>
    <div class="wrapper">
      <div class="phase">{{phase}}</div>
      <div class="number">{{number}}</div>
    </div>
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
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 300px;
  height: 150px;
}
.text {
  margin: 20px;
  margin-right: 0;
  width: 300px;
  text-align: left;
}
.wrapper {
  margin: 20px;
  display: flex;
  font-weight: 800;
  font-size: 30px;
  flex-direction: column;
  justify-content: space-between;
}
.phase {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: black;
}
</style>
