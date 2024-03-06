const app = Vue.createApp({
    data() {
        return {
            myName: 'Pawel',
            myAge: 30,
            imgLink: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" 
        };
    },
    methods: {
        myAgeInFiveYears() {
            return this.myAge + 5;
        },
        randomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');