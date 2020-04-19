<template>
  <!-- Modal Add Item -->
  <div class="modal modal-item">
    <div class="modal-background"></div>
    <div class="modal-card">
      <form @submit="addItem" class="modal-card-body">
        <div class="modal-item-header">
          Add Item
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Name</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Name"
                v-model="name" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Image</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="file" ref="file" @change="product_image"
                required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Price</label>
          </div>
          <div class="field-body">
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Product Price"
                v-model="price" required>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-label is-normal">
            <label class="label">Category</label>
          </div>
          <div class="field-body">
            <div class="field is-narrow">
              <div class="control">
                <div class="select is-fullwidth">
                  <select v-model="id_category" required>
                    <option value="3">Coffee</option>
                    <option value="4">Main Course</option>
                    <option value="5">Dessert</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-item-button">
          <button class="button button-item bg-pink" @click="cancel">Cancel</button>
          <button class="button button-item bg-blue">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddItem',
  data() {
    return {
      name: null,
      price: null,
      product_image: null,
      id_category: null,
    };
  },
  methods: {
    cancel() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
    },
    addItem() {
      const form = new FormData();
      form.append('name', this.name);
      form.append('price', this.price);
      form.append('product_image', this.$refs.file.files[0]);
      form.append('id_category', this.id_category);
      axios
        .post('http://localhost:8000/api/v1/product', form)
        .then((res) => {
          console.log(res.data);
          // this.$router.go();
          // this.$swal.fire({
          //   icon: 'success',
          //   html: `Book ${this.title} has been created!`,
          //   showConfirmButton: false,
          //   timer: 6000,
          // });
          // const modal = document.querySelector('.modal');
          // const sidebar = document.querySelector('.sidebar');
          // modal.classList.toggle('is-active');
          // sidebar.classList.toggle('show-sidebar');
        })
        .catch(() => {
          // console.log(err);
        });
    },
  },
};
</script>

<style scoped lang="scss">
  .modal-card-body{
    border-radius: 6px;
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
  .bg-pink{
    margin-right: 10px;
  }
</style>
