<template>
  <div class="footer">
    <img class='footer-logo' :src="require(`@/assets/diredeal-logo-fill.png`)" />
    <p>&copy; Copyright 2021</p>
    <p>Catana Games | All Rights Reserved</p>
  </div>
</template>

<script>
export default {
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Footer design inspired by: https://kanji.world/ */

p {
  margin: 12px 0;
}
.footer {
  padding: 14px 0;
  background: rgb(17, 17, 17);
  text-align: center;
}

.footer-logo {
  width: 200px;
  margin-top: 24px;
  margin-bottom: 8px;
}
</style>
