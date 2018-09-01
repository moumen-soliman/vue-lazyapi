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
// https://developer.github.com/v3/repos/
export default {
  name: 'GithubRepos',
  props: {
    lazyGetData: Function,
    name: String,
    user: String,
    repo: String,
    role: String,
    org: String
  },
  data() {
    return {
      getData: null,
      loading: true,
      errored: false,
      fetchUrl: String,
      url: `https://api.github.com`
    }
  },
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
        this.fetchUrl = `${url}/users/${user}/repos`
        break;

      // List organization repositories
      case role == 'list-orgs-repos':
        this.fetchUrl = `${url}/orgs/${org}/repos`
        break;

      // List all topics for a repository
      case role == 'list-topics-repos':
        this.fetchUrl = `${url}/repos/${user}/${repo}/topics`
        break;

      // List contributors
      case role == 'list-contributors-repos':
        this.fetchUrl = `${url}/repos/${user}/${repo}/stats/contributors`
        break;

      // List tags
      case role == 'list-tags-repos':
        this.fetchUrl = `${url}/repos/${user}/${repo}/tags`
        break;

      default:
      break;
    }

    fetch(this.fetchUrl)
      .then(response => response.json())
      .then(result => this.getData = result)
      .then(() => this.lazyGetData(this.getData))
      .catch(error => console.log(error.response))
      .finally(() => this.loading = false)
  }
}
</script>
