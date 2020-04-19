import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: null,
    selected: [],
  },
  mutations: {
    product(state, data) {
      state.products = data;
    },
    cancel(state) {
      state.selected = [];
    },
    add(state, data) {
      const items = state.selected.find((item) => item.id === data.id);
      if (!items) {
        const send = {
          id: data.id,
          name: data.name,
          qty: 0,
          price: data.price,
          image: data.image,
        };
        // const send = [...data];
        state.selected.push(send);
      }
    },
    addQty(state, data) {
      // const data = state.selected;
      const items = state.products.find((item) => item.id === data.id);
      // if (items) {
      console.log('product');
      console.log(items);
      // console.log(state.products);
      state.selected[data.index].qty = data.qty;
      state.selected[data.index].price = items.price * data.qty;
      // console.log(data);

      // }
    },
  },
  getters: {
    // addQty(context, id, qty) {
    //   context.commit('addQty', id, qty);
    // },
  },
  actions: {
    addQty(context, data) {
      // const items = context.state.selected.find((item) => item.id === id);
      // if(items) {
      context.commit('addQty', data);
      // console.log(data);
      // } else{
      //   console.log('gagal');
      // }
    },
    addOrder(context, data) {
      context.commit('add', data);
      // console.log(data);
    },
    cancelOrder(context) {
      context.commit('cancel');
    },
    getAllItems(context) {
      axios
        .get('http://localhost:8000/api/v1/product')
        .then((res) => {
          context.commit('product', res.data.data);
          // console.log(res.data.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
  },
  modules: {
  },
});
