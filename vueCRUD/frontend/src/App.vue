<template>
  <NavBar />
    <div class="container mt-3">
      <router-view />
    </div>
    <Footer />
</template>

<script>
import Footer from './components/Footer.vue'
import NavBar from  './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    Footer,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
