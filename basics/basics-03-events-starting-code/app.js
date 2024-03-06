const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      console.log('recalculating fullname');
      return this.name === '' ? '' : this.name + ' ' + 'Smith';
    }
  },
  // is useful for sending http requests when some condition is met
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    }
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted!');
    }
  }
});

app.mount('#events'); 
