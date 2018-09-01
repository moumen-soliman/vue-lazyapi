import Vue from 'vue'
import GithubRepos from './components/github/GithubRepos.vue'
import GithubEvents from './components/github/GithubEvents.vue'
import GithubNotifications from './components/github/GithubNotifications.vue'

Vue.component('GithubRepos', GithubRepos);
Vue.component('GithubEvents', GithubEvents);
Vue.component('GithubNotifications', GithubNotifications);

export {
  GithubRepos,
  GithubEvents,
  GithubNotifications
}
