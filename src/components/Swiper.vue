<template>
  <div>
    <div class="region" v-if="!arr.length">
      Вы пока не добавили ни одого региона<br>
      <router-link class="link" to="/search">Добавить</router-link>
    </div>
    <swiper
      class="swiper"
      :watchOverflow="true"
      :centeredSlides="true"
      :centered-slides="true"
      :space-between="20"
      :grab-cursor="true"
      :slides-per-view="4"
      :draggable="true"
      :breakpoints="breakpoints"
      :mousewheel="true"
      
    >
      <swiper-slide v-for="(item,key) in arr" :key="key" >
          <div class="card">
            <img :src="`http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`" class="card__title-img" alt="">
            <div class="card__content">
            <h2 class="card__title">{{item.name}}</h2>
            <div class="card__additional">
                <div class="card__left">
                <div class="card__temp">
                    {{Math.round(item.main.temp)}} <span>&deg; C</span>
                </div>
                <div class="card__day">
                  {{item.weather[0].description}}
                </div>
                </div>
                <div class="card__right">
                <div class="card__chips card__chips-pink">Макс темп  {{item.main.temp_max}}</div>
                <div class="card__chips card__chips-blue">Мин темп  {{item.main.temp_min}}</div>
                
                </div>
            </div>
            <!-- <a  href="#" class="card__more">
                VIEW STATS
            </a> -->
            <div class="additional">
                <div class="additional__item">
                <img src="@/assets/img/rain.svg" alt=""><div class="additional__text"><span>Осадки</span><span>6%</span></div>
                </div>
                <div class="additional__item">
                <img src="@/assets/img/humidity.svg" alt=""><div class="additional__text"><span>Влажность</span><span>{{item.main.humidity}}%</span></div>
                </div>
                <div class="additional__item">
                <img src="@/assets/img/wind.svg" alt=""><div class="additional__text"><span>Ветер</span><span>19 km/h</span></div>
                </div>
            </div>
            </div>
        </div>
       </swiper-slide>      
    </swiper>
    
  </div>
</template>

<script>
import SwiperMixin from "./SwiperMixin.js";
export default {
  mixins: [SwiperMixin],
  props: ['arrOfWeather'],
  data(){
      return {
        
          breakpoints: {
       0: {
        slidesPerView: 1.2,
        spaceBetween: 0,
      },
      800: {
        slidesPerView: 2.4,
        spaceBetween: 100,
      },
      1400: {
        slidesPerView:2.6,
        spaceBetween: 240,
      },
    }
      }
  },
  computed: {
    arr(){
      return this.$store.getters.weather
    },
   
  }
 
 
  
}
</script>

<style>
.swiper {
    width: 100vw;
    padding-top: 40px;
}
.region {
  color: #fff;
  text-align: center;
  font-size: 24rem;
  margin-bottom: auto;
}
.link {
  color: #fff;
  text-decoration: underline;
  
}
.card__day {
  text-transform: uppercase;
}



</style>
