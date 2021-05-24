<template>
  <div class="hero-container">
    <img class="hero-logo" :src="require(`@/assets/diredeal-logo.png`)" />

    <!-- <div class="temp-container">
      <p>A strategy card game</p>
      <p>To be released in May, 2021</p>
    </div> -->

    <div class="download-container">
      <img class="app-icon" :src="require(`@/assets/app-icon.png`)" />
      <h2>Download Now!</h2>
      <p class="subtext">&#8212; Available on both PC and mobile &#8212;</p>
      <div class="downloads">
        <a
          class="download-link"
          href="https://github.com/mtomsick/dire-deal/releases/tag/0.6.1"
          target="_blank"
        >
          <button class="download-btn2">Windows/Android</button>
        </a>
        <a
          class="download-link"
          href="https://github.com/mtomsick/dire-deal/releases/tag/0.6"
          target="_blank"
        >
          <button class="download-btn2">Mac/iPhone</button>
        </a>
        <!-- <a href="url">
          <img
            class="download-badge"
            :src="require(`@/assets/ui/app-store-badge.png`)"
          />
        </a>
        <a href="url">
          <img
            class="download-badge"
            :src="require(`@/assets/ui/google-play-badge.png`)"
          />
        </a> -->
      </div>
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
export default {};
</script>

<style scoped>
p {
  /* font-weight: bold; */
  font-size: 24px;
  font-style: italic;
}

h2 {
  margin: 14px;
}

button {
  font-family: "Rise-of-Kingdom";
}

.hero-container {
  /* background: linear-gradient(rgb(17, 17, 17), rgb(54, 54, 54)); */
  /* background: url('../assets/hero-bg.jpg'); */
  /* background-size: cover; */
  text-align: center;
  /* padding-bottom: 128px; */
  height: 600px;
}

.hero-logo {
  width: 620px;
  max-width: 80vw;
  margin-top: 60px;
}

.app-icon {
  width: 128px;
  margin: 16px;
}
.subtext {
  font-style: italic;
  font-size: 18px;
}

.downloads {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.download-badge,
.download-btn {
  height: 60px;
  margin: 16px;
}
.download-btn {
  display: inline-block;
  padding: 0 14px;
  border: 2px solid gray;
  border-radius: 8px;
  text-transform: capitalize;
  font-weight: bold;
  background-color: black;
  color: whitesmoke;
  text-align: center;
  transition: all 0.2s;
}
.download-btn:hover {
  text-decoration: underline;
}

.download-btn2 {
  display: inline-block;
  padding: 14px 28px;
  margin: 16px;
  border: none;
  /* 2px solid black; */
  text-transform: uppercase;
  font-weight: bold;
  font-size: 26px;
  background-color: rgb(7 152 147);
  color: rgb(11 25 25);
  text-align: center;
  transition: all 0.2s;
}
.download-btn2:hover {
  color: rgb(250 189 53);
  background-color: rgb(11 25 25);
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
