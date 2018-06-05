export default {
  sampleCode01: `
### Html
<div id="app"></div>

### JavaScript
const myApp = document.getElementById('app')
myApp.innerHTML = 'Hello World!'
`,
  sampleCode02: `
### Html
<div id="app">{{ message }}</div>

### JavaScript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
`,
  sampleCode03: `
### Html
<div id="app">
  <span v-bind:title="message">
    ここにホバーして属性バインドを確認！
  </span>
</div>

### JavaScript
var app = new Vue({
  el: '#app',
  data: {
    message: '表示日時 ' + new Date().toLocaleString()
  }
})
`,
  sampleCode04: `
### Html
<div id="app">
  <input type="text" v-model="message">
  <p>
    {{ message }}
  </p>
</div>

### JavaScript
var app = new Vue({
  el: '#app',
  data: {
    message: '変えてみ？'
  }
})
`,
  sampleCode05: `
  ### Html
  <div> {{ message }} </div>
  <button @click="changeMessage">いいや！限界だ 押すね！</button>

  ### JavaScript
  var app = new Vue({
    el: '#app',
    data: {
      message: '「ボタン」を押させるなーッ！！'
    },
    methods: {
      changeMessage() {
        this.message = '「エコーズ ACT3」！！！！！'
      }
    }
  })
`,
  sampleCode06: `
### Html
<input type="checkbox" v-model="isSenseiShown"> 先生を表示
<div v-if="isSenseiShown"><img src="/school_class_english.png"></div>

### JavaScript
var app = new Vue({
  el: '#app',
  data: {
    isSenseiShown: false
  }
})
`
}
