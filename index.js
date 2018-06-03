import Vue from "vue";
import axios from 'axios';
import router from './router'
import App from "./App";


Vue.use(axios);
const vm = new Vue({
el: '#app',
 router,
 render: h => h(App)
}); 
export const HTTP = axios.create({
  //http://jsonplaceholder.typicode.com/
  baseURL: `https://webmobapps.com/wp-json`,
  //leave below for later
  //headers: {
   // Authorization: 'Bearer {token}'
  //}
})
// Export the Vue instance
export default app
 