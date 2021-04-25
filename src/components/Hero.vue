<template>
  <div class="hero-container">
    <img class='hero-logo' :src="require(`@/assets/diredeal-logo.png`)" />

  <div class="temp-container">
    <p>A strategy card game</p>
    <p>To be released in May, 2021</p>
  </div>

    <!-- <div class='video-container'>
      <b-embed
        type="iframe"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowfullscreen
      ></b-embed>
    </div> -->

  </div>
</template>

<script>
export default {
};
</script>

<style scoped>

p {
  /* font-weight: bold; */
  font-size: 24px;
  font-style: italic;
}

.hero-container {
  background: linear-gradient(rgb(17, 17, 17), rgb(54, 54, 54));
  background: url('../assets/hero-bg.jpg');
  background-size: cover;
  text-align: center;
  /* padding-bottom: 128px; */
  height: 600px;
}

.hero-logo {
  width: 620px;
  max-width: 80vw;
  margin-top: 120px;
}

.temp-container {
  margin: auto;
  margin-top: 60px;
  padding: 16px 0;
  border-top: 1px solid rgba(245, 245, 245, 0.6);
  border-bottom: 1px solid rgba(245, 245, 245, 0.6);
  width: 600px;
  max-width: 80%;
}

/* Source: https://stackoverflow.com/questions/35814653/automatic-height-when-embedding-a-youtube-video/54924505 */
.video-container {
  display: inline-block;
  position: relative;
  width: 800px;
  height: 420px;
  margin: auto;
  background: whitesmoke;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
