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
import { githubBuilder } from '../builders/githubBuilder'

export default {
  name: 'Github',
  mixins: [githubBuilder],
  mounted() {
    const {
      user,
      repo,
      role,
      org,
      owner,
      url,
      fetchUrl,
      loading,
    } = this;

    switch (true) {
      // https://developer.github.com/v3/activity/events/
      // List public events
      case role == 'list-public-events':
        this.fetchUrl = `/events`
        break;

      // List repository events
      case role == 'list-repos-events':
        this.fetchUrl = `/${owner}/${repo}/events`
        break;

      // List issue events for a repository
      case role == 'list-issues-repo-events':
        this.fetchUrl = `/repos/${owner}/${repo}/issues/events`
        break;

      // List public events for a network of repositories
      case role == 'list-public-network-events':
        this.fetchUrl = `/networks/${owner}/${repo}/events`
        break;

      // List public events for an organization
      case role == 'list-public-orgs-events':
        this.fetchUrl = `/orgs/${org}/events`
        break;

      // List events that a user has received
      case role == 'list-user-events':
        this.fetchUrl = `/users/${user}/received_events`
        break;

      // List public events that a user has received
      case role == 'list-public-user-received-events':
        this.fetchUrl = `/users/${user}/received_events/public`
        break;

      // List events performed by a user
      case role == 'list-performed-user-events':
        this.fetchUrl = `/users/${user}/events`
        break;

      // List public events performed by a user
      case role == 'list-public-performed-user-events':
        this.fetchUrl = `/users/${user}/events/public`
        break;

      // List events for an organization
      case role == 'list-orgs-events':
        this.fetchUrl = `/users/${user}/events/orgs/${org}`
        break;

      // https://developer.github.com/v3/activity/notifications/
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

      // https://developer.github.com/v3/activity/watching/
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

      // https://developer.github.com/v3/repos/
      // List user repositories
      case role == 'list-user-repos':
        this.fetchUrl = `/users/${user}/repos`
        break;

      // List organization repositories
      case role == 'list-orgs-repos':
        this.fetchUrl = `/orgs/${org}/repos`
        break;

      // List all topics for a repository
      case role == 'list-topics-repos':
        this.fetchUrl = `/repos/${user}/${repo}/topics`
        break;

      // List contributors
      case role == 'list-contributors-repos':
        this.fetchUrl = `/repos/${user}/${repo}/stats/contributors`
        break;

      // List tags
      case role == 'list-tags-repos':
        this.fetchUrl = `/repos/${user}/${repo}/tags`
        break;

      // Check if you are starring a repository
      case role == 'check-starred-repo':
        this.fetchUrl = `/user/starred/${owner}/${repo}`
        break;

      default:
      break;
    }
    this.fetchingData()
  }
}
</script>
