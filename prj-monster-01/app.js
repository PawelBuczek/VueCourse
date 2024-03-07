function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  const app = Vue.createApp({
    data() {
      return {
        playerHealth: 100,
        monsterHealth: 100,
      };
    }
  });
  
  app.mount('#game');
  