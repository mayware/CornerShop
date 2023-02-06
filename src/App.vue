<template>
  <Navbar />
  <div class="container">
    <router-view />
  </div>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
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
}

.material-symbols-outlined {
  font-variation-settings:
    'FILL' 1,
    'wght' 400,
    'GRAD' 0,
    'opsz' 48
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: #101010;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.1rem 0 .5rem 0;
}

.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #343a40;
}

::-webkit-scrollbar-thumb {
  background: #495057;
}

::-webkit-scrollbar-thumb:hover {
  background: #dee2e6;
}
</style>
