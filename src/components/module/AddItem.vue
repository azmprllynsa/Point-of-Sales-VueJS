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
                v-model="product.name" required>
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
                <input class="input" type="file" ref="file" @change="upload"
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
                v-model="product.price" required>
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
                  <select v-model="product.categoryId " required>
                    <option value="1">Food</option>
                    <option value="2">Drink</option>
                    <option value="3">Desert</option>
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

export default {
  name: 'AddItem',
  data() {
    return {
      product: {
        name: null,
        price: null,
        image: null,
        categoryId: null,
      },
    };
  },
  methods: {
    cancel() {
      const receipt = document.querySelector('.modal-item');
      receipt.classList.toggle('is-active');
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
