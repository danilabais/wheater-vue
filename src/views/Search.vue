<template>
  <div class="container">
      <input type="text">
      <ul v-for="item in 6" :key="item"><li>{{item}}</li></ul>
  </div>
</template>

<script>
export default {

}
</script>

<style  scoped>
.container {
        background: #FBFBFB;
        border-radius: 20px;
        width: 100%;
        margin-top: 30px;
}
input {
    margin: 20px 0;
    
}
</style>