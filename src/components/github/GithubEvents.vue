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

// https://developer.github.com/v3/activity/events/
export default {
  name: 'GithubEvents',
  mixins: [builder],
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

      default:
      break;
    }
    this.fetchingData()
  }
}
</script>
