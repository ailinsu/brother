<template>
  <div class="home">
    <div class="title">Brother's Festive Noodle</div>
    <div class="text">
        The festive noodle attached to the festive goose contains a festive <span class="string">std::string</span> of festive alphanumeric characters.
        Enter the festive characters into the festive html form below in the order that you receive them following the festive noodle from the festive goose to the festive end.
    </div>
    <div class="input-wrapper">
      <div class="error" :class="showError ? 'error--show' : ''">{{errorMessage}}</div>
      <textarea class="input" type="text" name="name" size="10" v-model="input" @input="showError = false"/>
      <button class="button" @click="verify">Enter</button>
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
      errorMessage: "WRONG!!!",
    }
  },
  methods: {
    verify() {
      if (this.input.trim() === this.password) {
        this.$router.push('/start');
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
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  padding-bottom: 0px;
}

.input {
  height: 50px;
  width: 200px;
  resize: none;
}

.button {
  margin-top: 5px;
  width: 100px;
}

.error {
  height: 20px;
  color: red;
  opacity: 0;
}

.error--show {
  opacity: 100%;
}

</style>
