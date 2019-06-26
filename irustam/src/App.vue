<template>
  <div id="app" class="main">
    <Header />
    <Main />
    <Personal />
    <Portfolio />
    <Modal>
      <Feedback />
    </Modal>
  </div>
</template>

<script>
  import Header from './components/Header/Header.vue'
  import Main from './components/Main/Main.vue'
  import Personal from './components/Personal/Personal.vue'
  import Portfolio from './components/Portfolio/Portfolio.vue'
  import Modal from './components/Modal/Modal.vue'
  import Feedback from './components/Feedback/Feedback.vue'

  export default {
  name: 'app',
  components: {
  Header, Main, Personal, Portfolio, Modal, Feedback
  }
  }
</script>

<style lang="scss">
  @import './assets/css/normalize.css';
  @import './assets/css/main.css';
</style>
