<template>
  <div id="app" class="main">
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
  @import './assets/css/normalize.css';
  @import './assets/css/main.css';
</style>
