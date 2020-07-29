export default {
  methods: {
    autoRun() {
      if (this.hover === false) {
        this.changeIndex(this.nowIndex + 1);
      }
    },
  },
  created() {
    this.$emit("getThat", this);
    
  },
}