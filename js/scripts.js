const apiKey = "ceaf9fbc0cba12fa894f98fa5d74de85";
const url =
  "https://api.themoviedb.org/3/discover/movie?api_key=" +
  apiKey +
  "&language=fr-FR&page=1&sort_by=popularity.desc";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    document.getElementById("title").innerHTML = data.results[0].title;

    //poster
    document.getElementById("poster").src =
      "https://image.tmdb.org/t/p/w500" + data.results[0].poster_path;

    // //image
    // document.getElementById("video").src =
    //   "https://image.tmdb.org/t/p/w500" + data.backdrop_path;
  });
