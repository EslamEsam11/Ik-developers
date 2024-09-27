let btnOpen = document.getElementById("btnOpen");
let btnCloes = document.getElementById("btnCloes");
let listResponsive = document.querySelector(".listResponsive");

btnOpen.onclick = function() {
  listResponsive.classList.toggle("hid");
  btnCloes.classList.remove("hid");
  btnOpen.classList.add("hid");
}
btnCloes.onclick = function() {
  listResponsive.classList.toggle("hid");
  btnOpen.classList.remove("hid");
  btnCloes.classList.add("hid");
}


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});



//

var swiper = new Swiper(".myWorking", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 50,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  pagination: {
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: false,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 14,
      spaceBetween: 30,
    },
  },
});


var swiper = new Swiper(".myCustomerReviews", {
  navigation: {
    nextEl: ".swiper-button-next2",
    prevEl: ".swiper-button-prev2",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

var swiper = new Swiper(".myResources", {
  slidesPerView: 2,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});


let frontend = document.getElementById("frontend");
let frontendBtn = document.getElementById("frontendBtn");
let backend = document.getElementById("backend");
let backendBtn = document.getElementById("backendBtn");

frontendBtn.onclick = function (){
  backend.classList.add("hid");
  frontend.classList.remove("hid");
  backendBtn.classList.remove("active");
  frontendBtn.classList.add("active");
}
backendBtn.onclick = function (){
  backend.classList.remove("hid");
  frontend.classList.add("hid");
  backendBtn.classList.add("active");
  frontendBtn.classList.remove("active");
}


