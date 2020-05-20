<template>
  <div class="home">
    <Navbar2 title="History"/>
    <div class="columns is-gapless">
      <Sidebar />
      <div class="column menu-lists">
        <div class="display-menu">
          <div class="card-info">
            <div class="card card-history bg-pink">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    Today's Income
                  </div>
                  <div class="today-income">
                    Rp. {{ incomes }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-history bg-blue">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    This Month's Income
                  </div>
                  <div class="today-income">
                    Rp. {{ incomes }}
                  </div>
                </div>
              </div>
            </div>
            <div class="card card-history bg-purple">
              <div class="card-content">
                <div class="content">
                  <div class="today-title">
                    This Year's Income
                  </div>
                  <div class="today-income">
                    Rp. {{ incomes }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-chart">
            <div class="card charts">
              <div class="card-content">
                <div class="card-title">
                  Revenue
                </div>
                <div class="content">
                  <area-chart :data="chartData"></area-chart>
                </div>
              </div>
            </div>
          </div>
          <div class="card-recent-order">
            <div class="card recent-order">
              <div class="card-content">
                <div class="card-title">
                  Recent Order
                </div>
                <div class="content table-container">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>INVOICES</th>
                        <th>CASHIER</th>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="order in orders" :key="order.id">
                        <td>{{ order.invoice }}</td>
                        <td>{{ order.cashier.name }}</td>
                        <td>{{ order.createdAt.slice(0, 10) }}</td>
                        <td>Rp. {{ order.net_ammount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/base/Sidebar.vue';
import Navbar2 from '../components/base/NavbarHistory.vue';

export default {
  name: 'Home',
  components: {
    Sidebar,
    Navbar2,
  },
  data() {
    return {
      chartData: {
        '2020-05-7': 3,
        '2020-05-8': 4,
        '2020-05-9': 2,
        '2020-05-10': 10,
        '2020-05-11': 8,
        '2020-05-12': 11,
        '2020-05-13': 9,
      },
      incomes: null,
      totalOrders: 0,
      revenue: null,
    };
  },
  methods: {
    receipt() {
      const receipt = document.querySelector('.modal-receipt');
      receipt.classList.toggle('is-active');
    },
    totalOrder() {
      this.totalOrders = this.orders.length;
    },
    income() {
      const income = [];
      for (let i = 0; i < this.orders.length; i += 1) {
        income.push(this.orders[i].net_ammount);
      }
      this.incomes = income.reduce((a, b) => a + b);
    },
    revenues() {
      const revenue = [];
      for (let i = 0; i < this.orders.length; i += 1) {
        revenue.push(this.orders[0].net_ammount);
      }
      this.revenue = revenue;
    },
  },
  updated() {
    this.totalOrder();
    this.income();
    this.revenues();
  },
  mounted() {
    this.$store.dispatch('getAllOrders');
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    },
  },
};
</script>

<style lang="scss" scoped>
  .show{
    transition: 1s;
    display: block !important;
  }
  .columns.is-gapless:not(:last-child) {
    margin-bottom: 0;
  }
  .display-menu{
    padding: 10px 16px 16px 76px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    min-height: 100vh;
  }
  .modal-item-button{
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
  }
  .button-item{
    width: 85px;
  }
  .field-label label{
    text-align: left;
  }
  .modal-item-header{
    font-size: 1.5em;
    margin-bottom: 30px;
  }
  .card-info{
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .card-history{
    margin: 0 10px;
    border-radius: 6px;
    width: 33%;
    height: 180px;
  }
  .card-info .card-content{
    color: #363636;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .card-info .card-content .today-income{
    font-size: 1.5em;
  }
  .card-chart, .card-recent-order{
    width: 100%;
    padding: 10px;
    margin-top: 1em;
  }
  .charts, .recent-order{
    border-radius: 6px;
  }
  .card-title{
    font-size: 1.2em;
    margin-bottom: 30px;
  }
  .recent-order{
    margin-bottom: 2em;
  }
  .bg-blue{
    background-image: linear-gradient(285.38deg, #29DFFF 30.05%, rgba(241, 201, 236, 0) 133.19%);
  }
  .bg-purple{
    background-image: linear-gradient(285.38deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
  }
  .bg-pink{
    background-image: linear-gradient(285.38deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
  }
  @media screen and (max-width: 768px){
    .card-info{
      flex-direction: column;
      margin: 0 auto;
    }
    .card-history{
      margin-top: 10px;
      width: 95%;
    }
  }
</style>
