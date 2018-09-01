import Vue from 'vue'
import App from './App.vue'
import {GithubRepos, GithubEvents, GithubNotifications} from './index.js'

new Vue({
  el: '#app',
  render: h => h(App)
})
