<template>
  <div>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this getDatarmation at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>
      <div v-else></div>
    </section>
  </div>
</template>

<script>
import { builder } from '../builder'

// https://developer.github.com/v3/activity/watching/
export default {
  name: 'GithubWatching',
  mixins: [builder],
  mounted() {
    const {
      user,
      repo,
      role,
      owner,
      url,
      fetchUrl,
      loading,
    } = this;

    switch (true) {
      // List watchers
      case role == 'list-watchers':
        this.fetchUrl = `/repos/${owner}/${repo}/subscribers`
        break;

      // List repositories being watched
      case role == 'list-repos-watched':
        this.fetchUrl = `/users/${user}/subscriptions`
        break;

      // Get a Repository Subscription
      case role == 'list-repos-subscription':
        this.fetchUrl = `/repos/${owner}/${repo}/subscription`
        break;

      // Check if you are watching a repository (LEGACY)
      case role == 'list-check-repos-subscription':
        this.fetchUrl = `/user/subscription/${owner}/${repo}`
        break;

      default:
      break;
    }
    this.fetchingData()
  }
}
</script>
