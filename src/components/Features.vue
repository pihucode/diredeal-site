<template>
  <div>
    <h2>Features</h2>
    <div class="features">
      <div class="descr">
        <img
          class="icon"
          :src="require(`@/assets/images/enchanting-art.png`)"
        />
        <h3 class="title">Enchanting Art</h3>
        <p>
          Inspired by fantasy monsters and eldritch palettes, every enemy is a
          hand-crafted art piece living in a solemn yet thrilling environment.
        </p>
      </div>
      <div class="descr">
        <img class="icon" :src="require(`@/assets/images/easy-to-learn.png`)" />
        <h3 class="title">Easy to learn</h3>
        <p>
          With a simple card UI and straightforward gameplay, even new hunters
          can become veteran swordsmen in minutes.
        </p>
      </div>
      <div class="descr">
        <img
          class="icon"
          :src="require(`@/assets/images/reactive-sound.png`)"
        />
        <h3 class="title">Reactive Sounds</h3>
        <p>
          As you hunt your targets, the sounds of your actions react to the pace
          of the fight, reflecting how close you are to slaying your target as
          well as the sounds of a real sword fight (if you fought with cards in
          sword fights).
        </p>
      </div>
      <div class="descr">
        <img
          class="icon"
          :src="require(`@/assets/images/unlockable-abilities.png`)"
        />
        <h3 class="title">Unlockable Abilities</h3>
        <p>
          Completing hunts can unlock powerful abilities that can be used to
          progress even farther on subsequent hunts, and allow you to customize
          your strategy and experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  margin: 32px;
}

p {
  margin: 0;
  font-size: 16px;
}

.features {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.descr {
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 16px 32px;
  margin: 16px;
  background: rgba(6, 134, 151, 0.253);
}

.icon {
  width: 100%;
}

.title {
  text-transform: uppercase;
  font-weight: normal;
  padding-top: 26px;
  padding-bottom: 8px;
  text-align: center;
}
</style>
