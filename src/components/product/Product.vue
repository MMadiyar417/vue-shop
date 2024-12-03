<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <router-link
    :to="`product/${item.id}`"
    class="flex flex-col gap-3 relative overflow-hidden shadow-lg shadow-cyan-500/50 rounded-lg"
    >
      <img
      :src="item.image"
      alt="item's image"
      class="w-full max-h-80 min-h-80 object-cover mx-auto rounded-lg">
      <span class=" font-semibold text-xl truncate">{{ item.title }}</span>
      <!-- <span class=" leading-5 text-sm">{{ item.description }}</span> -->
      <span class=" font-semibold text-xl">{{ item.price }} $</span>

      <div class="flex justify-end items-center gap-3 relative z-10">
            <vue-feather
            @click.prevent="addFavorites(item)"
            class=" cursor-pointer"
            type="heart"
            />
            <vue-feather
            @click.prevent="addCart(item)"

            class=" cursor-pointer"
            type="shopping-cart"
            />
      </div>
    </router-link>
</template>

<script >
  export default {
    props: {
      item: {
        type: Object,
        default: null
      }
    },
    setup() {
        const addFavorites = (item) => {
          localStorage.setItem('favorites', JSON.stringify(item))
        }

        const addCart = (item) => {
          localStorage.setItem('cart', JSON.stringify(item))

          }

      return {
          addCart,
          addFavorites
      }
    },
  }
</script>

<style>

</style>
