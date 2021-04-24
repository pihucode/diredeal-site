<template>
  <div class="hero-container">
    <h1>Dire Deal</h1>
    <div class='video-container'>
      <b-embed
        type="iframe"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        allowfullscreen
      ></b-embed>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.hero-container {
  background: linear-gradient(rgb(17, 17, 17), rgb(54, 54, 54));
  background: url('../assets/hero-bg.jpg');
  background-size: cover;
  text-align: center;
  padding-bottom: 128px;
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
