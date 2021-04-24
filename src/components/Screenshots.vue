<template>
  <div class="gallery-container">
    <h2>Screenshots</h2>
    <div>
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>
        <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      </b-carousel>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        slide: 0,
        sliding: null
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

</style>
