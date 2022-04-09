<template>
    <HeaderMain/>
  <div class="container">
      <input v-on:input="search" placeholder="Начните вводить название места" type="text"> 
      <ul  v-for="item in arrOfLocations" :key="item"><div class="wrapper">
          <li>{{item.value}}</li><button  v-on:click="addToFavorite(item)">+</button></div><hr>
      </ul>
      <div v-if="this.query && !arrOfLocations.length">Результатов нет</div>
  </div>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue'
import axios from 'axios'

export default {
    components: {
        HeaderMain,
    },
    data(){
        return {
            arrOfLocations:[],
            token:'7b1d99ed6972e5a7c511659eafc3d2b66b4a8031',
            query:'',
            addedLocations:[]

        }
    },
    methods: {
        async search(e){
            this.query=e.target.value
            const options = {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + this.token
                },
               
            }
            await axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address?query=${this.query}&count=6&language=ru`,options).then(response => this.arrOfLocations=response.data.suggestions)
            
        },
        addToFavorite(region) {
           this.addedLocations=[{lat:region.data.geo_lat,lon:region.data.geo_lon,name:region.value,id:region.data.region_fias_id,isMy:false}]
           console.log(this.addedLocations)
        }
    },

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
ul {
    list-style: none;
}
.wrapper {
    display: flex;
    justify-content: space-between;
}
ul:last-child > hr {
    display: none;
}
</style>