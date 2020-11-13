<template>
  <div id="product-page">
    <div v-if="product">
      <show-product :product="product" :includeDetails="true"> ></show-product>
    </div>
  </div>
</template>

<script>
import ShowProduct from "@/components/ShowProduct.vue";

export default {
  name: "",
  props: ["id", "products"],
  components: {
    "show-product": ShowProduct,
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return this.products.filter((product) => {
        return product.id == this.id;
      }, this.id)[0];
    },
    productNotFound() {
      return this.product == null;
    },
  },
};
</script>

<style scoped>
</style>