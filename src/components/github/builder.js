export const builder = {
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
  methods: {
    fetchingData() {
      fetch(this.fetchUrl)
        .then(response => response.json())
        .then(result => this.getData = result)
        .then(() => this.lazyGetData(this.getData))
        .catch(error => console.log(error.response))
        .finally(() => this.loading = false)
    }
  }
}
