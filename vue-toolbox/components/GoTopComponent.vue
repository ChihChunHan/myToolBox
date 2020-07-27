<template>
  <button class="top_btn" :class="{ active : topBtnIsShow }" @click="goTop">
    go
    <br />top
  </button>
</template>

<script>
export default {
  data() {
    return {
      topBtnIsShow: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollHandler);
    this.scrollHandler();
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollHandler);
  },
  methods: {
    goTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    scrollHandler() {
      if (window.scrollY > 400) {
        this.topBtnIsShow = true;
      } else {
        this.topBtnIsShow = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
