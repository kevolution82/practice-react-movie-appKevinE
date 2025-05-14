import React, { useState } from "react";

function MovieSelector() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [movies, setMovies] = useState([]);

  const movieDatabase = {
    Action: ["Kevin Takes Manhattan", "Kevatar the Last Airbender", "The Kevvinci Code"],
    Comedy: ["Kevception", "Step Kevins", "For Kev or For Worse"],
    Drama: ["Kevzillar", "The Kevfather", "10 Things I Hate About Kev"],
    Horror: ["Nightmare on Kev Street", "Kevraiser III", "Night of the Living Edwards"]
  };

  const handleFetchMovies = () => {
    if (!selectedGenre) {
      setError("Please select a genre before fetching these darn movies.");
      setMovies([]);
      return;
    }

    setIsLoading(true);
    setError("");
    setMovies([]);

    setTimeout(() => {
      setMovies(movieDatabase[selectedGenre]);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Select a Genre</h2>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">-- Choose Genre --</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Horror">Horror</option>
      </select>

      <button style={{ marginLeft: "1rem" }} onClick={handleFetchMovies}>
        Fetch Movies
      </button>

      {isLoading && <p>Loading these darn movies...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!isLoading && movies.length > 0 && (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MovieSelector;
