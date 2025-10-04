// Import header and footer
document.addEventListener("DOMContentLoaded", () => {
  const currentLang = Language.get();

  loadHTML("header.html", "#header", () => {
    initMenu();
    Language.apply(currentLang);
    initLanguageDropdown();
  });

  loadHTML("footer.html", "#footer", () => {
    Language.apply(currentLang);
  });

  initSlider();
});

// Load HTML with callback
function loadHTML(file, target, callback) {
  fetch(file)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(target).innerHTML = data;
      if (callback) callback();
    });
}

// Slider
let slideIndex = 0;
function initSlider() {
  showSlides();
}
function showSlides() {
  const slides = document.querySelectorAll(".slides");
  const dots = document.querySelectorAll(".dot");

  slides.forEach((s) => s.classList.remove("active"));
  dots.forEach((d) => d.classList.remove("active"));

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;

  slides[slideIndex - 1].classList.add("active");
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}

// Hamburger Menu
function initMenu() {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
      navbar.style.flexDirection = "column";
      navbar.style.background = "#fff";
      navbar.style.position = "absolute";
      navbar.style.top = "60px";
      navbar.style.right = "20px";
      navbar.style.padding = "10px";
      navbar.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
    });
  }
}

// Initialize language dropdown
function initLanguageDropdown() {
  const selector = document.getElementById("language");
  if (selector) {
    selector.value = Language.get();
    selector.addEventListener("change", (e) => {
      Language.set(e.target.value);
    });
  }
}
