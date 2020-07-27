<template>
    <header :class="{ active:menuIsOpen }">
      <button class="menu_btn" @click="toggleMenu()">menu</button>
      <div class="menu">
        <a class="btn" href="#" v-for="n in 5" :key="'btn'+n">button{{n}}</a>
      </div>
    </header>
</template>

<script>
  export default {
      data(){
    return { menuIsOpen : false }
  },
  methods:{
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen
    },
  }
  }
</script>

<style lang="scss" scoped>

</style>
