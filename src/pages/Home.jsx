import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        return response.json();
      })
      .then((data) => setMovies(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      <header>
        <NavBar className="navbar" />
      </header>
      <main>
        <h1>Home Page</h1>
        {error && <p>Error: {error}</p>}
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Home;
