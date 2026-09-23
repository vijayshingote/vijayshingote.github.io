const themeToggle = document.getElementById("theme-toggle");
const root = document.documentElement;

/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  root.setAttribute("data-theme", "light");
  themeToggle.textContent = "☾";
} else {
  root.removeAttribute("data-theme");
  themeToggle.textContent = "☀";
}


/* =========================================
   THEME TOGGLE
========================================= */

themeToggle.addEventListener("click", () => {

  const isLight =
    root.getAttribute("data-theme") === "light";

  if (isLight) {

    root.removeAttribute("data-theme");

    themeToggle.textContent = "☀";

    localStorage.setItem("theme", "dark");

  } else {

    root.setAttribute("data-theme", "light");

    themeToggle.textContent = "☾";

    localStorage.setItem("theme", "light");

  }

});


/* =========================================
   CLOSE MOBILE NAV AFTER CLICK
========================================= */

const navLinks =
  document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    const target =
      document.querySelector(link.getAttribute("href"));

    if (target) {

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});
