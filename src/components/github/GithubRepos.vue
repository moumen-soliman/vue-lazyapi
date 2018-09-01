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

// https://developer.github.com/v3/repos/
export default {
  name: 'GithubRepos',
  mixins: [builder],
  mounted() {
    const {
      user,
      repo,
      role,
      org,
      url,
      fetchUrl,
      loading,
    } = this;

    switch (true) {
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

      default:
      break;
    }
    this.fetchingData()
  }
}
</script>
