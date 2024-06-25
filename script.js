let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    // Light mode
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.getElementById("dark-light-mode").innerText = "Dark Mode";
  } else {
    // Dark mode
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "#333");
    document.getElementById("dark-light-mode").innerText = "Light Mode";
  }
}

// On récupère des éléments HTML via leur classe afin de les utiliser ultérieurement
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger-menu');
const close_btn = document.querySelector('.close-menu');

// Ici on ajoute un écouteur d'événement pour le click sur notre burger bouton
burger.addEventListener('click', () => {
    menu.classList.toggle('open');

    burger.classList.toggle('animate__animated');
    burger.classList.toggle('animate__swing');
})

// Meme chose sur le bouton de fermeture
close_btn.addEventListener('click', () => {
    menu.classList.remove('open');
})