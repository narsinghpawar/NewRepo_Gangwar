async function loadHTML(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}
loadHTML("header", "header.html");
loadHTML("socialMediaIcons", "socialMediaIcons.html");
loadHTML("footer", "footer.html");
