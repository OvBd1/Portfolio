const menuBurger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");

const toggleBtn = document.getElementById("toggle-btn");
let darkMode = localStorage.getItem("dark-mode");

function enableDarkMode() {
  console.log(toggleBtn)
  console.log('afa')
  document.documentElement.style.setProperty("--text-color", "white");
  document.documentElement.style.setProperty("--background-color", "#333");
  menuBurger.src = 'assets/burgerWhite.png';
  toggleBtn.innerText = "Light Mode";  
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};
 
function disableDarkMode() {
  console.log(toggleBtn)
  console.log('afa')
  document.documentElement.style.setProperty("--text-color", "black");
  document.documentElement.style.setProperty("--background-color", "#efe7e5");
  menuBurger.src = 'assets/burgerBlack.png';
  toggleBtn.innerText = "Dark Mode";
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

if (darkMode === "disabled") {
  disableDarkMode(); // set state of darkMode on page load
}

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle('mobile-menu');  
});

toggleBtn.addEventListener("click", () => {
  console.log('valide')
  darkMode = localStorage.getItem("dark-mode");
  
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

