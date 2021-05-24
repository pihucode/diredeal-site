<template>
  <div id="app" class="wrapper">
    <section class="section parallax main-bg">
      <Hero />
    </section>

    <div class="main-container">
      <div class="resposive-display">
        <InfoContainer />
        <Screenshots />
      </div>
      <Features />
      <Team />
    </div>

    <Footer />
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import Hero from "./components/Hero";
import InfoContainer from "./components/InfoContainer";
import Screenshots from "./components/Screenshots";
import Features from "./components/Features.vue";
import Team from "./components/Team";
import Footer from "./components/Footer";
import TestA from "./components/TestA";

export default {
  name: "App",
  components: {
    Hero,
    InfoContainer,
    Screenshots,
    Features,
    Team,
    Footer,
    TestA,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");

@font-face {
  font-family: "Rise-of-Kingdom";
  src: local("Rise-of-Kingdom"),
    url(./assets/fonts/Rise-of-Kingdom.ttf) format("truetype");
}

body {
  background: rgb(44, 49, 56) !important;
}

::selection {
  color: white;
  background-color: rgb(22, 118, 134);
}

h2 {
  font-size: 42px !important;
  text-align: center;
}

h1,
h2,
h3 {
  font-family: "Rise-of-Kingdom";
}

p {
  font-size: 22px;
  font-family: "Rise-of-Kingdom";
}

#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

.main-container {
  margin: auto !important;
  width: 80vw;
  padding: 0 32px;
  background: rgb(14, 25, 30);
  margin-top: 60px;
}

/* PARALLAX BG */
/* Source: https://www.digitalocean.com/community/tutorials/css-pure-css-parallax */
.wrapper {
  height: 100vh;
  min-height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;
  /* background: rgb(49, 193, 212); */
}

.section {
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.parallax::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: translateZ(-1px) scale(1.5);
  background-size: 100%;
  z-index: -1;
}

.static {
  background: rgb(155, 212, 49);
}

.main-bg::after {
  background: url("./assets/hero-bg.jpg") no-repeat center / cover;
}

.resposive-display {
  display: block;
}

@media only screen and (max-width: 900px) {
  .resposive-display {
    display: none;
  }

  .main-container {
    width: 100vw;
    padding: 0;
  }
}
</style>
