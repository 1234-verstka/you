const swiper = new Swiper('.channel-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },

  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },



});
const recommended = new Swiper('.recommended-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },


  navigation: {
    nextEl: '.recommended-button-prev',
    prevEl: '.recommended-button-next',
  },


});
const food = new Swiper('.food-slider', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },

  navigation: {
    nextEl: '.food-button-prev',
    prevEl: '.food-button-next',
  },
});


const searchBtn = document.querySelector('.mobile-search');
const mobaleSerch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobaleSerch.classList.toggle('.is-open');
});


if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  recommended.destroy();
  food.destroy();
}