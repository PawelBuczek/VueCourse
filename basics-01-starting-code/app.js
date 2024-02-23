const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Master Vue',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Finish Course';
            } else {
                return 'Learn Vue';
            }
        }
    }
});

app.mount('#user-goal');