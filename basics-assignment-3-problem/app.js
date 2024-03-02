const app = Vue.createApp({
    data() {
        return {
            myValue: 0,
        };
    },
    computed: {
        myResult() {
            console.log('recalculating myResult');
            if (myValue < 37) {
                return "not yet";
            }
            else if (myValue == 37) {
                return "";
            } else {
                return "too much"
            }
        }
    },
    watch: {
        counter(myResult) {
            if (myValue >= 37) {
                const that = this;
                setTimeout(function () {
                    that.myResult = '';
                }, 5000);
            }
        }
    },
    methods: {
        add(num) {
            this.myValue = this.myValue + num;
        }
    }
});

app.mount('#assignment');
