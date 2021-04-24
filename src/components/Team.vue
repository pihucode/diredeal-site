<template>
  <div class='team-section'>
    <h2>Catana Games</h2>

    <div class='avatars-grid'>
      <div class='avatar-container' v-for="member in members" :key="member.name">
        <div class='cropped'>
          <img :src='require(`@/assets/avatars/${member.avatar}.png`)'/>
        </div>
        <p>{{ member.name }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [
        {
          name: 'Lorem ipsum',
          avatar: 'pi',
        },
        {
          name: '22',
          avatar: 'pi',
        },
        {
          name: '33',
          avatar: 'pi',
        },
        {
          name: 'long name test nyaaaaaa',
          avatar: 'pi',
        },
      ]
    }
  }
};

</script>

<style scoped>

p {
  color: rgb(22, 21, 24);
  z-index: 2;
  text-align: center;
  width: 150px;
  margin: auto;
  padding: 8px 0;
}
.team-section {
  background: yellowgreen;
  width: 80%;
  margin: auto;
}

.avatars-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: whitesmoke;
}

.avatar-container {
  background: rgb(85, 167, 192);
  margin: 24px;
  border-radius: 32px;
  padding-bottom: 8px;
}

/* Cropped CSS source: https://www.educative.io/edpresso/how-to-crop-an-image-in-css */
.cropped {
  /* display: inline; */
  width: 150px;
  height: 150px;
  overflow: hidden;
  border: 6px solid white;
  border-radius: 12px;
}

.cropped img {
  margin: -80px 0px 0px -84px;
  width: 320px;
}
</style>
