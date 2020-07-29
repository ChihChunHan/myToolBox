<template>
  <button class="button-component" @click="passNum">
    <slot></slot>
  </button>
</template>

<style lang="scss">
</style>

<script>
export default {
  methods: {
    passNum() {
      this.$emit("pass-handler");
    },
  },
};
</script>

