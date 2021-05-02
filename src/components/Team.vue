<template>
  <div class='team-section'>
    <!-- <h2>Catana Games</h2> -->
    <img class='team-logo' :src="require(`@/assets/team-logo.png`)" />

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
          name: 'Annie Deng',
          avatar: 'annie',
        },
        {
          name: 'Genna Haddad',
          avatar: 'genna',
        },
        {
          name: 'Iain Pile',
          avatar: 'iain',
        },
        {
          name: 'Leo Decter',
          avatar: 'leo',
        },
        {
          name: 'Max Tomsick',
          avatar: 'max',
        },
        {
          name: 'Pinxuan Huang',
          avatar: 'pi',
        },
        {
          name: 'Rose Zhou',
          avatar: 'rose',
        },
        {
          name: 'Yein Lillian Lee',
          avatar: 'lillian',
        },
      ]
    }
  }
};

</script>

<style scoped>

p {
  font-weight: bold;
  color: rgb(22, 21, 24);
  width: 150px;
  margin: auto;
  padding: 8px 0;
  z-index: 2;
}

.team-section {
  /* background: yellowgreen; */
  max-width: 80%;
  margin: auto;
  margin-top: 64px;
  text-align: center;
}

.team-logo {
  width: 360px;
  margin-bottom: 24px;
}

.avatars-grid {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  /* background: whitesmoke; */
}

.avatar-container {
  /* background: rgb(85, 167, 192); */
  background: white;
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
