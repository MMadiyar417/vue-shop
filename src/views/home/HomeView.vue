<template>

  <div class="flex justify-center items-center min-h-60">
    <h1 class=" mr-auto text-[36px] font-bold mb-3">
      Каталог
    </h1>

    <ProgressSpinner v-if="pending"/>
    <div
    v-else
     class="flex items-start gap-3 flex-wrap w-full">

      <Product
      v-for="product in products"
      :key="product.id"
      :item="product"
      class="w-full p-4 sm:w-1/4 lg:w-1/3"
      />
    </div>
  </div>

</template>


<script >
import { onMounted, ref } from 'vue'
import { getProducts,  } from '@/api/products.js'
import  Product from '@/components/product/Product.vue'

export default {
  components: {Product},
  setup(){
    const pending = ref(true)
    const products = ref([])

    const getData = async () => {
      pending.value = true
        try {
            const data = await getProducts()

            products.value = data


        } catch (error) {
            console.log(error);

        } finally {
          pending.value = false

        }
    }
    onMounted(async () => {
        await getData()
    })
    return {
      products,
      pending
    }
  }
}

</script>
