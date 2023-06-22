import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",  //the URL path where this route can be found.
    alias: "/users",
    name: "users",  //optional name to use when we link to this route.
    component: () => import("./components/Home") //component to load when this route is called.
  },
  {
    path: "/users/:id",
    name: "user-details",
    component: () => import("./components/ProfilUser")
  },
  {
    path: "/admin",  //the URL path where this route can be found.
    alias: "/admin",
    name: "admin",  //optional name to use when we link to this route.
    component: () => import("./components/Admin") //component to load when this route is called.
  },
  {
    path: "/add",
    name: "add",
    component: () => import("./components/AddUser")
  },
  //{ path: '*', component: () => import("./components/NotFound")}
  //* se potriveste cu toate rutele (e precum default din switch, sau ultimul else)
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;