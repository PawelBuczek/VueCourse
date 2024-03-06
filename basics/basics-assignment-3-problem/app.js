const app = Vue.createApp({
    data() {
        return {
            myValue: 0,
        };
    },
    computed: {
        myResult() {
            console.log('recalculating myResult. myValue=' + this.myValue);
            if (this.myValue < 37) {
                return "not yet";
            }
            else if (this.myValue == 37) {
                return "OK";
            } else {
                return "too much";
            }
        }
    },
    watch: {
        myResult() {
            console.log('watcher for myResult. myResult=' + this.myResult + "  |  myValue=" + this.myValue);
            const that = this;
            setTimeout(function () {
                that.myValue = 0;
            }, 3000);
        }
    },
    methods: {
        add(num) {
            this.myValue = this.myValue + num;
        }
    }
});

app.mount('#assignment');
