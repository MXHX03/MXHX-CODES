// ====== Light & Dark Theme ======
const themeButton = document.getElementById("theme-toggle");
const iconElement = themeButton.querySelector("i");
const mediaPreference = window.matchMedia("(prefers-color-scheme: dark)");

function deviceTheme() {
  var a = mediaPreference.matches ? "dark" : "light";
  return a;
}

function selectedTheme() {
  var a = localStorage.getItem("selected-theme");
  return a;
}

function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    // Toggle from dark to light
    handleTheme("light")
    handleIconTheme("light");

    // Store the theme value in localStorage
    localStorage.setItem("selected-theme", "light");
  } else {
   // Toggle from dark to light
   handleTheme("dark")
   handleIconTheme("dark");

   // Store the theme value in localStorage
   localStorage.setItem("selected-theme", "dark");
  }
}

themeButton.addEventListener("click", toggleTheme);

function handleIconTheme(theme) {
  switch (theme) {
    case "dark":
      iconElement.classList.remove("ri-moon-fill");
      iconElement.classList.add("ri-sun-fill");
      break;
    case "light":
      iconElement.classList.remove("ri-sun-fill");
      iconElement.classList.add("ri-moon-fill");
      break;

    default:
      break;
  }
}

function handleTheme(theme) {
  switch (theme) {
    case "dark":
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      break;

    case "light":
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      break;
    default:
      break;
  }
}

// Update the device theme when the media preference changes
mediaPreference.addEventListener("change", function (e) {
  let selected = selectedTheme()
  let device = deviceTheme()

  if (!selected) {
    handleTheme(device)
    handleIconTheme(device);
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let selected = selectedTheme()
  let device = deviceTheme()

  // Set the theme if there is a selected theme already
  if (selected) {
    handleTheme(selected);
    handleIconTheme(selected);
  } else {
    // Set the theme based on device theme
    handleTheme(device);
    handleIconTheme(device);
  }
});


// ====== Toggle Nav Menu ======
const navMenu = document.getElementById("nav-menu");
const navShow = document.getElementById("nav-toggle");
const navHide = document.getElementById("nav-close");

navShow?.addEventListener("click", toggleNavMenu);
navHide?.addEventListener("click", toggleNavMenu);

function toggleNavMenu() {
  navMenu?.classList.toggle("show-menu");
}