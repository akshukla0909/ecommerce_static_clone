


const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  grabCursor: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// first code

  var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// second code


const progressCircle2 = document.querySelector(".autoplay-progress svg");
const progressContent2 = document.querySelector(".autoplay-progress span");
var swiper2 = new Swiper(".mySwiper2", {
  // spaceBetween: 15,
  slidesPerView: 4,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  grabCursor: true,
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

