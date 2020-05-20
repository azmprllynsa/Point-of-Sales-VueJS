<template>
  <footer class="tnc">
    <span>By signing up, you agree to Book’s</span>
    <br>
    <router-link to='/'>Terms and Conditions</router-link> <span>&</span>
    <router-link to='/'>
      Privacy Policy
      </router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.tnc {
    font-size: 17px;
    bottom: 0;
    line-height: 22px;
    color: #D0CCCC;
    position: absolute;
}

.tnc a {
    color: #000;
}

@media (min-width: 992px) {
  .tnc {
    margin-top: -20px !important;
  }
}
</style>
