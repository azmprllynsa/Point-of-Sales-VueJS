<template>
<router-link to='/' class="logo">
  <img src="../../assets/img/fork.png" alt="">
</router-link>
</template>

<script>
export default {
  name: 'Logo',
};
</script>
<style scoped>
.logo {
    position: absolute;
    top: 12px;
    right: 15px;
}

.logo img {
  width: 80px;
}
</style>
