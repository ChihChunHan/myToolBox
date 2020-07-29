export default {
  data() {
    return {
      throttleRunning: false,
      throttleTimer: null,
    }
  },
  methods: {
    throttle(fn,timeOut) {
      if (this.throttleRunning === true) return false 
      
      this.throttleRunning = true;
      clearTimeout(this.throttleTimer)
      this.throttleTimer = setTimeout(() => {
        this.throttleRunning = false;
      }, timeOut);
      
      fn()
    },
  },
}