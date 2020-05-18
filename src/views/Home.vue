<template>
<div class="columns is-gapless home">
  <div class="column is-gapless is-8 left-side">
    <Navbar class="navbar"/>
    <Sidebar @add="addItem"/>
    <div class="menu-lists">
      <Card @menu="menu"/>
      <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <div class="pagination-list">
          <button class="pagination-previous bg-blue" @click="previous()">Previous</button>
          <button class="pagination-next bg-blue" @click="next()">Next page</button>
        </div>
      </nav>
    </div>
  </div>
  <div class="column is-gapless is-4 right-side">
    <Cart @cancelOrder="cancelOrder"/>
  </div>
  <AddItem/>
  <Receipt/>
</div>
</template>

<script>
import Navbar from '@/components/base/Navbar.vue';
import Cart from '@/components/base/Cart.vue';
import Sidebar from '@/components/base/Sidebar.vue';
import AddItem from '@/components/module/AddItem.vue';
import Card from '@/components/module/CardItem.vue';
import Receipt from '@/components/module/Receipt.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
    Cart,
    Sidebar,
    AddItem,
    Card,
    Receipt,
  },
  data() {
    return {
      url: 'http://localhost:8000/api/v1/product/?',
    };
  },
  methods: {
    addItem() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    menu(data) {
      return this.$store.dispatch('addOrder', { data, qty: 1 });
    },
    cancelOrder() {
      this.$store.dispatch('cancelOrder');
    },
  },
  mounted() {
    this.$store.dispatch('getAllItems');
    // console.log(this.orderItem);
  },
};
</script>
<style scoped>
.home {
  margin:0px !important;
  padding: 0;
}
.left-side {
  margin:0;
  padding: 0;
}

.menu-lists {
  margin-left: 60px !important;
  background: rgba(190, 195, 202, 0.3);
}
.right-side {
  margin-top: 6px !important;
  position: fixed;
  right: 0 !important;
  margin:0;
  padding: 0;
}

.pagination-list {
  margin-bottom: 20px;
}
</style>
