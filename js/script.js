// Apply dark mode early if saved in localStorage
let savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
}

document.addEventListener("DOMContentLoaded", () => {
  const changeModeDiv = document.querySelector(".change-mode");

  // Apply correct mode when page fully loads
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    window.changeToMoon();
  } else {
    window.changeToSun();
  }

  // Handle toggle on click
  if (changeModeDiv) {
    changeModeDiv.addEventListener("click", () => {
      let currentTheme = localStorage.getItem("theme");
      if (currentTheme === "dark") {
        window.changeToSun();
      } else {
        window.changeToMoon();
      }
    });
  }

  const logInButton = document.querySelector("#login-btn");
  const userIcon = document.querySelector("#user-icon");
  const logoutButton = document.querySelector("#logout-btn");

  if (!logInButton || !userIcon || !logoutButton) return;

  const userData = localStorage.getItem("user");

  if (userData) {
    const user = JSON.parse(userData);

    // Hide the Sign-In button and show User Icon & Logout Button
    logInButton.style.display = "none";
    userIcon.style.display = "inline-block";
    userIcon.setAttribute("title", user.name);
    logoutButton.style.display = "inline-block"; // Show logout button
  } else {
    logInButton.style.display = "inline-block";
    userIcon.style.display = "none";
    logoutButton.style.display = "none"; // Hide logout button
  }

  // Logout functionality
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user"); // Remove user data
    window.location.reload(); // Refresh page to update UI
  });

  // Simulate login success (You should replace this with actual login logic)
  function handleLoginSuccess(user) {
    localStorage.setItem("user", JSON.stringify(user)); // Save user data
    window.location.href = "index.html"; // Redirect to home page
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

  if (sun) sun.style.transform = "scale(.84)";
  if (sun) moon.style.transform = "scale(1)";
  if (sun) sun.style.backgroundColor = "transparent";
  if (sun) moon.style.backgroundColor = "white";
  if (sun) sun.style.color = "var(--inactive-color-forSun)";
  if (sun) moon.style.color = "var(--moon-color)";
  if (changeMode) changeMode.style.backgroundColor = "var(--moon-color)";

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

  if (moon) moon.style.transform = "scale(.84)";
  if (moon) sun.style.transform = "scale(1)";
  if (moon) moon.style.backgroundColor = "transparent";
  if (moon) sun.style.backgroundColor = "white";
  if (moon) moon.style.color = "var(--inactive-color-forMoon)";
  if (moon) sun.style.color = "var(--sun-color)";
  if (changeMode) changeMode.style.backgroundColor = "var(--sun-color)";

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

function userFun() {
  let userDet = document.querySelector(".user-details");
  let lgOuBt = document.querySelector(".logout-btn");

  if (userDet.classList.contains("inact")) {
    userDet.classList.remove("inact");
    userDet.style.transform = "scale(1)";
    lgOuBt.classList.remove("inact");
    lgOuBt.style.transform = "scale(1)";
  } else {
    userDet.classList.add("inact");
    userDet.style.transform = "scale(0)";
    lgOuBt.classList.add("inact");
    lgOuBt.style.transform = "scale(0)";
  }
}

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
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault(); // Prevent normal form submission

      const formData = {
        name: document.getElementById("name").value,
        mail: document.getElementById("email").value,
        message: document.getElementById("message").value
      };

      try {
        const response = await fetch("https://wddigitals-production.up.railway.app/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        const result = await response.json();
        if (response.ok) {
          alert("Message sent successfully!");
          form.reset(); // Clear form fields after successful submission
        } else {
          alert("Error: " + result.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message.");
      }
    });
  }
});
