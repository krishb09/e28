<!-- src/components/ShowProduct.vue -->
<template>
  <div class="product">
    <div class="product-name">{{ product.name }}</div>
    <img
      class="product-thumb"
      :src="require('@/assets/images/products/' + product.id + '.jpg')"
    />
    <p class="product-description" v-if="includeDetails">
      {{ product.description }}
    </p>
    <div class="product-price" v-if="includeDetails">${{ product.price }}</div>
  </div>
</template>

<script>
export default {
  name: "show-product",
  props: ["product", "includeDetails"],
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>