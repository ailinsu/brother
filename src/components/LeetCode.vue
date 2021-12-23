<template>
  <div class="home">
    <div class="title">Brother's Festive Noodle</div>
    <div class="text">
			<!-- TODO: Update text here -->
			The festive noodle attached to the festive goose contains a festive <span class="string">std::string</span> of festive alphanumeric characters.
			Enter the festive characters into the festive html form below in the order that you receive them following the festive noodle from the festive goose to the festive end.
    </div>
    <button class="button add-margin" @click="copy">Copy Test Case</button>
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
  name: 'LeetCode',
  data() {
    return {
      input: '',
			// TODO: change answer here
      answer: '2IMuSzIDYRvoSncq2QfPli95XPyXnQo8rcOej1ZAKL6zalway3OwLkOUwoZ2HJyD',
      showError: false,
      errorMessage: "Incorrect",
      testCase: "I like to poo"
    }
  },
  methods: {
    verify() {
      if (this.input.trim() === this.answer) {
        // TODO: Update page routing to
        this.$router.push('/Qf0mBv8ISz');
      } else {
        this.showError = true;
      }
    },
    copy() {
        navigator.clipboard.writeText(this.testCase);
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
  margin: 20px;
}

.input {
  font-family: 'Roboto Mono', monospace;
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
  height: 25px;
  border: 2px solid;
  background-color: white;
  align-self: flex-end;
  transition-duration: 0.3s;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
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

.add-margin {
    margin-right: 20px;
}

</style>
