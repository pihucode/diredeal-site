<template>
  <div class="gallery-container">
    <h2>Screenshots</h2>
    <div>
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="9000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
        v-for="image in images"
        :img-src="image"
        :key="image"
        ></b-carousel-slide>

      </b-carousel>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        images: [
          "https://i.imgur.com/0VhmQtA.jpg",
          "https://i.imgur.com/ZI7FuVT.jpg"
        ]
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* // Import Bootstrap an BootstrapVue CSS files (order is important) */
/* @import '../assets/css/bootstrap.css'; */
/* @import '~/bootstrap-vue/dist/bootstrap-vue.css'; */

h2 {
  font-weight: bold;
  padding: 24px 0;
}

</style>
