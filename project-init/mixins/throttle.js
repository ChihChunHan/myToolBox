export default {
  data() {
    return {
      throttleTimer: null,
    }
  },
  methods: {
    throttle(fn,timeOut) {
      
      if (this.throttleTimer !== null ) return false 

      this.throttleTimer = setTimeout(() => {
        clearTimeout(this.throttleTimer)
        this.throttleTimer = null
      }, timeOut);
      
      fn()

    },
  },
}