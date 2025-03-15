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

const API_URL = "https://wddigitals-production.up.railway.app";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#sign-up-p button").addEventListener("click", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#sign-up-p input[type='text']").value;
    const email = document.querySelector("#sign-up-p input[type='email']").value;
    const password = document.querySelector("#sign-up-p input[type='password']").value;

    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Account created successfully!");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      window.location.href = "index.html"; // إعادة التوجيه إلى الصفحة الرئيسية
    } else {
      alert("Error: " + data.error);
    }
  });

  document.querySelector("#sign-in-p button").addEventListener("click", async (e) => {
    e.preventDefault();
    const email = document.querySelector("#sign-in-p input[type='email']").value;
    const password = document.querySelector("#sign-in-p input[type='password']").value;

    const response = await fetch(`${API_URL}/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();
    if (response.ok) {
      alert("Logged in successfully!");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      window.location.href = "index.html"; // إعادة التوجيه إلى الصفحة الرئيسية
    } else {
      alert("Error: " + data.error);
    }
  });
});
