<template>
  <div class="about">
   <h2>{{ msg }}</h2>
    <p>
      For other projects and information check out our
      <a href="https://webmobapps.com" target="_blank"> Other Site</a>.
    </p> 
  </div>
</template>
<script>
import App from '../App'
export default {
  name: 'about',
  head: {
    title: 'About - My Website'
  },
  components: {
    App
  },
  data() {
    return { msg: 'This is an about page!' }
  }
  }
</script>


