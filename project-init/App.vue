<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <CarroseolCompnent :bnList="bnList"></CarroseolCompnent>
    <div class="main">
    </div>
    <footer>
    </footer>
    <GoTopComponent></GoTopComponent>
  </div>
</template>

<script>

import CarroseolCompnent from "./components/Carousel/CarouselComponent";
import HeaderComponent from "./components/Header/HeaderComponent";
import GoTopComponent from "./components/GoTopComponent";

export default {
  name: "Layout",
  components: {
    CarroseolCompnent,
    HeaderComponent,
    GoTopComponent,
  },
  data() {
    return {
      bnList: [
        {id:0,src:bg,title:"Hello, we're gtd."},
      ],
    };
  },
};
</script>

<style lang="scss">
</style>