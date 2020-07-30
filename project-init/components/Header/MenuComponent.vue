<template>
  <transition name="menu-show" :duration="{enter:1400,leave:500}">
    <div class="menu-component d-none md:d-block" v-show="menuIsOpen">
      <div v-for="content of menuList" :key="'btn'+content.id">
        <a href="javascript:;">{{content.title}}</a>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
</style>

<script>
export default {
  props: {
    menuIsOpen:{
      type:Boolean
    },
    menuList:{
      type:Array
    }
  },
};
</script>

