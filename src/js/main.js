const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const navMobileItems = document.querySelectorAll(".nav-mobile__link");
const navItems = document.querySelectorAll(".nav__link");
const barIcon = document.querySelector(".bar-icon");
const closeIcon = document.querySelector(".close-icon");

const aboutus = document.querySelector(".about-us");
const offer = document.querySelector(".offer");

// const inputName = document.querySelector("#name");
// const inputEmail = document.querySelector("#email");
// const textarea = document.querySelector("#msg");
// const allInputs = [inputName, inputEmail];
// const sendBtn = document.querySelector(".contact__form-btn--send");
// const clearBtn = document.querySelector(".contact__form-btn--clear");
// const popup = document.querySelector(".contact__form-popup");

const handleNav = () => {
  navMobile.classList.toggle("nav-mobile--active");
  handlenavMobileItemsAnimation();
  setTimeout(switchIcons, 300);
  animateIcons();
};

const handlenavMobileItemsAnimation = () => {
  let delayTime = 0;
  navMobileItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
    item.style.animationDelay = "." + delayTime + "s";
    delayTime += 2;
  });
};

const switchIcons = () => {
  barIcon.classList.toggle("hamburger-icon-active");
  closeIcon.classList.toggle("hamburger-icon-active");
};

const animateIcons = () => {
  if (barIcon.classList.contains("icon-off-animation")) {
    closeIcon.classList.remove("icon-on-animation");
    closeIcon.classList.add("icon-off-animation");
    setTimeout(() => {
      barIcon.classList.remove("icon-off-animation");
      barIcon.classList.add("icon-on-animation");
    }, 300);
  } else {
    barIcon.classList.add("icon-off-animation");
    barIcon.classList.remove("icon-on-animation");
    setTimeout(() => {
      closeIcon.classList.add("icon-on-animation");
      closeIcon.classList.remove("icon-off-animation");
    }, 300);
  }
};

const handleObserver = () => {
  if (document.body.classList.contains("home-page")) {
    navItems.forEach((item) => {
      item.classList.remove("nav__link--active");
    });
    const currentSection = window.scrollY;

    if (currentSection <= aboutus.offsetTop - 53) {
      navItems[0].classList.add("nav__link--active");
    } else if (currentSection <= offer.offsetTop - 53) {
      navItems[1].classList.add("nav__link--active");
    } else {
      navItems[2].classList.add("nav__link--active");
    }
  }
};

hamburger.addEventListener("click", handleNav);
navMobileItems.forEach((item) => {
  item.addEventListener("click", () => {
    handleNav();
  });
});
window.addEventListener("scroll", handleObserver);
