<template>
  <div id="app">
    <Header />
    <Main />
    <Personal />
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Main from './components/Main/Main.vue'
  import Personal from './components/Personal/Personal.vue'

  export default {
  name: 'app',
  components: {
  Header, Main, Personal
  }
  }
</script>

<style lang="scss">
</style>
