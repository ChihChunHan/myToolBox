<template>
  <div class="banner">
    <ContainerComponent
      :bnList="bnList"
      :moveWay="moveWay"
      :nowIndex="nowIndex"
      :total="total"
      :transition="transition"
    ></ContainerComponent>
    <ControllerComponent
      :nowIndex="nowIndex"
      :total="total"
      @change-handler="changeIndex"
      @mouseenter.native="hover=true"
      @mouseleave.native="hover=false"
    ></ControllerComponent>
  </div>
</template>

<style lang="scss">
</style>

<script>
import ContainerComponent from "./Container/ContainerComponent";
import ControllerComponent from "./Controller/ControllerComponent";

// import timerStyle from "../../mixins/timerStyle/singleBannerTimer"
// import timerStyle from "../../mixins/timerStyle/multiBannerTimerCounting"
import timerStyle from "../../mixins/timerStyle/multiBannerSyncInvoke"


export default {
  mixins:[timerStyle],
  components: {
    ContainerComponent,
    ControllerComponent,
  },
  props: {
    bnList: {
      type: Array,
      default: function () {
        return [];
      },
    },
    transition: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      nowIndex: 0,
      moveWay: "next",
      hover: false,
    };
  },
  computed: {
    total() {
      return this.bnList.length;
    },
  },
  methods: {
    changeIndex(num) {
      if (this.newIndex === num) return false;
      this.moveWay = this.nowIndex < num ? "next" : "prev";
      this.nowIndex = (num + this.total) % this.total;
    },
  },
};
</script>


