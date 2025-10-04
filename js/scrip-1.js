async function loadCards() {
  const res = await fetch("/json/mirzaaigrahan.json");
  const data = await res.json();
  const container = document.getElementById("cards-container");

  data.cards.forEach((card) => {
    const a = document.createElement("a");
    a.href = "details.html"; // Navigate to details page
    a.className = "card";
    a.setAttribute("data-tooltip", card.title);

    // Save complete info in localStorage on click
    a.addEventListener("click", (e) => {
      e.preventDefault(); // prevent default for demo
      localStorage.setItem("selectedCard", JSON.stringify(card));
      window.location.href = "details.html";
    });

    const img = document.createElement("img");
    img.src = card.image;
    img.alt = card.title;

    a.appendChild(img);
    container.appendChild(a);
  });
}

loadCards();
