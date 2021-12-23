<template>
  <div class="home">
    <div class="title">Brother's Festive Noodle</div>
    <div class="text">
        The festive noodle attached to the festive goose contains a festive <span class="string">std::string</span> of festive alphanumeric characters.
        Enter the festive characters into the festive html form below in the order that you receive them following the festive noodle from the festive goose to the festive end.
    </div>
    <div class="input-wrapper">
      <textarea class="input" type="text" name="name" size="10" v-model="input" @input="showError = false"/>
      <div class="berror">
        <div class="error" :class="showError ? 'error--show' : ''">{{errorMessage}}</div>
        <button class="button" @click="verify">Enter</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  data() {
    return {
      input: '',
      password: '2IMuSzIDYRvoSncq2QfPli95XPyXnQo8rcOej1ZAKL6zalway3OwLkOUwoZ2HJyD',
      showError: false,
      errorMessage: "Incorrect",
    }
  },
  methods: {
    verify() {
      if (this.input.trim() === this.password) {
        this.$router.push('/Qf0mBv8ISz');
      } else {
        this.showError = true;
      }
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  width: 300px;
  height: 400px;
  font-size: 14px;
  justify-content: space-between;
}
.text {
  margin-left: 20px;
  margin-right: 20px;
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

.input-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  /* margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  padding-bottom: 0px; */
  margin: 20px;
}

.input {
  font-family: 'Roboto Mono', monospace;
  /* font-size: 10px; */
  border: 2px solid black;
  padding: 5px;
  height: 40px;
  width: 200px;
  resize: none;
}
.berror {
  display: flex;
  justify-content: space-between;
  width: 214px;
}

.button {
  margin-top: 5px;
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  font-size: 10px;
  width: 50px;
  height: 25px;
  border: 2px solid;
  background-color: white;
  align-self: flex-end;
  transition-duration: 0.3s;
}
.button:hover {
  border: 2px solid black;
  background-color: rgb(202, 202, 202);
}
.button:active {
  color: white;
  background-color: black;
}

.error {
  margin: 2px;
  margin-top: 7px;
  margin-left: 5px;
  height: 20px;
  font-weight: 900;
  color: red;
  opacity: 0;
}

.error--show {
  opacity: 100%;
}

</style>
