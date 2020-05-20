<template>
  <div class=" navbar columns is-gapless">
    <div class="column panels">
      <i class="fas fa-bars"></i>
    </div>
    <div class="column lists">
      History
    </div>
    <div class="column search">
      <i></i>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style lang="scss" scoped>
.columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
}
.navbar{
    top: 0px;
    position: sticky;
    align-items: center;
    box-shadow: 4px 1px 5px rgba(0,0,0,0.2);
    display: flex;
}
.panels{
    font-size: 1.5em;
    margin-left: 20px !important;
    text-align: left;
    // border: 1px solid blue;
    margin-left: 10px;
  }

.lists {
  font-size: 1.5em;
  text-align: center;
  color: #000;
  font-weight: 600;
  margin: 10px !important;
}
.search{
    font-size: 1.5em;
    text-align: right;
    margin-right: 20px !important;
}
</style>
