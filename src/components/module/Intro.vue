<template>
<div class="intro">
  <h1>{{title}}</h1>
  <h5>Welcome Back, Please {{title}}
    <br> to your account
  </h5>
</div>
</template>

<script>
export default {
  name: 'Intro',
  props: ['title'],
};
</script>
<style scoped>
.intro h1 {
  font-size: 64px;
  padding-top: 100px;
  font-family: Airbnb Cereal App Extrabold;
}

.intro h5 {
  font-size: 17px;
  margin-bottom: 50px;
}
</style>
