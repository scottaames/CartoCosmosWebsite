<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <div class="md-toolbar-section-start">
        <div class="brand">
          <svg
            class="logo-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
          >
            <path
              class="logo-svg"
              d="M987.2 484.6l-59.9-11.1c-6.5-105.8-51.7-204.9-127.7-279.3C725.7 121.9 629.2 79 526.5 72.8l-11.1-59.9C514 5.4 507.6 0 500 0s-14 5.4-15.4 12.8l-11.1 59.9C367.4 79.2 268 124.8 193.6 201.1c-71.9 73.7-114.5 170.1-120.8 272.4l-59.9 11.1C5.4 486 0 492.5 0 500c0 7.6 5.4 14 12.8 15.4l59.9 11.1c6.5 106.1 52 205.5 128.4 280 73.7 71.9 170.1 114.5 272.4 120.8l11.1 60c1.4 7.4 7.9 12.8 15.4 12.8s14-5.4 15.4-12.8l11.1-59.9c105.7-6.5 204.8-51.6 279.2-127.5 72.4-73.8 115.3-170.4 121.6-273.2l60-11.1c7.4-1.4 12.8-7.8 12.8-15.4C1000 492.5 994.6 486 987.2 484.6zM775.9 218.4c67.9 66.6 109.2 154.5 117 248.8l-36.1-6.7c-9-82.1-46.5-159.1-105.9-217.1 -57.4-56.1-132-91.3-211.4-100.1l-6.7-36.1C624.3 114.7 709.9 153.8 775.9 218.4zM542.5 159.4c72.8 9.1 141.2 41.5 194.6 92.5L579.7 360.5 542.5 159.4zM711.5 288.5L589.1 410.9l-6.2-33.6L711.5 288.5zM748.2 262.9c50.9 53.3 83.4 121.7 92.5 194.6l-200.6-37.1L748.2 262.9zM217.8 224.7c66.6-68.3 154.8-109.8 249.4-117.6l-6.7 36.1c-82.3 9-159.3 46.6-217.4 106.1 -56 57.4-91.1 131.9-99.8 211.1l-36.1 6.7C114.7 376.1 153.5 290.6 217.8 224.7zM377.3 417.1l-88.8-128.6 0 0 122.3 122.3L377.3 417.1zM159.4 457.5c9.1-72.8 41.5-141.2 92.5-194.6l108.6 157.4L159.4 457.5zM420.3 360.5L262.9 251.8c53.3-50.9 121.7-83.4 194.6-92.5L420.3 360.5zM15.7 500L15.7 500M224.8 782.2c-68.3-66.6-109.8-154.8-117.6-249.4l36.1 6.7c9 82.3 46.6 159.3 106.1 217.4 57.4 56 131.9 91.1 211.1 99.9l6.7 36.1C376.1 885.3 290.6 846.5 224.8 782.2zM457.5 840.6c-72.8-9-141.2-41.4-194.6-92.4l157.4-108.6L457.5 840.6zM288.6 711.5l122.4-122.4 6.2 33.6L288.6 711.5zM251.8 737.1c-50.9-53.3-83.4-121.7-92.4-194.6l201 37.2L251.8 737.1zM424.4 424.4L500 15.7v0V500l75.7-75.6M575.7 424.4L984.4 500l0 0L500 500l75.7 75.7L500 984.4v0V500l-75.6 75.7L15.7 500 500 500l-75.6-75.6M589.1 589.1L589.1 589.1l33.6-6.2 88.8 128.6L589.1 589.1zM579.7 640.1l157.5 108.1c-53.3 50.9-121.7 83.4-194.6 92.5L579.7 640.1zM748.2 737.1L639.6 579.7l201.1-37.2C831.6 615.4 799.2 683.7 748.2 737.1zM781.5 776c-66.5 67.9-154.5 109.1-248.6 116.9l6.7-36.1c82.1-9 159-46.4 217-105.7 56.2-57.4 91.5-132.1 100.2-211.5l36.1-6.7C885.3 624.3 846.2 710 781.5 776z"
            />
          </svg>
        </div>
        <h1
          class="md-title"
          style="font-size: 1.3rem;
"
        >
          CartoCosmos
        </h1>
      </div>
      <div class="md-toolbar-section-end">
        <md-button
          class="md-just-icon md-simple md-toolbar-toggle"
          :class="{ toggled: toggledClass }"
          @click="toggleNavbarMobile()"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <div class="md-collapse-wrapper">
            <md-list>
              <li class="md-list-item">
                <router-link
                  exact
                  to="/"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-home"></i>
                      <p>Home</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/detailspage"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-clipboard-list"></i>
                      <p>Project Details</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/team"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-users"></i>
                      <p>Our Team</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/schedule"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-calendar-alt"></i>
                      <p>Schedule</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/documents"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-file-alt"></i>
                      <p>Documents</p>
                    </md-button>
                  </div>
                </router-link>
              </li>
              <li class="md-list-item">
                <router-link
                  to="/demo"
                  class="md-list-item-router md-list-item-container md-button-clean"
                >
                  <div class="md-list-item-content">
                    <md-button
                      slot="title"
                      class="md-button md-button-link md-white md-simple"
                    >
                      <i class="fas fa-map"></i>
                      <p>Demo</p>
                    </md-button>
                  </div>
                </router-link>
              </li>

              <md-list-item
                href="https://github.com/CartoCosmos/"
                target="_blank"
              >
                <i class="fab fa-github"></i>
                <p class="hidden-lg">Github</p>
              </md-list-item>
            </md-list>
          </div>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

export default {
  components: {},
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
        ].includes(value);
      },
    },
    colorOnScroll: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false,
    };
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss">
.logo-svg {
  fill: white;
  height: 1.2rem;
  padding-right: 4px;
}
</style>
