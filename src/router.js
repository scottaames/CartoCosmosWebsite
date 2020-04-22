import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import DetailsPage from "./views/DetailsPage.vue";
import Team from "./views/Team.vue";
import Schedule from "./views/Schedule.vue";
import Documents from "./views/Documents.vue";
import Demo from "./views/Demo.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/detailspage",
      name: "detailspage",
      components: {
        default: DetailsPage,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/team",
      name: "team",
      components: { default: Team, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/schedule",
      name: "schedule",
      components: { default: Schedule, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/documents",
      name: "documents",
      components: {
        default: Documents,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/demo",
      name: "demo",
      components: {
        default: Demo,
        header: MainNavbar,
        footer: MainFooter,
      },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
