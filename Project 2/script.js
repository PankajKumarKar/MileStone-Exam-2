const API_KEY = "f926d85";
let query = "";
const movies = document.querySelector(".movies");

const searchBox = document.getElementById("searchBox");

async function fetchMovieDb() {
  if (!searchBox.value) {
    return alert("Enter a Movie Name ..");
  }

  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
    );
    const moviedDb = await response.json();

    moviedDb.Search.map((movie) => {
      const div = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("p");
      const button = document.createElement("button");
      img.src = movie.Poster;
      title.innerText = movie.Title;
      button.innerText = "Watch Movie";
      div.appendChild(img);
      div.appendChild(title);
      div.appendChild(button);
      movies.appendChild(div);
    });
  } catch (error) {
    alert("Not Found !..");
  }
}

const searchFunction = () => {
  query = searchBox.value;
  fetchMovieDb();
};

searchBox.addEventListener("change", searchFunction);
