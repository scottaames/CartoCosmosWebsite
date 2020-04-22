<template>
  <div class="wrapper">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1 class="title text-center">Leaflet-planetary Demo</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <h4 class="text-center">
            Our alpha prototype is currently in the final stages of
            implementation and testing. Here is a look at its functionality.
            <br />
            <br />
            Note: The target selector is for testing and demo purposes only and
            contains some bugs. Before you switch targets, be sure to refresh
            the page if you have previously interacted with the user interface
            (pressed any buttons).
          </h4>
          <div class="md-layout">
            <div class="md-layout-item md-size-100">
              <div class="map-container text-center">
                <object data="./demo/index.html" type="image/gif"></object>
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
  name: "demo",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/milkyway-bg.jpg"),
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
      };
    },
  },
  data() {},
};
</script>

<style lang="scss" scoped>
.page-header {
  max-height: 66vh;
}
object {
  height: 950px !important;
  width: 825px !important;
  //margin: 0 auto !important;
  //margin-left: 50px;
}

.map-container {
  height: 100% !important;
  width: 100% !important;
  background-color: transparent;
}
</style>
