<template>
  <div >
    <swiper
      class="swiper"
      :watchOverflow="true"
      :centeredSlides="true"
      :centered-slides="true"
      :space-between="20"
      :grab-cursor="true"
      :mousewheel="true"
      :slides-per-view="4"
      :breakpoints="breakpoints"
    >
      <swiper-slide v-for="item in 4" :key="item">
          <div class="card">
            <img src="@/assets/img/test.png" class="card__title-img" alt="">
            <div class="card__content">
            <h2 class="card__title">Miami, FF, USA </h2>
            <div class="card__additional">
                <div class="card__left">
                <div class="card__temp">
                    24 <span>&deg; C</span>
                </div>
                <div class="card__day">
                    Sunday, 11 am
                </div>
                </div>
                <div class="card__right">
                <div class="card__chips card__chips-pink">Strong Winds</div>
                <div class="card__chips card__chips-blue">Cloudly</div>
                
                </div>
            </div>
            <a href="#" class="card__more">
                VIEW STATS
            </a>
            <div class="additional">
                <div class="additional__item">
                <img src="@/assets/img/rain.svg" alt=""><div class="additional__text"><span>Precipitation</span><span>6%</span></div>
                </div>
                <div class="additional__item">
                <img src="@/assets/img/humidity.svg" alt=""><div class="additional__text"><span>Humidity</span><span>90%</span></div>
                </div>
                <div class="additional__item">
                <img src="@/assets/img/wind.svg" alt=""><div class="additional__text"><span>Wind</span><span>19 km/h</span></div>
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
  }
}
</script>

<style>
.swiper {
    width: 100vw;
    padding-top: 40px;
}

</style>
