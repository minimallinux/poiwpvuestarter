<template>
  <div class="home">
  <h2>Hello {{msg}}</h2>
  </div>
</template>
<script>
import App from '../App'
export default {
  name: 'home',
  head: {
    title: 'Home - My Website'
  },
  components: {
    App
  },
  data() {
    return { msg: 'Lets try a few http requests!' }
  }
  }
</script>
