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

// https://developer.github.com/v3/activity/notifications/
export default {
  name: 'GithubNotifications',
  mixins: [builder],
  mounted() {
    const {
      repo,
      role,
      owner,
      threads_id,
      url,
      fetchUrl,
      loading,
    } = this;

    switch (true) {
      // List notifications
      case role == 'list-notifications':
        this.fetchUrl = `/notifications`
        break;

      // List repository notifications
      case role == 'list-repos-notifications':
        this.fetchUrl = `/repos/${owner}/${repo}/notifications`
        break;

      // View a single thread
      case role == 'list-issues-repo-notifications':
        this.fetchUrl = `/notifications/threads/${threads_id}`
        break;

      // List public notifications for a network of repositories
      case role == 'list-network-notifications':
        this.fetchUrl = `/networks/${owner}/${repo}/notifications`
        break;

      default:
      break;
    }
    this.fetchingData()
  }
}
</script>
