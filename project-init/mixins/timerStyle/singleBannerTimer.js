export default {
  data() {
    return {
      timer:null,
      timeOut:3000,
    }
  },
  mounted() {
    this.runHandler();
  },
  beforeDestroy() {
    this.stopHandler();
  },
  methods: {
    stopHandler() {
      clearTimeout(this.timer);
    },
    runHandler() {
      this.timerHandler();
    },
    timerHandler() {
      this.timer = setTimeout(() => {
        this.autoRun()
        this.timerHandler();
      }, this.timeOut);
    },
    autoRun() {
      if (this.hover === false) {
        this.changeIndex(this.nowIndex + 1);
      }
    },
  },
}