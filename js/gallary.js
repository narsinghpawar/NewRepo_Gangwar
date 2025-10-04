const images = [
  { src: "Images/Background/BG.jpg", title: "Mountain Lake" },
  { src: "Images/Background/img-2.jpg", title: "Majestic Dog" },
  { src: "Images/Background/img-3.jpg", title: "Forest Path" },
  { src: "Images/Background/BG.jpg", title: "Mountain Lake" },
  { src: "Images/Background/img-2.jpg", title: "Majestic Dog" },
  { src: "Images/Background/img-3.jpg", title: "Forest Path" },
  { src: "Images/Background/BG.jpg", title: "Mountain Lake" },
  { src: "Images/Background/img-2.jpg", title: "Majestic Dog" },
  { src: "Images/Background/img-3.jpg", title: "Forest Path" },
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightImg");
const metaText = document.getElementById("metaText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
const thumbs = document.getElementById("thumbs");

let currentIndex = 0;

function buildGallery() {
  images.forEach((img, i) => {
    const div = document.createElement("button");
    div.className = "item";
    div.setAttribute("aria-label", img.title + " - Open image");
    div.innerHTML = `
          <img src="${img.src}" alt="${img.title}">
          <div class="caption">${
            img.title
          }<span style="font-size:12px;color:var(--muted)">${i + 1}/${
      images.length
    }</span></div>
        `;
    div.addEventListener("click", () => openViewer(i));
    gallery.appendChild(div);
  });
}

function buildThumbs() {
  thumbs.innerHTML = "";
  images.forEach((img, i) => {
    const t = document.createElement("img");
    t.src = img.src;
    t.alt = img.title;
    t.addEventListener("click", () => goto(i));
    thumbs.appendChild(t);
  });
}

function openViewer(index) {
  currentIndex = index;
  updateViewer();
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeViewer() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function updateViewer() {
  const img = images[currentIndex];
  lightImg.src = img.src;
  lightImg.alt = img.title;
  metaText.textContent =
    img.title + " — " + (currentIndex + 1) + " of " + images.length;
  Array.from(thumbs.children).forEach((t, i) => {
    t.classList.toggle("active", i === currentIndex);
  });
}

function goto(index) {
  if (index < 0) index = images.length - 1;
  if (index >= images.length) index = 0;
  currentIndex = index;
  updateViewer();
}

prevBtn.addEventListener("click", () => goto(currentIndex - 1));
nextBtn.addEventListener("click", () => goto(currentIndex + 1));
closeBtn.addEventListener("click", closeViewer);
overlay.addEventListener("click", closeViewer);

document.addEventListener("keydown", (e) => {
  if (lightbox.classList.contains("open")) {
    if (e.key === "ArrowLeft") goto(currentIndex - 1);
    if (e.key === "ArrowRight") goto(currentIndex + 1);
    if (e.key === "Escape") closeViewer();
  }
});

buildGallery();
buildThumbs();
