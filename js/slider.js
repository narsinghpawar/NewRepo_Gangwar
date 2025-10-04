let slides = document.querySelectorAll(".slides img");
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

function moveSlide(step) {
  index = (index + step + slides.length) % slides.length;
  showSlide(index);
}

setInterval(() => moveSlide(1), 5000);
