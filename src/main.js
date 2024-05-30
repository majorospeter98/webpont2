import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";

import LoginUser from "./components/pages/LoginUser.vue";
import DashBoard from "./components/pages/DashBoard.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: LoginUser,
    },

    {
      path: "/dashboard",
      props: true,
      component: DashBoard,
    },

    {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach(async (to) => {
  if (!localStorage.getItem("users") && to.path !== "/login") {
    // redirect the user to the login page
    return { path: "login" };
  }
});
const app = createApp(App);
app.use(router);

app.mount("#app");
