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
