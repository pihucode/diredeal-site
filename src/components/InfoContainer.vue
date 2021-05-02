<template>
  <div class='panel-container'>
    <!-- <div class='bg-div'></div> -->

    <div class="info-container">
      <div v-tilt="{speed: 250, perspective: 900}" class='card-container'>
        <img :src="require(`@/assets/cards/card-impaled-bg.png`)" width="320"/>
        <div class='card-foreground'>
          <img :src="require(`@/assets/cards/card-impaled-fg.png`)" width="360"/>
        </div>
      </div>

      <div class='about-container'>
        <h2>About</h2>
        <p>
          Dire Deal is a roguelite card game set in a fantasy world filled with threatening monsters. As a bounty hunter, players will fight dangerous creatures, each with their own abilities. The game emphasizes planning and resource management, as in battle, a single misstep can have long-lasting consequences.
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
  font-weight: bold;
}

.info-container {
  display: flex;
  flex-direction: row;
  height: 420px;
  background: rgb(27, 27, 27);
  border: 2px solid whitesmoke;
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
