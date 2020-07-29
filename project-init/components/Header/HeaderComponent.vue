<template>
  <header>
    <div class="container">
      <div class="col-12 d-flex justify-between items-center">
        <div class="logo">
          <img src="../../assets/gtd_logo.png" />
        </div>
        <button class="menu_btn md:d-none" @click="toggleMenu" :disabled="throttleRunning">menu</button>
        <MenuComponent
          :menuIsOpen="menuIsOpen" 
          :menuList="menuList" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">

</style>

<script>
import MenuComponent from "./MenuComponent";

import throttle from "../../mixins/throttle";

export default {
  mixins: [throttle],
  components: {
    MenuComponent,
  },
  data() {
    return {
      menuIsOpen: false,
      menuList: [
        {id:0,title:"html"},
        {id:1,title:"css"},
        {id:2,title:"js"},
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.throttle(() => {
        this.menuIsOpen = !this.menuIsOpen;
      }, 600);
    },
  },
};
</script>


