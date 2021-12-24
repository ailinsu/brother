<template>
  <div class="home">
    <div class="header">
      <div class="text">Welcome, to</div>
      <div class="title">Brother's Festive Loops 3:</div>
      <div class="festive">
        <span class="festive_1">b</span>
        <span class="festive_2">r</span>
        <span class="festive_3">öt</span>
        <span class="festive_4">he</span>
        <span class="festive_5">r</span>
        <span class="festive_6">'</span>
        <span class="festive_7">s </span> 
        <span class="festive_8">f</span>
        <span class="festive_9">ës</span>
        <span class="festive_10">t</span>
        <span class="festive_11">iv</span>
        <span class="festive_12">e </span> 
        <span class="festive_13">V</span>
        <span class="festive_14">ue</span>
        <span class="festive_15">.</span>
        <span class="festive_16">js </span> 
        <span class="festive_17">w</span>
        <span class="festive_18">ë</span>
        <span class="festive_19">b </span> 
        <span class="festive_20">ä</span>
        <span class="festive_21">p</span>
        <span class="festive_22">p</span>
      </div>
    </div>
    <button class="next" @click="$router.push('/noodle')">
      Begin
    </button>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 300px;
  height: 400px;
  font-size: 14px;
  /* filter: drop-shadow(0 0 10px rgb(150, 150, 150)); */
}
.text {
  margin: 20px;
  margin-bottom: 5px;
  text-align: left;
}
.title {
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 900;
  text-align: left;
}
.festive {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  font-style: italic;
  font-size: 35px;
  color: brown;
  margin: 20px;
  margin-top: 30px;
  font-weight: 900;
  text-align: left;
}
.festive_1  { color: rgb(221, 103, 103); }
.festive_2  { color: rgb(117, 190, 75); }
.festive_3  { color: rgb(233, 51, 51); }
.festive_4  { color: rgb(61, 171, 223); }
.festive_5  { color: rgb(226, 55, 218); }
.festive_6  { color: rgb(214, 199, 64); }
.festive_7  { color: rgb(218, 55, 55); }
.festive_8  { color: rgb(23, 50, 204); }
.festive_9  { color: rgb(202, 71, 71); }
.festive_10 { color: rgb(66, 241, 95); }
.festive_11 { color: rgb(223, 51, 208); }
.festive_12 { color: rgb(248, 228, 48); }
.festive_13 { color: rgb(36, 209, 195); }
.festive_14 { color: rgb(46, 238, 56); }
.festive_15 { color: rgb(216, 36, 81); }
.festive_16 { color: rgb(236, 179, 55); }
.festive_17 { color: rgb(56, 224, 112); }
.festive_18 { color: rgb(133, 38, 243); }
.festive_19 { color: rgb(149, 235, 37); }
.festive_20 { color: rgb(16, 141, 199); }
.festive_21 { color: rgb(240, 33, 160); }
.festive_22 { color: rgb(224, 99, 26); }
.next {
  margin: 20px;
  margin-top: 70px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  font-size: 20px;
  width: 100px;
  height: 50px;
  border: 2px solid;
  background-color: white;
  align-self: flex-end;
  transition-duration: 0.3s;
}
.next:hover {
  border: 2px solid black;
  background-color: rgb(202, 202, 202);
}
.next:active {
  color: white;
  background-color: black;
}

</style>
