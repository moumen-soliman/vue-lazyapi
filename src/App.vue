<template>
  <div id="app">
    <github-repos
      :lazyGetData="lazyGetData"
      v-bind="lazyPropsDetails"
    />
    {{lazyData}}
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      lazyData: null,
      lazyPropsDetails: {
        user: 'moumen-soliman',
        repo:'frontend-helper',
        role:'list-contributors-repos',
      },
    }
  },
  methods: {
    lazyGetData (data) {
      this.lazyData = data
    }
  }
}
</script>
