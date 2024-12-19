import { ref,  } from 'vue'
import { defineStore } from 'pinia'

export const useFavorites = defineStore('favorites', () => {
  const products = ref([]);
  const pending = ref(true);


  const getData = () => {
    pending.value = true

    setTimeout(()=>{
      if(localStorage.getItem('favorites')){
        products.value.push(JSON.parse(localStorage.getItem('favorites')))
      } else {
        products.value = []
      }

      pending.value = false
    }, 1500)

  }

  const toggleFavorite = (item) => {

    if(products.value.find(el => el.id === item.id)){
      const index = products.value.indexOf(item.id)

      products.value.splice(index, 1)
    }else {
      item.isFavorite = true
      products.value.push(item);
    }

    localStorage.setItem('favorites', JSON.stringify(item))
  }


  return { products, pending, getData, toggleFavorite }
})
