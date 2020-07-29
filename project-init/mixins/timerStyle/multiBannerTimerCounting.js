export default {
  data() {
    return {
      counter: null,
      count: 0,
      timeOut: 1000,
      intervalTime: 50,
    };
  },
  mounted() {
    this.runCounting();
  },
  beforeDestroy() {
    this.clearCounting();
  },
  computed: {
    countingProcess() {
      return Math.floor((this.intervalTime / this.timeOut) * 100);
    },
  },
  methods: {
    autoRun() {
      if (this.hover === false) {
        this.changeIndex(this.nowIndex + 1);
        this.count = 0;
      }
    },
    runCounting() {
      this.counter = setInterval(() => {
        this.count += this.countingProcess;
        if (this.count >= 100) {
          this.autoRun();
        }
      }, this.intervalTime);
    },
    clearCounting() {
      clearInterval(this.counter);
    },
  },
};
