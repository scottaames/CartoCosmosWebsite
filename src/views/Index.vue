<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title text-center">
              CartoCosmos
            </h1>
            <h2 class="text-center">
              Leaflet Plugin for Planetary Mapping
            </h2>
            <h4 class="text-center">
              2019-2020 Capstone Team Project at Northern Arizona University
            </h4>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">About Our Project</h2>
          <hr class="separator-line" />
          <br />
          <br />
          <div class="md-layout">
            <div
              class="md-layout-item md-size-90 md-xsmall-size-100 mx-auto text-center"
            >
              <h5 class="description">
                Leaflet for planetary mapping (Leaflet-planetary for short) is a
                plugin extension for
                <a href="https://leafletjs.com/" target="_blank">Leaflet</a>
                that supports mapping of planetary data sets. Our goal is to
                provide support to the planetary science community and their
                exploration of the solar system and beyond. This is a senior
                capstone project by Scott Ames, Kaitlyn Lee, Jacob Kaufman, and
                Christopher Moore, with mentoring from Isaac Shaffer, at
                Northern Arizona University in Flagstaff, AZ. We are proudly
                sponsored by the United States Geological Survey (USGS)
                Astrogeology Science Center, a NASA subsidiary.
              </h5>
              <br />
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto text-center">
              <md-button
                to="team"
                class="md-button md-success md-lg md-upgrade"
              >
                <md-icon>people_alt</md-icon>Meet the Team
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <div class="section feature-section">
        <div class="container">
          <h2 class="title text-center">Features</h2>
          <hr class="separator-line" />
          <div class="features text-center">
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>map</md-icon>
                  </div>
                  <h3 class="info-title" style="padding-bottom: 7px;">
                    Interactive Viewing
                  </h3>
                  <h5 class="description">
                    Explore high resolution images of planetary bodies through
                    an enhanced version of Leaflet's graphical user interface.
                  </h5>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-primary">
                    <md-icon>more</md-icon>
                  </div>
                  <h3 class="info-title" style="padding-bottom: 7px;">
                    Custom Functionality
                  </h3>
                  <h5 class="description">
                    Scientist-tested features designed specifically for
                    planetary science. This includes:
                  </h5>

                  <ul class="text-left">
                    <li>Latitude and longitude switcher</li>
                    <li>Scale bar and zoom</li>
                    <li>Projection switcher</li>
                    <li>Layer switcher</li>
                    <li>Surface feature overlay</li>
                  </ul>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-danger">
                    <md-icon>share</md-icon>
                  </div>
                  <h3 class="info-title" style="padding-bottom: 7px;">
                    Compatability
                  </h3>
                  <h5 class="description">
                    Built with portability, compatibility, and extensibility in
                    mind. We will support for all modern web browsers and be
                    compatible with The Jupyter Notebook to facilitate data
                    sharing between users.
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="btn-container">
                <md-button
                  to="detailspage"
                  class="md-button md-success md-lg md-upgrade"
                >
                  <md-icon>info</md-icon>Learn More
                </md-button>
                <md-button
                  class="md-button md-success md-lg md-upgrade"
                  href="https://github.com/CartoCosmos/CartoCosmos.github.io"
                  target="_blank"
                >
                  <i class="fab fa-github"></i>
                  Project GitHub
                </md-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/mars-bg.jpg"),
    },
    logo: {
      type: String,
      default: require("@/assets/img/cartocosmos-logo.svg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.logo-svg {
  height: 5rem;
  fill: white;
}

.page-header {
  max-height: 66vh;
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
}
ul.text-left {
  margin-left: 1.3em;
  font-size: 1.05em;
}
.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
.feature-section {
  padding-top: 0 !important;
}
</style>
