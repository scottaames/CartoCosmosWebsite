<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100"
          >
            <h1 class="title">A New Way to View the Cosmos</h1>
            <div class="blockquote">
              <h4>
                "The exploration of space will go ahead, whether we join in it
                or not, and it is one of the great adventures of all time, and
                no nation which expects to be the leader of other nations can
                expect to stay behind in the race for space."
              </h4>
              <h5>
                &ensp; - JOHN F. KENNEDY, September 12, 1962
              </h5>
            </div>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">Introduction</h2>
          <hr class="separator-line" />
          <div class="md-layout">
            <div class="md-layout-item md-size-50 md-xsmall-size-100">
              <div class="vertical-align-text">
                For decades, planetary scientists have been studying space and
                its unknowns. These scientists complete important research on
                planetary bodies including planets, moons, and asteroids. In
                order to study these bodies, the scientists first have to create
                maps of the bodies. Our clients, Trent Hare and Scott Akins of
                the United States Geological Survey (USGS), work alongside these
                scientists and help with the map-making process.
                <a href="/#/team">Learn more about them here.</a> <br /><br />
                These maps are very important for the future of space
                exploration. For example, the USGS Astrogeology Science Center
                (ASC) helped create the maps used for the Apollo 11 mission, and
                you can see an example on the right.
                <br /><br />
                Currently, no tool exists that allow the scientists to view and
                interact with their maps with all the functionality needed to
                complete their research.
              </div>
            </div>
            <div
              class="md-layout-item md-size-50 md-xsmall-size-100 apollo-pic img-frame"
            >
              <span class="img-helper"></span>
              <img
                :src="apolloMap"
                alt="Thumbnail Image"
                class="img-raised rounded apollo-pic"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="section tabs-section">
        <div class="container">
          <h2 class="title text-center">Details</h2>
          <hr class="separator-line" />
          <div class="md-layout">
            <div class="md-layout-item md-size-100 mx-auto">
              <tabs
                :tab-name="[
                  'Issues',
                  'Solution',
                  'Requirements',
                  'Architecture',
                  'Technologies',
                ]"
                :tab-icon="[
                  'report_problem',
                  'check_circle',
                  'list',
                  'table_chart',
                  'apps',
                ]"
                plain
                nav-pills-icons
                color-button="primary"
              >
                <template slot="tab-pane-1">
                  <div class="text-center lg-text">
                    <div class="md-layout">
                      <div class="md-layout-item md-size-50 md-xsmall-size-100">
                        Currently, there are a few map-viewing tools that
                        scientists may use to view and interact with their maps,
                        but they miss a few key features:

                        <ul class="text-left">
                          <li>
                            Cannot view maps of bodies other than Earth.
                          </li>
                          <li>
                            Cannot view a body in multiple projections.
                          </li>
                          <li>
                            Cannot view the coordinate of the mouse.
                          </li>
                          <li>
                            Cannot change the latitude and longitude (lat/lon)
                            settings of the mouse coordinate.
                          </li>
                          <li>
                            Cannot draw polygons on the map to highlight
                            features on the map.
                          </li>
                        </ul>

                        In order to solve the problems mentioned above, the USGS
                        developers implemented a map-viewing application using
                        the open-source mapping API OpenLayers (OL). We can see
                        a picture of it to the right. However, the OL
                        implementation has a few problems of its own:
                        <ul class="text-left">
                          <li>
                            It uses OL version 2, released in 2006.
                          </li>
                          <li>
                            It is not modular.
                          </li>
                        </ul>
                        Because the implementation is 13 years old and not
                        modular, it is difficult for the development team to
                        update it. This also makes it difficult to use their
                        code in other mapping applications. Finally, there is
                        one other problem for both the scientists and the
                        developers. The developers may fix and update their OL
                        implementation, but there is still just one map-viewing
                        application scientists can use. The USGS wants to be
                        able to support more scientists by creating more
                        map-viewing applications that will have the
                        functionality needed by the scientists.
                      </div>
                      <div class="md-layout-item md-size-50 md-xsmall-size-100">
                        <span class="img-helper"></span>
                        <img
                          :src="moonMap"
                          alt="Thumbnail Image"
                          class="img-raised rounded intro-pic"
                        />
                      </div>
                    </div>
                    <br />
                    <md-button
                      href="https://planetarymapping.wr.usgs.gov/Target/project/Moon"
                      class="md-button md-primary md-lg md-upgrade"
                      target="_blank"
                    >
                      <md-icon>explore</md-icon>Current USGS Solution
                    </md-button>
                  </div>
                </template>
                <template slot="tab-pane-2">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-70 md-xsmall-size-100">
                      <div class="text-center lg-text-2">
                        Our solution, which aims to solve both the problems of
                        the developers and scientists, was to create a
                        cross-platform, map-viewing web application. It can be
                        used in a web browser or in a Jupyter Notebook and a
                        picture of it can be seen to the right. We have solved
                        the problems mentioned previously by adding the ability
                        to:
                        <ul class="text-left">
                          <li>
                            Allow users to view all bodies supported by the
                            USGS.
                          </li>
                          <li>
                            Contain lat/lon buttons to change the lat/lon
                            settings.
                          </li>
                          <li>
                            Allow users to change the projection of the map.
                          </li>
                          <li>
                            Contain buttons to draw polygons on the map.
                          </li>
                          <li>
                            Contain a new interactive map built with Leaflet, an
                            open-source mapping package, wrapped in a new modern
                            graphical user interface (GUI).
                          </li>
                          <li>
                            Contain a module that wraps the projection and
                            lat/lon back-end code for use in other mapping
                            applications.
                          </li>
                        </ul>
                        <strong>Note:</strong> We will not be using OL in our
                        solution. Instead, the OL implementation the USGS
                        currently has will eventually use solution #6 when the
                        USGS decides to update their solution. <br /><br />
                        In addition, we will be implementing a search bar with
                        an auto-complete function to search for a named feature
                        on a body and open a USGS website with more information
                        on that body. For example, if a user wanted to get more
                        information about Olympus Mons on Mars.
                      </div>
                    </div>
                    <div class="md-layout-item md-size-30 md-xsmall-size-100">
                      <img
                        :src="solutionPic"
                        alt="Thumbnail Image"
                        class="img rounded"
                        style="height:auto; width:auto;"
                      />
                    </div>
                  </div>
                </template>
                <template slot="tab-pane-3">
                  <div class="text-center lg-text">
                    Through bi-weekly meetings with the USGS team and Gitter
                    messages/emails, we aqcuired both functional and
                    non-function requirements. Here is a list of the high-level
                    ones:
                    <ul class="text-left">
                      <li>
                        We must deliver an application that displays planetary
                        data through an interactive viewer that is embedded in a
                        web-based environment using Leaflet.
                      </li>
                      <li>
                        The application must be programmed in JavaScript and
                        Python.
                      </li>
                      <li>
                        The codebase needs to be modular for easy updates.
                      </li>
                      <li>
                        The application needs to be compatible with most web
                        browsers and Jupyter Notebooks
                      </li>
                    </ul>
                    You can see more in depth requirements for the project in
                    our requirements document
                    <a href="#/documents">located here.</a>
                  </div>
                </template>
                <template slot="tab-pane-4">
                  <div class="md-layout">
                    <div class="md-layout-item md-size-70 md-xsmall-size-100">
                      <div class="text-center lg-text-2">
                        Our project can be broken up into three separate
                        components: Jupyter Notebook, the App, and the
                        AutoComplete module. The web based App is our JavaScript
                        Leaflet implementation. It contains two submodules, the
                        Astro package, which is the back-end, and the GUI, the
                        front-end. The Jupyter Notebook module is our Python
                        implementation with example notebooks to be used by
                        scientists. The AutoComplete module contains the code to
                        search for a named feature on a body. You can see a
                        picture of the architecture to the left. Check out our
                        As-Built document for more information.
                      </div>
                    </div>
                    <div class="md-layout-item md-size-30 md-xsmall-size-100">
                      <img
                        :src="architecturePic"
                        alt="Thumbnail Image"
                        class="img rounded"
                        style="height:auto; width:auto;"
                      />
                    </div>
                  </div>
                </template>
                <template slot="tab-pane-5">
                  <div class="team text-center">
                    <div class="md-layout">
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="babelLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid babel-pic"
                              />
                            </div>
                            <h4 class="card-title">Babel</h4>
                            <md-card-content>
                              <p class="card-description">
                                Babel is a toolchain that we will use to convert
                                ECMAScript into a backwards compatible version
                                of JavaScript for use in current and older
                                browsers or environments.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="jupyterLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid jupyter-pic"
                              />
                            </div>
                            <h4 class="card-title">Jupyter Notebook</h4>
                            <md-card-content>
                              <p class="card-description">
                                We intend to make our project compatible with
                                Jupyter Notebooks for ease of future development
                                and use by the USGS community of researchers and
                                scientists.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="leafletLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid leaflet-pic"
                              />
                            </div>
                            <h4 class="card-title">Leaflet</h4>
                            <md-card-content>
                              <p class="card-description">
                                Leaflet is the core JavaScript library we are
                                building off of. It is just 38 KB, is
                                mobile-friendly, interactive, and has all the
                                mapping features most developers ever need.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                    </div>
                    <div class="md-layout">
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="materialLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid material-pic"
                              />
                            </div>
                            <h4 class="card-title">Material UI</h4>
                            <md-card-content>
                              <p class="card-description">
                                Material UI is a React front-end framework with
                                a large library of reusable UI components
                                created by Google. It enabled us to create a
                                modern and user-friendly GUI.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                                alt="Thumbnail Image"
                                class="rounded img-fluid python-pic
                              "
                              />
                            </div>
                            <h4 class="card-title">Python</h4>
                            <md-card-content>
                              <p class="card-description">
                                Our Jupyter Notebooks implementation of
                                Leaflet-Planetary is a Python codebase,
                                leveraging its excellent data analysis tools.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                      <div
                        class="md-layout-item md-medium-size-33 md-small-size-100"
                      >
                        <div class="team-player">
                          <md-card class="md-card-plain">
                            <div class="md-layout-item md-size-100 mx-auto">
                              <img
                                :src="mochaLogo"
                                alt="Thumbnail Image"
                                class="rounded img-fluid mocha-pic"
                              />
                            </div>
                            <h4 class="card-title">Mocha</h4>
                            <md-card-content>
                              <p class="card-description">
                                Mocha is a feature-rich JavaScript test
                                framework running on Node.js and in the browser,
                                making asynchronous testing. Mocha tests run
                                serially, allowing for flexible and accurate
                                reporting, while mapping uncaught exceptions to
                                the correct test cases. We used Mocha for all of
                                our testing needs.
                              </p>
                            </md-card-content>
                          </md-card>
                        </div>
                      </div>
                    </div>
                  </div>
                </template>
              </tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs";
export default {
  components: {
    Tabs,
  },
  name: "detailspage",
  //bodyClass: "details-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/europa-bg.jpg"),
    },
    apolloMap: {
      type: String,
      default: require("@/assets/img/apollo-map.jpg"),
    },
    moonMap: {
      type: String,
      default: require("@/assets/img/usgs-moon-map.jpg"),
    },
    solutionPic: {
      type: String,
      default: require("@/assets/img/solution.png"),
    },
    leafletLogo: {
      type: String,
      default: require("@/assets/img/leaflet-logo.png"),
    },
    jupyterLogo: {
      type: String,
      default: require("@/assets/img/jupyter-logo.png"),
    },
    babelLogo: {
      type: String,
      default: require("@/assets/img/babel-logo.svg"),
    },
    materialLogo: {
      type: String,
      default: require("@/assets/img/materialLogo.png"),
    },
    mochaLogo: {
      type: String,
      default: require("@/assets/img/mochaLogo.png"),
    },
    architecturePic: {
      type: String,
      default: require("@/assets/img/architecture.png"),
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
ol.text-left {
  text-align: center;
  list-style-position: inside;
}

.vertical-align-text {
  display: table-cell;
  height: 450px;
  vertical-align: middle;
  font-size: 1em;
  line-height: 1.7em;
  text-align: center;
  padding: 5px;
}

.img-frame {
  height: 450px; /* Equals maximum image height */
  width: 100%;
  white-space: nowrap; /* This is required unless you put the helper span closely near the img */

  text-align: center;
  //margin: 1em 0;
}

.img-helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.apollo-pic {
  //background: #3a6f9a;
  vertical-align: middle;
  max-height: 450px;
  max-width: 100%;
}
.intro-pic {
  //background: #3a6f9a;
  vertical-align: middle;
  height: auto;
  width: 80%;
}

.babel-pic {
  //height: 60%;
  width: 75%;
}
.jupyter-pic {
  //height: 100%;
  width: 35%;
}
.leaflet-pic {
  padding-top: 25px;
  height: 100%;
  //width: 100%;
}
.material-pic {
  width: 70%;
}

.python-pic {
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 3rem;
}

.mocha-pic {
  width: 70%;
}

.lg-text {
  font-size: 1.1em;
  line-height: 1.7em;
}

.lg-text-2 {
  font-size: 1.1em;
  line-height: 1.7em;
}

.page-header {
  max-height: 66vh;
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;

  &::before {
    background: rgba(0, 0, 0, 0.2);
  }
}

.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
