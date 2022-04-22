<template>
  <main class="main">
    <HeaderMain />
    <router-view />
    <Nav />
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
import HeaderMain from "@/components/HeaderMain.vue";

export default {
  components: {
    Nav,
    HeaderMain,
  },
};
</script>

<style></style>
