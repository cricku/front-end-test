import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/welcome"
  },
  {
    path: "/welcome",
    name: "StartScreen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "welcome" */ "@/views/StartScreen.vue")
  },
  {
    path: "/store",
    name: "Store",
    component: () => import(/* webpackChunkName: "store" */ "@/views/Store.vue")
  },
  {
    path: "/feedback",
    name: "Feedback",
    component: () =>
      import(/* webpackChunkName: "feedback" */ "@/views/Feedback.vue")
  },
  {
    path: "/destination",
    name: "Destination",
    component: () =>
      import(/* webpackChunkName: "destination" */ "@/views/Destination.vue")
  },
  {
    path: "/end",
    name: "EndScreen",
    component: () =>
      import(/* webpackChunkName: "end" */ "@/views/EndScreen.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
