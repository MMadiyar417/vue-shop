<template>
  <TheHeader />
  <main class="flex flex-col justify-center items-start h-full min-h-full grow container py-2 px-4 my-5 mx-auto">
    <RouterView />

  </main>

  <TheFooter/>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';




export default {
  components: {TheHeader, TheFooter}

}

</script>

<style scoped>

</style>
