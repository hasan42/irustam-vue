<template>
  <div id="app" class="main">
    <Header />
    <Main />
    <Personal />
    <Portfolio />
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Main from './components/Main/Main.vue'
  import Personal from './components/Personal/Personal.vue'
  import Portfolio from './components/Portfolio/Portfolio.vue'

  export default {
  name: 'app',
  components: {
  Header, Main, Personal, Portfolio
  }
  }
</script>

<style lang="scss">
  @import './assets/css/normalize.css';
  @import './assets/css/main.css';
</style>
