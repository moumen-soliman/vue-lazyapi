import Vue from 'vue'
import GithubRepos from './components/github/GithubRepos.vue'
import GithubEvents from './components/github/GithubEvents.vue'

Vue.component('GithubRepos', GithubRepos);
Vue.component('GithubEvents', GithubEvents);

export {GithubRepos, GithubEvents}
