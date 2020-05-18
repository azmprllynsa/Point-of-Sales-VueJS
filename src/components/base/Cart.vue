<template>
  <div class="column is-gapless cart">
    <div class="navbar column is-gapless">
      <div class="column is-6 cart-title">
        <p>Cart</p>
      </div>
      <div class="counter">
        <p>{{ orderItem.length }}</p>
      </div>
    </div>
    <div class="cart-content">
      <div class="column empty-cart" v-if="orderItem.length == 0">
        <img src="../../assets/img/food-and-restaurant.png" style= 'width:300px' alt="">
        <h5>Your cart is empty</h5>
        <p>Please add some items from the menu</p>
      </div>
      <div class="column is-ordered" v-else>
        <div class="main-list">
          <div class="column card-order" v-for="(order) in orderItem" :key="order.data.id">
            <div class="card-image">
              <figure class="image-order is-2by2">
                <img :src="order.data.image" :alt="order.data.image">
              </figure>
            </div>
            <div class="desc-order">
              <div class="name-order">
                <b>{{order.data.name}}</b>
              </div>
              <div class="qty-order">
                <ul>
                  <li @click="reduceQty(order)">-</li>
                  <li>{{ order.qty }}</li>
                  <li @click="addQty(order)">+</li>
                </ul>
                <p>Rp. {{ order.data.price * order.qty}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="column checkout">
          <div class="total-price">
            <p>Total Price</p>
            <p>Rp. {{ total }}*</p>
          </div>
          <div class="ppn">
            <p>*Belum termasuk PPN</p>
          </div>
          <button class="button is-fullwidth button-checkout bg-blue" @click='receipt'>
            Checkout</button>
          <button class="button is-fullwidth button-cancel bg-pink"  @click="$emit('cancelOrder')">
            Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import OrderItem from '../module/OrderItem.vue';
// import axios from 'axios';

export default {
  name: 'Cart',
  components: {
    // OrderItem,
  },
  data() {
    return {
      qty: 1,
      count: 0,
      orders: [],
      total: 0,
    };
  },

  // Photo by Jay Wennington on Unsplash
  methods: {
    addQty(data) { // eslint-disable-line
      this.$store.dispatch('addQty', data);
      // console.log([data]);
    },
    reduceQty(data) {
      this.$store.dispatch('reduceQty', data);
    },
    totalPrice() {
      this.orders = this.orderItem;
      if (this.orders.length !== 0) {
        const total = [];
        for (let i = 0; i < this.orders.length; i += 1) {
          total.push(this.orders[i].data.price * this.orders[i].qty);
        }
        this.total = total.reduce((a, b) => a + b);
      }
    },
    receipt() {
      // const order = 'order';
      // axios
      //   .post(this.$store.state.url + order, {
      //     userId: this.qty,
      //     total: this.total,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //   }).catch((err) => {
      //     console.log(err);
      //   });
      // for (let i = 0; i < this.orderItem.length; i += 1) {
      //   setTimeout((detail = 'orderDetail') => {
      //     axios
      //       .post(this.$store.state.url + detail, {
      //         productId: this.orders[i].data.id,
      //         qty: this.orders[i].qty,
      //         price: this.orders[i].data.price,
      //       })
      //       .then((res) => {
      //         console.log(res);
      //       });
      //   }, 1000);
      // }
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
  },
  updated() {
    this.totalPrice();
  },
  computed: {
    orderItem() {
      return this.$store.state.selected;
    },
  },
};
</script>

<style scoped lang='scss'>
.cart {
  margin:0;
  padding: 0;
  margin-top: -5px !important ;
}

.column {
  margin:0;
  padding: 0;
}
.navbar{
    top: 0px;
    align-items: center;
    box-shadow: 4px 1px 5px rgba(0,0,0,0.2);
    display: flex;
    padding: 11.5px;
}

.column p {
  font-size: 1.2em;
  padding: 2px;
  /* border: 1px solid salmon; */
}

.cart-title {
  text-align: right;
}

.image-order img {
  background-image: cover;
  height: 100px;
}

.counter {
    width: 25px;
    height: 25px;
    border-radius: 15px;
    background-color: #57CAD5;
    color: white;
    margin-left: 4px;
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    line-height: 20px;
    margin-top: 3px;
}
.empty-cart {
  text-align: center;
  display: block;
}
.empty-cart img{
  margin-top: 100px;
}

.empty-cart h5{
  font-size: 30px;
  font-family: Airbnb Cereal App Bold;
  color: #000;
}

.empty-cart p{
  font-size: 20px;
  font-family: Airbnb Cereal App;
  color: #CECECE;
}

.is-ordered {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 100%;
    height: 760px;
}

.name-order{
  font-size: 1.1em;
  margin-left: 10px;
}

.main-list {
  width: 100%;
  height: 420px;
  overflow-y: scroll;
}

.card-order{
  display: flex;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  margin: 10px;
}

.card-image {
  height: 100px;
  width: 130px;
  overflow: hidden;
}

.desc-order{
  width: 100%;
}

.qty-order{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.qty-order p{
    font-size: 17px;
    font-family: Airbnb Cereal App Bold;
    margin-top: 12px;
}

.qty-order ul{
    display: flex;
    margin-top: 20px;
    margin-left: 10px;
    align-items: center;
}

.qty-order ul li{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border: 1px solid #82DE3A;
    font-weight: bold;
    color: #82DE3A;
    cursor: pointer;
  }

.minus, .plus {
  background-color: rgba(130, 222, 58, 0.2);
}

.footer {
  display: fixed;
  bottom: 0px !important;
}

.checkout{
    display: flex;
    flex-direction: column;
    width: 100%;
    bottom: 20px;
    padding: 0;
}
.total-price {
  display: flex;
  justify-content: space-between;
}

.total-price p {
  font-size: 17px;
  font-family: Airbnb Cereal App Bold;
}

.ppn p {
  margin-top: 5px;
  font-size: 15px;
}
.button-checkout {
  margin-top: 15px;
}
.button-cancel {
  margin-top: 15px;
}

/* ---------------css scroll------------------------ */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
  // background: #57CAD5;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #57CAD5;
  // background: #F24F8A;
}
/* ------------css scroll end----------- */
</style>
