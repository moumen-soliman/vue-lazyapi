export const builder = {
  props: {
    lazyGetData: Function,
    name: String,
    user: String,
    repo: String,
    role: String,
    owner: String,
    org: String,
    threads_id: Number
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
      fetch(this.url + this.fetchUrl)
        .then(response => response.json())
        .then(result => this.getData = result)
        .then(() => this.lazyGetData(this.getData))
        .catch(error => console.log(error.response))
        .finally(() => this.loading = false)
    }
  }
}
