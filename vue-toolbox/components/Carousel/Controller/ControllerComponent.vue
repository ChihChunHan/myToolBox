<template>
  <div class="banner-controller">
    <ButtonComponent @pass-handler="clickBtn(nowIndex-1)" :key="'prev'">{{ 'Prev' }}</ButtonComponent>
    <ButtonComponent @pass-handler="clickBtn(n-1)" v-for="n in total" :key="'b'+n">{{ n }}</ButtonComponent>
    <ButtonComponent @pass-handler="clickBtn(nowIndex+1)" :key="'next'">{{ 'Next' }}</ButtonComponent>
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

