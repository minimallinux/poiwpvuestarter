module.exports = {
  entry: './index.js',
  plugins: [
    require('@poi/plugin-vue-static')({
      // The routes to generate
      // Only useful for `poi build`
      routes: ['/'] // default
    })
  ]
}
