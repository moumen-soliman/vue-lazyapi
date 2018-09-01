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
      loading,
    } = this;

    // https://developer.github.com/v3/repos/
    switch (true) {
      // List user repositories
      case role == 'list-user-repos':
        fetch(`${url}/users/${user}/repos`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      // List organization repositories
      case role == 'list-orgs-repos':
        fetch(`${url}/orgs/${org}/repos`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      // List all topics for a repository
      case role == 'list-topics-repos':
        fetch(`${url}/repos/${user}/${repo}/topics`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      // List contributors
      case role == 'list-contributors-repos':
        fetch(`${url}/repos/${user}/${repo}/stats/contributors`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      // List languages
      case role == 'list-languages-repos':
        fetch(`${url}/repos/${user}/${repo}/languages`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      // List tags
      case role == 'list-tags-repos':
        fetch(`${url}/repos/${user}/${repo}/tags`)
          .then(response => response.json())
          .then(result => this.getData = result)
          .then(() => this.lazyGetData(this.getData))
          .catch(error => console.log(error.response))
          .finally(() => this.loading = false)
        break;

      default:
        break;
    }
  }
}
</script>
