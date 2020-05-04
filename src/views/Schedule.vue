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
            The project schedule was split up into two semesters. Our first
            semester was the planning phase and the second semester was the
            implementation phase. Many of the phases have supporting
            documentation that details our decision-making process. To learn
            more about each phase, you can visit our
            <a href="#/documents">documents page</a> to learn more about how we
            implemented and structured the project.
          </h4>
          <br />
          <div class="md-layout">
            <div
              class="md-layout-item md-medium-size-66 md-small-size-100 mx-auto"
            >
              <img
                :src="gantt"
                alt="Gantt Chart"
                class="img-raised rounded img-fluid"
              />
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
  props: {
    header: {
      type: String,
      default: require("@/assets/img/saturn-bg.jpg"),
    },
    gantt: {
      type: String,
      default: require("@/assets/img/GanttChart.png"),
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
