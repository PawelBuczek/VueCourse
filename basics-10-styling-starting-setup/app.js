const app = Vue.createApp({
    data() {
        return {
            isDivClicked: false,
        };
    },
    methods: {
        switch() {
            this.isDivClicked = !this.isDivClicked;
        },
    }
});

app.mount('#styling');
