<template>

  <div class="flex flex-col justify-center items-center w-full">
    <h1 class=" mr-auto text-[36px] font-bold mb-3">
      {{ product.title}}
    </h1>

    <ProgressSpinner v-if="pending"/>
    <div
      v-else
      class="flex justify-between items-start gap-6"
     >
      <img
        class="rounded"
        :src="product.image"
        alt="image">

      <div class="flex flex-col gap-3">
        <span class="text-xl">
            {{ product.description }}
          </span>
          <span class="flex gap-3 items-center text-xl">
            <vue-feather
              type="star"
              stroke="yellow"
              fill="yellow"
              >
            </vue-feather>
            {{ product.rating.rate }}
          </span>
          <span class="text-xl">
            {{ product.price }}
          </span>

          <div class="flex justify-end items-center gap-3 relative z-10">
            <vue-feather
            @click.prevent="addFavorites(product)"
            class=" cursor-pointer"
            type="heart"
            />
            <vue-feather
            @click.prevent="addCart(product)"

            class=" cursor-pointer"
            type="shopping-cart"
            />
      </div>
      </div>
    </div>
  </div>

</template>


<script >
import { useProduct } from '@/stores/product';
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';

export default {
  setup(){
    const  productStore = useProduct()
    const route = useRoute()

    const product = computed(()=> {
      return productStore.products
    })
    const pending = computed(()=> {
      return productStore.pending
    })

    const { getData } = productStore

    const addFavorites = (item) => {
          localStorage.setItem('favorites', JSON.stringify(item))
        }

        const addCart = (item) => {
          localStorage.setItem('cart', JSON.stringify(item))

          }
    onMounted(async () => {
        await getData(route.params.id)
    })
    return {
      product,
      pending,
      addFavorites,
      addCart
    }
  }
}

</script>
