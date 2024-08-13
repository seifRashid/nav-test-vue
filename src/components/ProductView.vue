<template>
  <div class="row mt-4 mx-4 relativeCartMenu">
    
    <div class="col">
        <img
          :src="fruitImage"
          :alt="fruitName"
          class="img-fluid"
        />
    </div>
    <div class="col">
      <h1 class="fs-2">{{ fruitName }}</h1>
      <div class="mt-4">
        <div class="mb-3">
          <p class="form-label fs-4">Description</p>
          <p class="form-text fs-6">{{ fruitDescription }}</p>
        </div>
        <div class="mb-3">
          <p class="form-label fs-4">Origin</p>
          <p class="form-text fs-6">{{ fruitOrigin }}</p>
        </div>
        <div class="mb-3">
          <p class="form-label fs-4">Season</p>
          <p class="form-text fs-6">{{ fruitSeason }}</p>
        </div>
      </div>
      <button class="btn btn-sm btn-info px-3 fs-5" @click="previousFruit">
        <i class="bi bi-chevron-left"></i>Previous
      </button>
      <button class="btn btn-sm btn-info px-3 mx-3 fs-5" @click="nextFruit">
        Next<i class="bi bi-chevron-right"></i>
      </button>
      <button class="btn btn-sm btn-success px-3 mx-3 fs-5" @click="addToCart">
        Add to Cart <i class="bi bi-cart-check"></i>
      </button>
    </div>
  </div>
  <!-- Product Review -->
   <div class="row mt-4 mx-4">
    <div class="col">
      <product-review/>
    </div>
    <div class="col">
      <div class="container mt-5">
        <p class="fs-3">Fruits Reviews</p>
        <div class="card">
          <div class="card-body">
            <div class="fs-5">Review</div>
          </div>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
export default {
  props: [
  'fruitName', 'fruitDescription', 'fruitOrigin', 'fruitSeason','fruitImage'
  ],
  methods: {
    nextFruit() {
      this.$emit('next-fruit')
    },
    previousFruit() {
      this.$emit('previous-fruit')
    },
    addToCart(){
      this.$emit('add-to-cart')
    }
  },
};
</script>
<style>

</style>
