<template>
  <div class="column menu-panel">
    <router-link to="/"><div class="all-menu"></div></router-link>
    <router-link to="/history"><div class="income-history"></div></router-link>
    <div class="add-menu" @click="$emit('add')">
      <i class="fas fa-plus"></i>
    </div>
    <router-link to="/auth/login">
      <div class="sign-out">
        <i class="fas fa-sign-out-alt"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style scoped lang="scss">
  .menu-panel{
    width: 60px;
    height: 100vh;
    position: fixed;
    box-shadow: 0px 4px 10px rgba($color: #000000, $alpha: 0.25);
  }
  .menu-order{
    display: flex;
  }
  .all-menu{
    background-image: url('../../assets/img/fork.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 35px;
    height: 35px;
    margin: 30px auto;
  }
  .income-history{
    background-image: url('../../assets/img/clipboard.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    width: 40px;
    height: 40px;
    margin: 30px auto;
  }
  .add-menu, .sign-out{
    text-align: center;
    font-size: 30px;
    margin: 20px auto;
    color: #4a4a4a;
    cursor: pointer;
  }

  .add-menu {
    color: green;
  }
</style>
