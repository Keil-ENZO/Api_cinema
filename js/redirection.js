// Redirection vers la page d'accueil
cinemare.addEventListener("click", () => {
  loader.classList.add("loaderInverse");

  // SetTimeout pour laisser le temps à l'animation de se faire
  setTimeout(() => {
    document.location.href = "../index.html";

    loader.classList.remove("loaderInverse");
  }, 500);
});

// Function pour le menu burger
function Menu(e) {
  let menu = document.querySelector("ul");
  e.classList.contains("fa-bars")
    ? (e.classList.replace("fa-bars", "fa-xmark"),
      menu.classList.add("top-[80px]"),
      menu.classList.add("opacity-100"))
    : (e.classList.replace("fa-xmark", "fa-bars"),
      menu.classList.remove("top-[80px]"),
      menu.classList.remove("opacity-100"));
}
