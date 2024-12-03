<template>

  <div class="flex flex-col justify-center items-center min-h-60 w-full">
    <h1 class=" mr-auto text-[36px] font-bold mb-3">
      Корзина
    </h1>
    <ProgressSpinner v-if="pending"/>
    <div
    v-else
     class="flex items-start gap-3 flex-wrap w-full">

      <Product
      v-for="product in products"
      :key="product.id"
      :item="product"
      class="w-1/4 p-4"
      />
    </div>
  </div>

</template>


<script >
import { onMounted, ref } from 'vue'
import  Product from '@/components/product/Product.vue'

export default {
  components: {Product},
  setup(){
    const pending = ref(true)
    const products = ref([])

    onMounted( () => {
      pending.value = true

      setTimeout(()=> {
        const data = localStorage.getItem('favorites');
        console.log(data);
        products.value.push(JSON.parse(data))
        pending.value = false
      }, 1000)

    })
    return {
      products,
      pending
    }
  }
}

</script>
