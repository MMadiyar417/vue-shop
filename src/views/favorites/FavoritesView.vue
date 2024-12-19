<template>

  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class=" mr-auto text-[36px] font-bold mb-3">
      Избранное
    </h1>
    <ProgressSpinner v-if="pending"/>
    <div
    v-else
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">

      <Product
      v-for="product in products"
      :key="product.id"
      :item="product"
      />
    </div>
  </div>

</template>


<script >
import { onMounted, computed } from 'vue'
import  Product from '@/components/product/Product.vue'
import { useFavorites } from '@/stores/favoritesProducts.js';


export default {
  components: {Product},
  setup(){
    const ProductsStore = useFavorites()


    const products = computed(()=> {
      return ProductsStore.products
    })
    const pending = computed(()=> {
      return ProductsStore.pending
    })

    const { getData } = ProductsStore

    onMounted( () => {
         getData()
    })
    return {
      products,
      pending
    }
  }
}

</script>
