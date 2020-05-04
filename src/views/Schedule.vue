<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title">Project Schedule</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section text-center">
        <div class="container">
          <h2 class="title">Rough Timeline for Major Deliverables</h2>
          <h4>
            Below is the general timeline we used for completing the implementation for our project. 
            It includes all of the major deadlines we followed for this project.
          </h4>
          <br />
          <div class="md-layout">
            <div
              class="md-layout-item md-medium-size-66 md-small-size-100 mx-auto"
            >
              <img
                :src="ganttTp"
                alt="Gantt Chart"
                class="img-raised rounded img-fluid"
              />
            </div>
            <div class="text-center lg-text">
              <br />
              <br />
              The schedule we followed for this capstone project was split up into two different semesters. 
              Our first semester was the planning phase of our project and the second semester was the implementation 
              phase of our project. We have just finished all of our testing phases by completing our in 
              house and user testing.
              Visit our <a href="#/documents">documents page</a> to learn more about how we 
              implemented and structured our capstone project. We will be delivering our 
              project to USGS at the end of the week. 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "schedule",
  //bodyClass: "schedule",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/saturn-bg.jpg"),
    },
    ganttTp: {
      type: String,
      default: require("@/assets/img/Gantt_Chart_Bg.JPG"),
    },
    ganttBg: {
      type: String,
      default: require("@/assets/img/Gantt_Chart_Bg.JPG"),
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
.page-header {
  background-color: black;
  background-size: contain;
  background-repeat: no-repeat;
  max-height: 66vh;
}
.separator-line {
  background-color: #eee;
  height: 1px;
  width: 66%;
  display: block;
}
</style>
