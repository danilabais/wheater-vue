export default new Swiper('.content', {
    mousewheel: {
      sensitivity:1,
    },
    speed:350,
    
    watchOverflow:true,
    centeredSlides: true,
    grabCursor:true,
    slideToClickedSlide:true,
    spaceBetween: 20,
    
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
    },
    observer:true,
    observerParents:true,
    observerSlideChildren:true,
   
   
  });

