

 var swiper = new Swiper(".slide-container", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup:4,
       fill: 'column',

      loop: true,
      centerSlide:"true",
      grabCursor:"true",
	  fade:"true",


    /* autoplay: {
        delay: 2900,
        disableOnInteraction: false,
      },
       
   */
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


 