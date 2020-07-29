<template>
  <div 
    class="content-component d-flex justify-center items-center"
    :style="bgImg"
  >
  <div>
    <h1>
      {{content.title}}
    </h1>
  </div>
  </div>
</template>

<style lang="scss">

</style>

<script>
export default {
  props: {
    content: {},
  },
  computed: {
    bgImg(){
      return {backgroundImage:`url(${this.content.src})`}
    }
  },
};
</script>

