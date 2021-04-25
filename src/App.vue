<template>
  <div id='app'>
    <Hero />
    <div class='main-container'>
      <!-- <Screenshots /> -->
      <InfoContainer />
      <Team />
    </div>
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero'
// import Screenshots from './components/Screenshots'
import InfoContainer from './components/InfoContainer'
import Team from './components/Team'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Hero,
    // Screenshots,
    InfoContainer,
    Team,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

body {
  background: rgb(54, 54, 54) !important;
}

::selection {
  color: white;
  background-color: rgb(22, 118, 134);
}

h2 {
  font-size: 42px;
  font-weight: bold;
  text-align: center;
}

p {
  font-size: 18px;
}

#app {
  font-family: 'Montserrat', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: whitesmoke;
}

.main-container {
  margin: auto !important;
  width: 80vw;
  padding: 0 32px;
  background: rgb(27, 27, 27);
  margin-top: 60px;
}
</style>
