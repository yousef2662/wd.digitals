let toSignInBtn = document.getElementById("to-sign-in");
let toSignUpBtn = document.getElementById("to-sign-up");
let signInP = document.getElementById("sign-in-p");
let signUpP = document.getElementById("sign-up-p");
let toggleWihtUp = document.getElementById("sign-in-toggle");
let toggleWihtIn = document.getElementById("sign-up-toggle");
let container = document.querySelector(".log-in-container");


// التحقق من الحالة المحفوظة عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");

  if (theme === "dark") {
    changeToMoon();
  } else {
    changeToSun();
  }
});

function changeToIn() {

  signUpP.classList.add("inactive");
  signInP.classList.remove("inactive");
  toggleWihtIn.classList.remove("inactive");
  toggleWihtUp.classList.add("inactive");

}

function changeToUp() {

  signInP.classList.add("inactive");
  signUpP.classList.remove("inactive");
  toggleWihtUp.classList.remove("inactive");
  toggleWihtIn.classList.add("inactive");

}

window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  let container = document.querySelector(".log-in-container");
  if (container) container.classList.add("dark-mode");

  localStorage.setItem("theme", "dark");
};

window.changeToSun = function () {
  document.body.classList.remove("dark-mode");
  let container = document.querySelector(".log-in-container");
  if (container) container.classList.remove("dark-mode");

  localStorage.setItem("theme", "light");
};

// تحميل الحالة عند تشغيل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
});
