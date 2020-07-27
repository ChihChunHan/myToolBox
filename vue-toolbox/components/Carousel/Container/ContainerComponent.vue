<template>
  <transition-group 
    tag="div" 
    class="banner-container" 
    :name="transitionStyle"
  >
    <ContentComponent 
      v-for="(content,index) of bnList" 
      v-show="content.id === nowIndex"
      :content="content" 
      :key="'pic'+index"
    >
    </ContentComponent>
  </transition-group>
</template>

<style lang="scss">
</style>

<script>
import ContentComponent from "./ContentComponent";

export default {
  components: {
    ContentComponent,
  },
  props: {
    nowIndex: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      reqeired: true,
    },
    moveWay: {
      type: String,
      required: true,
    },
    transition: {
      type: String,
      required: true,
    },
    bnList: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    transitionStyle() {
      return this.transition + "-" + this.moveWay;
    },
  },
};
</script>

