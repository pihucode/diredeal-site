<template>
  <div class='panel-container'>
    <!-- <div class='bg-div'></div> -->

    <div class="info-container">
      <div v-tilt="{speed: 200, perspective: 2021}" class='card-container'>
        <img :src="require(`@/assets/cards/gambit-card.png`)" width="320"/>
        <div class='card-foreground'>
          <img :src="require(`@/assets/cards/gambit-item.png`)" width="360"/>
        </div>
      </div>

      <div class='about-container'>
        <h2>About</h2>
        <p>
          Monsters and bandits threaten a fantasy town, and it falls on you, a bounty hunter, to protect it (for suitable pay, of course) in this single-player card game. 
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoContainer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .panel-container {
  background: tomato;
} */

h2 {
  margin-bottom: 36px;
}

.info-container {
  display: flex;
  flex-direction: row;
  height: 420px;
  background: rgb(7, 42, 42);
  border: 2px solid rgb(182, 105, 4);
  transform: skewX(-0.24rad);
}

.card-container {
  /* background: rgba(64, 245, 47, 0.404); */
  flex: 2;
  justify-content: right;
  transform-style: preserve-3d;
  z-index: 4;
}

.card-container img {
  position: relative;
  top: -32px;
  left: -20px;
  transform: skewX(10deg);
}

.card-foreground {
  position: relative;
  top: -500px;
  left: -50px;
  /* height: 150px;
  width: 150px; */
  /* background: rebeccapurple; */
  transform: skewX(10deg);
  transform: translateZ(50px);
  z-index: 10;
}

.about-container {
  flex: 3;
  margin: 48px 48px 0 0;
  /* background: rgba(84, 47, 245, 0.404); */
  transform: skewX(0.24rad);
  z-index: 4;
}

.bg-div {
  position: absolute;
  bottom: 00px;
  left: 20px;
  width: 80vw;
  height: 420px;
  background: rgba(11, 192, 192, 0.2);
  transform: skewX(-0.24rad);
}
</style>
