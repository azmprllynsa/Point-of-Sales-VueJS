import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
// axios.defaults.headers.common.authorization = 'bisa-dong-please';
export default new Vuex.Store({
  state: {
    url: 'http://localhost:8000/api/v1/',
    products: null,
    selected: [],
    emailUser: localStorage.getItem('email') || null,
    email: null,
    orders: null,
  },
  getters: {
    getEmail(state) {
      return state.email != null;
    },
  },
  mutations: {
    product(state, data) {
      state.products = data;
    },
    order(state, data) {
      state.orders = data;
    },
    cancel(state) {
      state.selected = [];
    },
    emailGet(state, data) {
      state.products = data;
    },
    add(state, data) {
      const items = state.selected.find((item) => item.data.id === data.data.id);
      // console.log(this.item);
      if (!items) {
        state.selected.push(data);
      }
    },
    addQty(state, data) { // eslint-disable-line
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty += 1;
      }
    },
    reduceQty(state, data) { // eslint-disable-line
      const items = state.selected.find((item) => item.data.id === data.data.id);
      if (items) {
        items.qty -= 1;
      }
    },
  },
  actions: {
    addQty(context, data) {
      context.commit('addQty', data);
    },
    reduceQty(context, data) {
      context.commit('reduceQty', data);
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
    handleLogin(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/user/login', data)
          .then((res) => {
            localStorage.setItem('email', res.data.data.email);
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/v1/user/register', data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => reject(err));
      });
    },
    getAllOrders(context) {
      axios
        .get('http://localhost:8000/api/v1/order')
        .then((res) => {
          context.commit('order', res.data.data);
        })
        .catch(() => {
          // console.log(error);
        });
    },
  },

  modules: {
  },

});
