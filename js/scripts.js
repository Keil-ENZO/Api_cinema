const apiKey = "ceaf9fbc0cba12fa894f98fa5d74de85";
const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  apiKey +
  "&language=fr-FR&page=1&sort_by=popularity.desc";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     document.getElementById("title").innerHTML = data.results[0].title;

//     //poster
//     document.getElementById("poster").src =
//       "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

//     // //image
//     // document.getElementById("video").src =
//     //   "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
//   });

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
});