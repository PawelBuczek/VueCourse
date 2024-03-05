const app = Vue.createApp({
    data() {
        return {
            isDivClicked: false,
        };
    },
    methods: {
        toggleDiv() {
            this.isDivClicked = !this.isDivClicked;
        },
    }
});

app.mount('#styling');
