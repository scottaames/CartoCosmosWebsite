<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title text-center">Documents and Presentations</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h2 class="title text-center">
            Documents
          </h2>
          <hr class="separator-line" />
          <div class="section tabs-section">
            <div class="container">
              <div class="md-layout">
                <div class="md-layout-item md-size-100 mx-auto">
                  <tabs
                    :tab-name="[
                      'Team Standards',
                      'Team Inventory',
                      'Tech Feasibility',
                      'Requirements',
                      'Software Design',
                      'Testing Plan',
                    ]"
                    :tab-icon="[
                      'people_alt',
                      'archive',
                      'present_to_all',
                      'poll',
                      'build',
                      'work',
                    ]"
                    plain
                    flex-column
                    nav-pills-icons
                    color-button="primary"
                  >
                    <template slot="tab-pane-1" class="pdf-container">
                      <div class="text-center lg-text">
                        The Team Standards lays down the roles of each of our
                        team members in detail and the guidelines and rules we
                        have established with the intention of holding ourselves
                        and each other accountable over the course of this
                        project.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./TeamStandards.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-2" class="pdf-container">
                      <div class="text-center lg-text">
                        The Team Inventory contains biographies of our team
                        members. For those interested in getting to know our
                        team a little better--where we've been and what we like.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./TeamInventory.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-3" class="pdf-container">
                      <div class="text-center lg-text">
                        The Technolgical Feasibility is an assessment of the
                        project. It evaluates and breaks down the expected
                        technolgical challenges, what our solutions are to the
                        challenges, and how we plan to integrate each of them
                        into a singular solution.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./Tech_Feasibility.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-4" class="pdf-container">
                      <div class="text-center lg-text">
                        The Requirements document contains a detailed
                        examination of the requirements for the project. It
                        contains top-level functionality which is broken down
                        into the functional, non-functional (performance), and
                        environmental requirements and their specifics.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./Requirements.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-5" class="pdf-container">
                      <div class="text-center lg-text">
                        The Software Design document is an in-depth look at the
                        design choices we made by analyzing and describing each
                        component of the project. Each function in our
                        application is listed and described here in detail.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./Software_Design_Doc.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-6" class="pdf-container">
                      <div class="text-center lg-text">
                        The Software Testing Plan document is a tool we used to
                        plan out the final phase of our project to ensure we are
                        providing our clients a reliable piece of software. We
                        take a look at how we are going to use unit,
                        integration, and usability tests to ensure a good user
                        experience.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./Testing-Doc.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                  </tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="container">
          <h2 class="title text-center">
            Presentations
          </h2>
          <hr class="separator-line" />
          <div class="section tabs-section">
            <div class="container">
              <div class="md-layout">
                <div class="md-layout-item md-size-100 mx-auto">
                  <tabs
                    :tab-name="[
                      'Mini Intro.',
                      'Design Review 1',
                      'Design Review 2',
                      'Design Review 3',
                      'UGRADS',
                    ]"
                    :tab-icon="['comment', 'save', 'stream', 'sync', 'map']"
                    plain
                    flex-column
                    nav-pills-icons
                    color-button="primary"
                  >
                    <template slot="tab-pane-1" class="pdf-container">
                      <div class="text-center lg-text">
                        The Introductory Presentation is a short introduction to
                        our project along with our initial thoughts on
                        implementation and possible challenges we might face.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./IntroPresentation.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-2" class="pdf-container">
                      <div class="text-center lg-text">
                        The first Design Review presentation is where we present
                        our findings from the Technolgical Feasibility and
                        Requirements Documents, in addition to the potential
                        risks during development and how we plan to alleviate
                        their impact and likelihood.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./DesignReview01.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-3" class="pdf-container">
                      <div class="text-center lg-text">
                        The second Design Review presentation is a look into an
                        overview of our project implementation and our
                        architetural and design choices from a top level. We
                        also analyze some of the challenges we faced and their
                        corresponding resolutions, as well as how our project
                        schedule looks for the remainder of the semester.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./DesignReview02.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-4" class="pdf-container">
                      <div class="text-center lg-text">
                        The third Design Review presentation is a way to catch
                        everyone up to the current state of our project and
                        present our alpha prototype for critique. We also take a
                        look at our testing plan and expectations moving forward
                        as we put on the final touches for UGRADS.
                        <br />
                        <br />
                      </div>
                      <object
                        data="./DesignReview03.pdf"
                        type="application/pdf"
                      ></object>
                    </template>
                    <template slot="tab-pane-5" class="pdf-container">
                    </template>
                  </tabs>
                </div>
              </div>
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
  name: "documents",
  //bodyClass: "documents",
  components: {
    Tabs,
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/pluto-bg.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  data() {
    return {
      classicModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.page-header {
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  max-height: 66vh;
}
h4.text-center {
  width: 80%;
  margin: 0 auto;
}

.lg-text {
  font-size: 1.1em;
  line-height: 1.6em;
  width: 100%;
  height: 100%;
  //margin: 0 auto;
}
object {
  height: 48em !important;
  width: 100% !important;
}

.pdf-container {
  height: 100% !important;
}

.tabs-section {
  border: 2px;
}

.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
