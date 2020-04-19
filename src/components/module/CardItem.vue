<template>
  <div class="item">
    <div class="card card-item" v-for="item in items" :key="item.id"
    @click="$emit('menu', item)">
      <div class="card-overlay"><i class="far fa-check-circle"></i></div>
      <div class="card-image">
        <img :src="item.image" :alt="item.image">
      </div>
      <div class="card-content">
        <div class="media-content">
          <p>{{ item.name }}</p>
          <p><strong>Rp. {{ item.price }}</strong></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  computed: {
    items() {
      return this.$store.state.products;
    },
  },
};
</script>

<style scoped lang="scss">
  .item{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .card-overlay{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.5);
    position: absolute;
    z-index: 2;
    color: #ffffff;
    font-size: 4em;
    text-align: center;
    padding: 30px 0;
    display: none;
  }
  .card-item{
    width: 200px;
    height: 225px;
    margin: 1.5em;
    border-radius: 6px;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
  }
  .card-image img{
    height: 170px;
    width: 200px;
  }
  .card-content{
    padding: 0;
    font-size: 1em;
    overflow: hidden;
  }
  // .media-content {
  //   margin-top: -5px;
  //   margin-left: -5px;
  // }
</style>
