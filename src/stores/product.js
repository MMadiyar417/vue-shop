import { ref,  } from 'vue'
import { defineStore } from 'pinia'
import { getProducts } from '@/api/products';

export const useProduct = defineStore('product', () => {
  const product = ref([]);
  const pending = ref(true);


  const getData = async (id) => {
    pending.value = true
      try {
          const data = await getProducts(id)

          product.value = data


      } catch (error) {
          console.log(error);

      } finally {
        pending.value = false

      }
  }
  // const addFavorites = (item) => {
  //   localStorage.setItem('favorites', JSON.stringify(item))
  // }

  // const addCart = (item) => {
  //   localStorage.setItem('cart', JSON.stringify(item))

  //   }

  return { product, pending, getData }
})
