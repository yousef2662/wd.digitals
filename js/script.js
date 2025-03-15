document.addEventListener("DOMContentLoaded", () => {
  const logInButton = document.getElementById("login-btn");
  const userIcon = document.getElementById("user-icon");

  // التحقق مما إذا كان المستخدم مسجّل دخول
  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    // إخفاء زر تسجيل الدخول
    logInButton.style.display = "none";

    // إظهار أيقونة المستخدم مع اسمه
    userIcon.style.display = "inline-block";
    userIcon.setAttribute("title", user.name);
  }

  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }
});

window.changeToMoon = function () {
  document.body.classList.add("dark-mode");
  let sun = document.querySelector(".sun-mode");
  let moon = document.querySelector(".moon-mode");
  let changeMode = document.querySelector(".change-mode");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun.classList.add("inactiveS");
  if (moon) moon.classList.remove("inactiveM");
  if (changeMode) changeMode.classList.add("change-mode-to-d-back");
  if (changeMode) changeMode.classList.remove("change-mode-to-l-back");

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
  let sun = document.querySelector(".sun-mode");
  let moon = document.querySelector(".moon-mode");
  let changeMode = document.querySelector(".change-mode");
  let navbar = document.querySelector(".navbar");
  let landing = document.querySelector(".landing");
  let services = document.querySelector(".services");
  let projects = document.querySelector(".projects");
  let footer = document.querySelector(".footer1");
  let contact = document.querySelector(".Contact");
  let textOnLanding = document.querySelector(".text-on-landing");
  let goUp = document.querySelector(".go-up");

  if (sun) sun.classList.remove("inactiveS");
  if (moon) moon.classList.add("inactiveM");
  if (changeMode) changeMode.classList.add("change-mode-to-l-back");
  if (changeMode) changeMode.classList.remove("change-mode-to-d-back");

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


// cddcd

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = {
      name: form.name.value,
      mail: form.mail.value,
      message: form.message.value
    };

    try {
      const response = await fetch("https://wddigitals-production.up.railway.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message || "An error occurred.");
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message.");
    }
  });
});
