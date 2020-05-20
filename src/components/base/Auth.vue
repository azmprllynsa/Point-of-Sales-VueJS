<template>
  <div class="auth">
    <Logo/>
    <Intro :title='title'/>
    <Footer/>
  </div>

</template>

<script>

import Logo from '../module/Logo.vue';
import Intro from '../module/Intro.vue';
import Footer from '../module/Footer.vue';

export default {
  name: 'Auth',
  components: {
    Logo,
    Intro,
    Footer,
  },
  props: ['title'],
};
</script>
<style scoped>

</style>
