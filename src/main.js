import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import firebase from "firebase/app";
import "firebase/firestore";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

var firebaseConfig = {
  apiKey: "AIzaSyA63oHH94UVYzKqmh03z2ZrTt316bIzgx0",
  authDomain: "signup-39b67.firebaseapp.com",
  projectId: "signup-39b67",
  storageBucket: "signup-39b67.appspot.com",
  messagingSenderId: "557318180475",
  appId: "1:557318180475:web:c054baf242681099989cde",
  measurementId: "G-MY91WJ766R"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
