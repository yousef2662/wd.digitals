document.addEventListener("DOMContentLoaded", () => {
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

function userFun() {
  let userDet = document.querySelector(".user-details");
  let lgOuBt = document.querySelector(".logout-btn");

  userDet.classList.toggle("inact");
  userDet.classList.toggle("active");
  lgOuBt.classList.toggle("inact");
  lgOuBt.classList.toggle("active");
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
