<template>

  <div class="flex flex-col justify-center items-center min-h-60">
    <h1 class=" mr-auto text-[36px] font-bold mb-3">
      Каталог
    </h1>
    <ProgressSpinner v-if="pending"/>
    <div
    v-else
     class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 "
    >


      <Product
      v-for="product in products"
      :key="product.id"
      :item="product"
      />
    </div>
  </div>

</template>


<script >
import { onMounted, computed} from 'vue'
import  Product from '@/components/product/Product.vue'
import { useProducts } from '@/stores/products';


export default {
  components: {Product},
  setup(){
    const ProductsStore = useProducts()


    const products = computed(()=> {
      return ProductsStore.products
    })
    const pending = computed(()=> {
      return ProductsStore.pending
    })

    const { getData } = ProductsStore

    onMounted(async () => {
        await getData()
    })
    return {
      products,
      pending,
      ProductsStore
    }
  }
}

</script>
