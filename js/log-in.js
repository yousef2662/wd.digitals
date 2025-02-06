let toSignInBtn = document.getElementById("to-sign-in");
let toSignUpBtn = document.getElementById("to-sign-up");
let signInP = document.getElementById("sign-in-p");
let signUpP = document.getElementById("sign-up-p");
let toggleWihtUp = document.getElementById("sign-in-toggle");
let toggleWihtIn = document.getElementById("sign-up-toggle");

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