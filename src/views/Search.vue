<template>
    <HeaderMain/>
  <div class="container">
      <input v-on:input="search" placeholder="Начните вводить название места" type="text"> 
      <ul v-for="item in 6" :key="item"><li>{{item}}</li></ul>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
export default {
    components: {
        HeaderMain,
    },
    data(){
        return {
            arrOfLocations:null
        }
    },
    methods: {
        search(e){
            console.log(e.target.value)
        }
    }

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
    background: rgb(231, 231, 231);
    background-repeat: no-repeat;
    width: 100%;
    border-radius: 20px;
    border: none;
    padding: 10px 20px;
    outline: none;
    border: solid rgb(231, 231, 231)  2px;

}
input:focus {
    border: rgb(199, 199, 199) solid 2px;
}
</style>