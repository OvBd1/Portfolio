const menuBurger = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    // Light mode
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    menuBurger.src = 'assets/burgerBlack.png';
    document.getElementById("dark-light-mode").innerText = "Dark Mode";
  } else {
    // Dark mode
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "#333");
    menuBurger.src = 'assets/burgerWhite.png';
    document.getElementById("dark-light-mode").innerText = "Light Mode";
  }
}

menuBurger.addEventListener("click", () => {
  navLinks.classList.toggle('mobile-menu');
});