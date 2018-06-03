<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>
<style>
body {
font-family: 'Verdana', sans-serif;
 display:grid;
 grid-template-rows:auto;
 justify-items:center;
padding-top:30px;
}
body, html {
margin:0;
height:100%;
}
#app {
width:90%;
}
#nav {
padding:10px 10px 10px 0;
}
#nav a {
padding:10px;
font-size: 1.3em;
border-radius:5px;
background-color:#e0edf4;
text-decoration:none;
color:#3e5252;
}
h2 {
font-size: 1.4em;
}
.center {
text-align:center;
}
</style>
