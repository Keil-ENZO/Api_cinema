const apiKey = "ceaf9fbc0cba12fa894f98fa5d74de85";
const page = 1;
const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  apiKey +
  `&language=fr-FR&page=${page}&sort_by=popularity.desc`;
const cardHoverState = {};
const vote =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  apiKey +
  `&language=fr-FR&page=${page}&sort_by=vote_average.desc&vote_count.gte=1000 `;

const prochainement =
  "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  apiKey +
  `&language=fr-FR`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let count = 0;
    let cardDisplay = 0;
    let moviesId = data.results.map((movie) => movie.id);
    const screenWidth = window.innerWidth;

    console.log(screenWidth);

    for (let i = 0; i < data.results.length; i++) {
      if (screenWidth < 460) {
        cardDisplay = 1;
      } else if (screenWidth < 700) {
        cardDisplay = 2;
      } else if (screenWidth < 950) {
        cardDisplay = 3;
      } else if (screenWidth < 1200) {
        cardDisplay = 4;
      } else {
        cardDisplay = 5;
      }

      if (count < cardDisplay) {
        const info = data.results[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", moviesId[i]);

        const poster = document.createElement("img");
        poster.classList.add("poster");
        poster.setAttribute("id", "poster");
        poster.src = "https://image.tmdb.org/t/p/w500" + info.poster_path;

        const note = document.createElement("p");
        note.classList.add("note");
        note.setAttribute("id", "note");
        note.innerHTML = info.vote_average * 10 + "%";

        if (info.vote_average * 10 <= 70 && info.vote_average * 10 >= 40) {
          note.classList.add("bg-yellow-500");
        } else if (info.vote_average * 10 < 40) {
          note.classList.add("bg-red-500");
        } else {
          note.classList.add("bg-green-500");
        }

        const title = document.createElement("h2");
        title.classList.add("title");
        title.setAttribute("id", "title");
        if (info.title.length > 20) {
          title.innerHTML = info.title.substring(0, 20) + "...";
        } else {
          title.innerHTML = info.title;
        }

        const date = document.createElement("p");
        date.classList.add("title");
        date.setAttribute("id", "date");
        date.innerHTML = formatDate(info.release_date);

        card.appendChild(poster);
        card.append(note);
        card.appendChild(title);
        card.appendChild(date);
        best.appendChild(card);

        count++;

        poster.addEventListener("mouseover", () => {
          const cardId = card.getAttribute("id");
          trailer(cardId);
        });

        card.addEventListener("mouseout", () => {
          const iframe = card.querySelector("iframe");
          iframe.replaceWith(poster);
        });

        card.addEventListener("click", () => {
          loader.classList.add("loader");

          setTimeout(() => {
            loader.classList.remove("loader");
            document.location.href =
              "../pages/movie.html?id=" + card.getAttribute("id");
          }, 500);
        });
      }
    }
  });

fetch(vote)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let count = 0;
    let cardDisplay = 0;
    let moviesId = data.results.map((movie) => movie.id);
    const screenWidth = window.innerWidth;

    console.log(screenWidth);

    for (let i = 0; i < data.results.length; i++) {
      if (screenWidth < 460) {
        cardDisplay = 1;
      } else if (screenWidth < 700) {
        cardDisplay = 2;
      } else if (screenWidth < 950) {
        cardDisplay = 3;
      } else if (screenWidth < 1200) {
        cardDisplay = 4;
      } else {
        cardDisplay = 5;
      }

      if (count < cardDisplay) {
        const info = data.results[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", moviesId[i]);

        const poster = document.createElement("img");
        poster.classList.add("poster");
        poster.setAttribute("id", "poster");
        poster.src = "https://image.tmdb.org/t/p/w500" + info.poster_path;

        const note = document.createElement("p");
        note.classList.add("note");
        note.setAttribute("id", "note");
        note.innerHTML = info.vote_average * 10 + "%";

        if (info.vote_average * 10 <= 70 && info.vote_average * 10 >= 40) {
          note.classList.add("bg-yellow-500");
        } else if (info.vote_average * 10 < 40) {
          note.classList.add("bg-red-500");
        } else {
          note.classList.add("bg-green-500");
        }

        const title = document.createElement("h2");
        title.classList.add("title");
        title.setAttribute("id", "title");
        if (info.title.length > 20) {
          title.innerHTML = info.title.substring(0, 20) + "...";
        } else {
          title.innerHTML = info.title;
        }

        const date = document.createElement("p");
        date.classList.add("title");
        date.setAttribute("id", "date");
        date.innerHTML = formatDate(info.release_date);

        card.appendChild(poster);
        card.append(note);
        card.appendChild(title);
        card.appendChild(date);
        bestNote.appendChild(card);

        count++;

        poster.addEventListener("mouseover", () => {
          const cardId = card.getAttribute("id");
          trailer(cardId);
        });

        card.addEventListener("mouseout", () => {
          const iframe = card.querySelector("iframe");
          iframe.replaceWith(poster);
        });

        card.addEventListener("click", () => {
          loader.classList.add("loader");

          setTimeout(() => {
            loader.classList.remove("loader");
            document.location.href =
              "../pages/movie.html?id=" + card.getAttribute("id");
          }, 500);
        });
      }
    }
  });

fetch(prochainement)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let count = 0;
    let cardDisplay = 0;
    let moviesId = data.results.map((movie) => movie.id);
    const screenWidth = window.innerWidth;

    console.log(screenWidth);

    for (let i = 0; i < data.results.length; i++) {
      if (screenWidth < 460) {
        cardDisplay = 1;
      } else if (screenWidth < 700) {
        cardDisplay = 2;
      } else if (screenWidth < 950) {
        cardDisplay = 3;
      } else if (screenWidth < 1200) {
        cardDisplay = 4;
      } else {
        cardDisplay = 5;
      }

      if (count < cardDisplay) {
        const info = data.results[i];

        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", moviesId[i]);

        const poster = document.createElement("img");
        poster.classList.add("poster");
        poster.setAttribute("id", "poster");
        poster.src = "https://image.tmdb.org/t/p/w500" + info.poster_path;

        const note = document.createElement("p");
        note.classList.add("note");
        note.setAttribute("id", "note");
        note.innerHTML = info.vote_average * 10 + "%";

        if (info.vote_average * 10 <= 70 && info.vote_average * 10 >= 40) {
          note.classList.add("bg-yellow-500");
        } else if (info.vote_average * 10 < 40) {
          note.classList.add("bg-red-500");
        } else {
          note.classList.add("bg-green-500");
        }

        const title = document.createElement("h2");
        title.classList.add("title");
        title.setAttribute("id", "title");
        if (info.title.length > 20) {
          title.innerHTML = info.title.substring(0, 20) + "...";
        } else {
          title.innerHTML = info.title;
        }

        const date = document.createElement("p");
        date.classList.add("title");
        date.setAttribute("id", "date");
        date.innerHTML = formatDate(info.release_date);

        card.appendChild(poster);
        card.append(note);
        card.appendChild(title);
        card.appendChild(date);
        upcoming.appendChild(card);

        count++;

        poster.addEventListener("mouseover", () => {
          const cardId = card.getAttribute("id");
          trailer(cardId);
        });

        card.addEventListener("mouseout", () => {
          const iframe = card.querySelector("iframe");
          iframe.replaceWith(poster);
        });

        card.addEventListener("click", () => {
          loader.classList.add("loader");

          setTimeout(() => {
            loader.classList.remove("loader");
            document.location.href =
              "../pages/movie.html?id=" + card.getAttribute("id");
          }, 500);
        });
      }
    }
  });

function trailer(id) {
  const card = document.getElementById(id);
  const poster = card.querySelector(".poster");

  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const video = data.results[0].key;

      const iframe = document.createElement("iframe");
      iframe.setAttribute("src", `https://www.youtube.com/embed/${video}`);
      iframe.setAttribute("width", "100%");
      iframe.setAttribute("height", "100%");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");

      // Supprimer l'élément poster et le remplacer par l'iframe
      if (poster && poster.parentNode) {
        poster.parentNode.replaceChild(iframe, poster);
      }
    });
}

function formatDate(date) {
  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("fr-FR", options);
}

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    speed: 800,
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    autoplay: {
      delay: 2000,
    },
  });

  swiper.autoplay.start();
});
