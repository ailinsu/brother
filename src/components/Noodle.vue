<template>
  <div class="home">
    <div class="title">Brother's Festive Noodle</div>
    <div class="text">
        The festive noodle attached to the festive goose contains a festive <span class="string">std::string</span> of festive alphanumeric characters.
        Enter the festive characters into the festive html form below in the order that you receive them following the festive noodle from the festive goose to the festive end.
    </div>
    
    <input type="text" id="password" name="name" size="10">
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
  /* justify-content: space-between; */
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
  text-align: left;
}
.title {
  margin: 20px;
  font-weight: 900;
  text-align: left;
}
.string {
  color: rgb(0, 156, 196);
  font-weight: 900;
}
#password {
  margin: 20px;
  margin-top: 70px;
  border: 2px solid black;
  width: 200px;
  height: 50px;
  align-self: flex-end;
}
.next {
  margin: 20px;
  margin-top: 70px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  font-size: 20px;
  width: 100px;
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
