document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("sufi-music");
  audio.volume = 0.2; // set a gentle background volume, e.g. 20%

  audio.play().catch((err) => {
    // autoplay blocked by browser
    console.log("Audio autoplay failed:", err);
    const btn = document.createElement("button");
    btn.textContent = "🎵 Play Sufi Music";
    Object.assign(btn.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      padding: "10px 15px",
      background: "#5b3a29",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontFamily: "Georgia, serif",
      boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    });
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
      audio.play();
      btn.remove();
    });
  });
});
