export default {
  data() {
    return {
      bnList:''
    };
  },
  async mounted() {
    let res = await axios.get("http://localhost:3000/bannerContent");
    this.bnList = res.data.data;
  },
}