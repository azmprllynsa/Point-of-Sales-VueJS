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
        state.selected.push(data);
      }
    },
    addQty(state, id, qty) {
      const items = state.selected.find((item) => item.id === id);
      if (items) {
        items.price *= qty;
      }
    },
  },
  getters: {
    addQty(context, id, qty) {
      context.commit('addQty', id, qty);
    },
  },
  actions: {
    addQty(context, id, qty) {
      // const items = context.state.selected.find((item) => item.id === id);
      // if(items) {
      context.commit('addQty', id, qty);
      // } else{
      //   console.log('gagal');
      // }
    },
    addOrder(context, data) {
      context.commit('add', data);
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
