const signUpButton = document.getElementById("signup");
// const signInButton = document.getElementById("signIp");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

// signInButton.addEventListener("click", () => {
//   container.classList.remove("right-panel-active");
// });
