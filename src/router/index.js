import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "../views/Store.vue"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignUp",
    component: Signup
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
