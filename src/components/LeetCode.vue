<template>
  <div class="home">
    <div class="title">Brother's Festive Algorithm</div>
    <div class="text">
      <span class="description">Given a festive array </span><span class="code">nums</span><span class="description"> of </span><span class="code">n</span><span class="description"> festive integers where </span>
      <span class="code">nums[i]</span><span class="description"> is in the range </span><span class="code">[1, n]</span><span class="description">,
      return a festive array of all the festive integers in the range </span><span class="code">[1, n]</span>
      <span class="description"> that do not appear in the festive array </span><span class="code">nums</span><span class="description">. Remove the brackets and commas,
      and paste in the list as a concatenated festive number.</span>
    </div>
		<div class="example-group">
			<div class="title">Example 1:</div>
			<div class="code-block">
				Input: nums = [4,3,2,7,8,2,3,1,2,1]<br/>
				Missing: [5,6,9,10]<br/>
				Output: 56910
			</div>
		</div>
		<div class="example-group">
			<div class="title">Example 2:</div>
			<div class="code-block">
				Input: nums = [1,1,1]<br/>
				Missing: [2,3]<br/>
				Output: 23
			</div>
		</div>
		<div class="button-container">
			<button class="button-test-case" @click="copy">Copy Test Case</button>
		</div>
    <div class="input-wrapper">
      <textarea class="input" type="text" name="name" size="10" v-model="input" @input="showError = false"/>
      <div class="berror">
        <div class="error" :class="showError ? 'error--show' : ''">{{errorMessage}}</div>
        <div class="bcontrol">
          <button class="button" @click="clear">Clear</button>
          <button class="button" @click="verify">Enter</button>
        </div>
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
      answer: '234131516172025282930414246485456585962656668757781838489959697102103105108109111112115118119120123124127129135137138139140145147148152153155158160161163168171176180181182183184186187189190192200',
      showError: false,
      errorMessage: "Incorrect",
      testCase: "[78,151,19,21,12,157,88,151,136,199,177,70,18,157,74,165,79,14,162,35,36,170,6,199,6,24,11,1,55,7,157,49,194,70,60,51,9,151,169,165,18,133,22,175,132,130,51,150,45,113,172,178,8,93,60,93,27,165,92,12,144,165,47,32,91,64,57,174,38,51,43,92,21,175,21,100,71,156,9,125,60,166,63,154,10,198,93,53,86,85,141,114,33,178,50,99,73,136,73,169,76,116,34,82,40,110,70,5,131,50,73,104,35,141,151,185,149,126,1,170,11,107,11,71,159,167,7,47,166,131,106,167,94,128,67,173,146,85,116,44,122,165,179,170,74,101,191,98,142,37,31,169,188,179,32,52,195,87,156,80,61,71,73,143,117,90,7,40,94,39,179,196,23,72,69,195,133,23,131,43,134,193,188,165,199,26,170,32,44,121,191,69,144,134,39,162,197,156,195,164]"
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
    },
    clear() {
      this.input = '';
      this.showError = false;
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
  height: 750px;
  font-size: 14px;
  justify-content: space-between;
	margin-top: 20px;
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
.code {
  background-color: rgb(228, 228, 228);
  font-size: 10px;
  font-weight: 900;
  color: rgb(27, 27, 27);
  padding: 3px;
  border-radius: 5px;
	vertical-align: middle;
}
.code-block {
  margin-left: 20px;
  margin-right: 20px;
  text-align: left;
  background-color: rgb(228, 228, 228);
  font-size: 10px;
  font-weight: 900;
  color: rgb(27, 27, 27);
  padding: 10px;
  border-radius: 5px;
}
.bcontrol {
  display: flex;
}
.button:first-child {
  margin-right: 5px;
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

.button-container {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 20px;
}
.button-test-case {
  font-family: 'Roboto Mono', monospace;
  font-weight: 900;
  font-size: 14px;
  height: 40px;
	width: 260px;
  border: 2px solid #000;
  background-color: #666;
	color: #fff;
  align-self: flex-end;
  transition-duration: 0.3s;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-test-case:hover {
	background-color: #eee;
	color: #666;
}

.button-test-case:active {
	background-color: #515151;
	color: #fff;
}

.description {
	vertical-align: middle;
	line-height: 20px;
}

</style>
