/*login & register start*/
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click',()=> {
	wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=> {
	wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=> {
	wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click',()=> {
	wrapper.classList.remove('active-popup');
});
/*login & register end*/
var swiper = new Swiper(".book-slider", {
      loop:true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".feature-slider", {
      loop:true,
      spaceBetween:10,
      centeredSlides: true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      
      // navigation: {
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

var swiper = new Swiper(".arrival-slider", {
      loop:true,
      spaceBetween:10,
      centeredSlides: true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".favo-slider", {
      loop:true,
      spaceBetween:10,
      centeredSlides: true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
      loop:true,
      grabCursor:true,
      spaceBetween:10,
      centeredSlides: true,
      autoplay:{
        delay:9500,
        disableOnInteraction:false,
      },
      
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});