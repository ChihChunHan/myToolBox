<template>
  <transition name="menu-show" duration="500">
    <div class="menu d-none md:d-block" v-show="menuIsOpen">
      <a href="javascript:;" v-for="content of menuList" :key="'btn'+content.id">{{content.title}}</a>
    </div>
  </transition>
</template>

<style lang="scss">

.menu-show {
  &-enter,&-leave-to {
    opacity: 0;
  }
  &-enter-active,&-leave-active {
    transition: opacity .5s;
  }
}

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
  }
};
</script>

