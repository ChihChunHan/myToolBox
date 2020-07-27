export default {
  data() {
    return {
      timer: null,
      timeOut: 1000,
      sliderVM: [],
      }
  },
  mounted() {
    this.outHandler();
  },
  beforeDestroy() {
    this.inHandler();
  },
  methods: {
    inHandler() {
      clearTimeout(this.timer);
    },
    outHandler() {
      this.timerHandler();
    },
    timerHandler() {
      this.timer = setTimeout(() => {
        this.invoke();
        this.timerHandler();
      }, this.timeOut);
    },
    invoke() {
      this.sliderVM.forEach((element) => {
        element.autoRun();
      });
    },
    addVMList(that) {
      this.sliderVM.push(that);
    },
  },
}

