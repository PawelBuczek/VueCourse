const app = Vue.createApp({
    data() {
        return {
            courseGoal: 'Master Vue',
            vueLink: 'https://vuejs.org/'
        };
    }
});

app.mount('#user-goal');