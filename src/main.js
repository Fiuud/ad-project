import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
//import fb from 'firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    const firebaseConfig = {
      apiKey: "AIzaSyCWvE-V3cEK1NCxvAYBhmnZTKhz1xsIquE",
      authDomain: "ad-project-c64d8.firebaseapp.com",
      projectId: "ad-project-c64d8",
      storageBucket: "ad-project-c64d8.appspot.com",
      messagingSenderId: "317292146954",
      appId: "1:317292146954:web:0781e51f8f21a810c94af3"
    };
    
  // Initialize Firebase
  //fb.initializeApp(firebaseConfig);
  //fb.analytics();
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
}
}).$mount('#app')