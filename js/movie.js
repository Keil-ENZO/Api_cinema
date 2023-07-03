const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
console.log(id);

const apiKey = "ceaf9fbc0cba12fa894f98fa5d74de85";
const url =
  `https://api.themoviedb.org/3/movie/${id}?api_key=` +
  apiKey +
  `&language=fr-FR&append_to_response=videos`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    poster.src = "https://image.tmdb.org/t/p/w500" + data.poster_path;

    title.innerHTML = data.title;

    note.innerHTML = Math.round(data.vote_average * 10) + "%";
    if (data.vote_average * 10 <= 70 && data.vote_average * 10 >= 40) {
      note.classList.add("bg-yellow-500");
    } else if (data.vote_average * 10 < 40) {
      note.classList.add("bg-red-500");
    } else {
      note.classList.add("bg-green-500");
    }

    description.innerHTML = data.overview;

    annonce.src = "https://www.youtube.com/embed/" + data.videos.results[0].key;
  });
