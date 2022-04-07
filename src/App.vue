<template>
  <main class="main">
    <router-view/>
      <Nav/>
    </main>
</template>

<script>

import Nav from '@/components/Nav.vue'
export default {
    components: {
      Nav,
    },
    mounted() {
      
    }
    
}
</script>

<style>

</style>