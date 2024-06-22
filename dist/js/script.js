// NAVBAR FIXED
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
});

// HUMBERGER
const humberger = document.getElementById("humberger");
const navMenu = document.getElementById("nav-menu");

humberger.addEventListener("click", function () {
  humberger.classList.toggle("humberger-active");
  navMenu.classList.toggle("hidden");
});

// SLIDER
const sliderCircle = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slides");

let sliderNav = function (manual) {
  sliderCircle.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("slide-active");
  });

  sliderCircle[manual].classList.add("active");
  slides[manual].classList.add("slide-active");
};

sliderCircle.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    sliderNav(i);
  });
});

// COUNTING SECTION START
const counting = document.querySelector(".counting");
const valueDisplays = document.querySelectorAll("span[data-count]");
let interval = 5000;

window.addEventListener("scroll", function () {
  let windowScroll = Math.floor(document.documentElement.scrollTop);

  if (windowScroll > counting.offsetTop - 200) {
    valueDisplays.forEach((valueDisplay, index) => {
      let startValue = 0;
      // let startValue = index == 0 ? 9999 : 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-count"));
      let duration = Math.max(Math.floor(interval / endValue), 1);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
});
// COUNTING SECTION END
// KISAH PERTUALANGAN SECTION START
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const iframes = document.querySelectorAll("iframe");
const buttons = document.querySelectorAll(".button-carousel");

let iframeIndex = 0;
let intervalId;

const autoSlide = () => {
  intervalId = setInterval(() => slideVideo(++iframeIndex), 2000);
};
autoSlide();
const slideVideo = () => {
  iframeIndex =
    iframeIndex === iframes.length
      ? 0
      : iframeIndex < 0
      ? iframes.length - 1
      : iframeIndex;

  carousel.style.transform = `translate(-${iframeIndex * 100}%)`;
};

const updateClick = function (e) {
  clearInterval(intervalId);

  iframeIndex += e.target.id === "next" ? 1 : -1;
  slideVideo(iframeIndex);

  autoSlide();
};

buttons.forEach((button) => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", function () {
  clearInterval(intervalId);
});

wrapper.addEventListener("mouseleave", autoSlide);

// KISAH PERTUALANGAN SECTION END

// KEINDAHAN ALAM SECTION START
const items = document.querySelectorAll(".slider .list .item");
const next = document.getElementById("next-image");
const prev = document.getElementById("prev-image");
const thumbnails = document.querySelectorAll(".thumbnail .item");

let countItem = items.length;
let itemActive = 0;

next.onclick = function () {
  itemActive = itemActive + 1;
  if (itemActive >= countItem) {
    itemActive = 0;
  }
  showSlider();
};
prev.onclick = function () {
  itemActive = itemActive - 1;
  if (itemActive < 0) {
    itemActive = countItem - 1;
  }
  showSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function showSlider() {
  let itemActiveOid = document.querySelector(".slider .list .item.active");
  let thumbnailActiveOid = document.querySelector(".thumbnail .item.active");
  itemActiveOid.classList.remove("active");

  thumbnailActiveOid.classList.remove("active");

  items[itemActive].classList.add("active");
  thumbnails[itemActive].classList.add("active");

  // HAPUS INTERVAL
  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    itemActive = index;
    showSlider();
  });
});
// KEINDAHAN ALAM SECTION END
