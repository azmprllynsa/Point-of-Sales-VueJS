<template>
  <div class="columns is-gapless login-container">
    <Head/>
    <div class="column">
      <div class="login-form">
        <Auth title="Register"/>
        <form @submit='insertData' class="form">
          <div class="form-input">
            <label for="username">Username</label>
            <input type="username" id="username" placeholder="rebecca" v-model="username"
             required>
          </div>
          <div class="form-input">
            <label for="fullname">Fullname</label>
            <input type="fullname" id="fullname" placeholder="Rebecca Rizky Poetry"
            v-model='fullname' required>
          </div>
          <div class="form-input">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="blablabla@gmail.com" required>
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="*******************"
            v-model='password' required>
          </div>
          <div class="button-form">
            <button class="button is-black" type="submit">Sign Up</button>
            <router-link to='/login' class="button is-white">Login</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import {
//   required, minLength, email,
// } from 'vuelidate/lib/validators';
import Head from '../components/base/Head.vue';
import Auth from '../components/base/Auth.vue';

export default {
  name: 'Register',
  components: {
    Head,
    Auth,
  },
  data() {
    return {
      username: '',
      fullname: '',
      email: '',
      password: '',
      newData: '',
    };
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    insertData(e, data) {
      e.preventDefault();
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password,
        fullname: this.fullname,
      })
        // eslint-disable-next-line no-unused-vars
        .then((res) => {
          this.$router.push('/login');
        });
    },
    // validations: {
    //   username: {
    //     required,
    //     minLenght: minLength(4),
    //   },
    //   fullname: {
    //     required,
    //     minLenght: minLength(4),
    //   },
    //   email: {
    //     email,
    //     required,
    //     minLenght: minLength(7),
    //   },
    //   password: {
    //     required,
    //     minLenght: minLength(4),
    //   },
    // },
  },
};
</script>

<style scoped>
.form-input {
  border-radius: 5px;
  padding: 10px 20px;
  border: 1px solid #e0e0e0;
}

.form-input input {
  font-family: Airbnb Cereal App;
  border: none;
  display: block;
  font-size: 17px;
  outline: none;
  width: 100%;
  color: #424242;
}

.button {
  border: 1px solid #000;
  font-family: Airbnb Cereal App;
}

.button-form {
  margin-top: 20px;
}

.is-white{
  margin-left: 50px;
}

.is-black:hover{
  transition: 0.5s;
  border: 1px solid #000;
  color: #000;
  background: #ffffff;
}

.is-white:hover{
  transition: 0.5s;
  color: #fff;
  background: #000;
}

.login-form {
  margin-left: 15px;
  margin-right: 50px;
}

@media (max-width: 992px) {
  .login-form {
    transition: 0.5s;
    padding-left: 1em;
    padding-right: 1em;
    width: 100%;
    margin: 0px;
  }
}
</style>
