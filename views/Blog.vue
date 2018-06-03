<template>
  <div class="blog">
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
  name: 'blog',
  head: {
    title: 'Blog - My Website'
  },
  components: {
    App
  },
  data() {
    return { msg: 'This is a blog page!' }
  }
  }
</script>


