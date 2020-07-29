<template>
  <transition name="go-top-component-show">
    <button class="go-top-component" :class="{ active : topBtnIsShow }" @click="goTop" v-show="topBtnIsShow">
      <span>
      go
      <br />top
      </span>
    </button>
  </transition>
</template>

<style lang="scss">
</style>

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


