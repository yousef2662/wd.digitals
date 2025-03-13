document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
});

window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  let sun = document.querySelector(".sun");
  let moon = document.querySelector(".sun-aft");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun.classList.add("inactive");
  if (moon) moon.classList.remove("inactive");
  if (navbar) navbar.classList.add("dark-mode");
  if (landing) landing.classList.add("dark-mode");
  if (services) services.classList.add("dark-mode");
  if (projects) projects.classList.add("dark-mode");
  if (footer) footer.classList.add("dark-mode");
  if (contact) contact.classList.add("dark-mode");
  if (textOnLanding) textOnLanding.classList.remove("text-black-50");
  if (goUp) goUp.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  let sun = document.querySelector(".sun");
  let moon = document.querySelector(".sun-aft");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun.classList.remove("inactive");
  if (moon) moon.classList.add("inactive");
  if (navbar) navbar.classList.remove("dark-mode");
  if (landing) landing.classList.remove("dark-mode");
  if (services) services.classList.remove("dark-mode");
  if (projects) projects.classList.remove("dark-mode");
  if (footer) footer.classList.remove("dark-mode");
  if (contact) contact.classList.remove("dark-mode");
  if (textOnLanding) textOnLanding.classList.add("text-black-50");
  if (goUp) goUp.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
};


let goUp = document.querySelector(".go-up");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    goUp.classList.add("active");
  } else {
    goUp.classList.remove("active");
  }
})