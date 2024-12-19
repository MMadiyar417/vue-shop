<template>
    <header class="flex items-center justify-center bg-slate-700 py-2 px-4">
      <div class="flex items-center justify-between w-full container">
        <router-link to="/">
          <img
            src="@/assets/header-logo.svg"
            class=" max-w-16 w-full"
            alt="logo">

        </router-link>

        <div class="flex items-center gap-3">

        </div>

        <div class="flex items-center gap-3">
          <router-link
          class="relative"
          to="/favorites">
            <vue-feather
            class=" cursor-pointer"
            type="heart"
            />
          </router-link>
          <router-link to="cart">
            <vue-feather
            class=" cursor-pointer"
            type="shopping-cart"
            />
          </router-link>

        </div>
      </div>
    </header>
</template>

<script setup lang='ts'>

</script>

<style>

</style>
