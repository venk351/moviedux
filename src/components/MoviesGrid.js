import React, { useState, useEffect } from "react";
import "../styles.css";
import MoviesCard from "./MoviesCard";

export default function MoviesGrid({movies, toggleWatchList, watchList}) {
  

  const [searchTerm, setSearchTerm] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All");

  

  const getSearchTerm = (e) => setSearchTerm(e.target.value);

  const handleGenre = (e) => setGenre(e.target.value);
  const handleRating = (e) => setRating(e.target.value);

  const matchGenre = (movies, genre) => genre==="All Genre" || movies.genre.toLowerCase()===genre.toLowerCase()
  const matchSearchTerm = (movies, searchTerm) => movies.title.toLowerCase().includes(searchTerm.toLowerCase())
  const matchRating = (movies, rating) => {
    if (rating === "Good") return movies.rating >= 8;
    else if (rating === "Ok") return movies.rating >= 5 && movies.rating < 8;
    else if (rating === "Bad") return movies.rating < 5;
    else return true;
  }

  const filteredMovie = movies.filter(
    (movie) => matchGenre(movie, genre) && matchSearchTerm(movie, searchTerm) && matchRating(movie, rating)
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Movies..."
        value={searchTerm}
        onChange={getSearchTerm}
      />
      <div className="filter-bar">
        <div className="filter-slot">
            <label>Genre</label>
            <select className="filter-dropdown" value={genre} onChange={handleGenre}>
                <option>All Genre</option>
                <option>Drama</option>
                <option>Fantasy</option>
                <option>Action</option>
                <option>Horror</option>
            </select>
        </div>
        <div className="filter-slot">
            <label>Rating</label>
            <select className="filter-dropdown" value={rating} onChange={handleRating}>
                <option>All</option>
                <option>Good</option>
                <option>Ok</option>
                <option>Bad</option>
            </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovie.map((movie) => (
          <MoviesCard movie={movie} toggleWatchList={toggleWatchList} isWatchListed={watchList.includes(movie.id)}></MoviesCard>
        ))}
      </div>
    </div>
  );
}
