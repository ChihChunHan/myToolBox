<template>
  <div class="controller-component">
    <ButtonComponent class="arrow-prev" @pass-handler="clickBtn(nowIndex-1)" :key="'prev'"></ButtonComponent>
    <div class="pointer-container">
    <ButtonComponent class="point" :class="{active:n-1===nowIndex}" @pass-handler="clickBtn(n-1)" v-for="n in total" :key="'b'+n"></ButtonComponent>
    </div>
    <ButtonComponent class="arrow-next" @pass-handler="clickBtn(nowIndex+1)" :key="'next'"></ButtonComponent>
  </div>
</template>

<style lang="scss" >
</style>

<script>
import ButtonComponent from "./ButtonComponent";

export default {
  components: {
    ButtonComponent,
  },
  props: {
    nowIndex: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  methods: {
    clickBtn(num) {
      this.$emit("change-handler", num);
    },
  },
};
</script>

