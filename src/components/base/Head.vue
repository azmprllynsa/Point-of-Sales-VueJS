<template>
  <div class="column is-gapless is-three-fifths pict-container">
    <h1>Welcome to <br> Mooifood Restaurant </h1>
    <p>Restaurant</p>
  </div>
</template>

<script>
export default {
  name: 'Head',
};
</script>

<style scoped>
.pict-container{
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.3),
     rgba(0, 0, 0, 0.3)), url("../../assets/img/jay-wennington-N_Y88TWmGwA-unsplash.jpg");
  background-size: cover;
  min-height: 100vh;
  height: 100vh;
  background-position: center center;
}

.pict-container h1{
    position: absolute;
    width: 808px;
    height: 318px;
    left: 56px;
    top: 88px;
    font-size: 64px;
    line-height: 83px;
    color: #F9F9F9;
    font-family: Airbnb Cereal App Bold;
    /* font-weight: bold; */
}

.pict-container p{
    position: absolute;
    width: 378px;
    height: 30px;
    left: 29px;
    top: 977px;
    font-family: Brown Regular;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    color: #F9F9F9;
}

.custom-navbar{
    max-width: 100%;
    background-color: #fff;
    align-items: center;
    box-shadow: 3px 2px 20px rgba(0, 0, 0, 0.2);
    margin: 0;
    padding: 5px;
    height: 60px;
}
.button {
  font-family: Airbnb Cereal App;
  font-size: 17px;
}

.button-form {
  margin-left: 30px;
}

.is-white{
  margin-left: 10px;
  padding: 10px;
  margin-right: 20px;
}

.is-black {
  padding: 15px;
}

.is-white:hover{
  transition: 0.5s;
  color: #fff;
  background: #000;
}

 .custom-navbar .toggle-menu{
    margin: 0 30px;
  }
   .toggle-menu{
    cursor: pointer;
  }
  .column{
    display: flex;
    flex-direction: row;
  }
  .sort-book{
    display: flex;
    justify-content: center;
  }
  .button span{
    font-size: 17px;
  }
   .button{
    border: none;
  }

.time {
  margin-left: 30px;
}

.search-box {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px 20px;
    border-radius: 20px;
    border: 1px solid #ced4da;
}

.search-box input{
  width: 100%;
  margin-left: 10px;
  border: none;
  outline: none;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content:center;
}

.navbar-brand img{
  margin-right: 10px;
}

.navbar-brand .back-home{
  color: #000;
  font-family: Airbnb Cereal App Bold;
  font-size: 25px;
}

@media (max-width: 992px) {
  .pict-container {
    display: none;
  }
}
</style>
