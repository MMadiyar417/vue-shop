import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '@/api/products';

export const useProducts = defineStore('products', () => {
  const products = ref([]);
  const pending = ref(true);


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

  return { products, pending, getData }
})
