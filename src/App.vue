<template>
  <div id="app">
    <github
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
        org: 'airbnb',
        role:'list-public-orgs-events',
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
