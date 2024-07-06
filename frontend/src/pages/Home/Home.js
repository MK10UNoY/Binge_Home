import React from 'react';
import './Home.scss'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
        const navigate = useNavigate(); // Hook for programmatic navigation
      
        const handleSeeMoreClick = () => {
          navigate('/genres'); // Redirect to /genres route
        };

  const movies = [
    { title: 'Movie 1', description: 'Description for Movie 1', image: 'placeholder1.jpg' },
    { title: 'Movie 2', description: 'Description for Movie 2', image: 'placeholder2.jpg' },
    { title: 'Movie 3', description: 'Description for Movie 3', image: 'placeholder3.jpg' },
  ];

  return (
    <div className="homepage">
      <nav className="navbar">
        <div className="navbar-logo">MovieApp</div>
        <ul className="navbar-links">
          <li className="dropdown">
            <button className="dropbtn">Genres</button>
            <div className="dropdown-content">
              <a href="#">Action</a>
              <a href="#">Drama</a>
              <a href="#">Comedy</a>
              <a href="#" onClick={handleSeeMoreClick}>See More</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Recommendations</button>
            <div className="dropdown-content">
              <a href="#">Top Picks</a>
              <a href="#">New Releases</a>
              <a href="#">Trending</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">Discover</button>
            <div className="dropdown-content">
              <a href="#">Popular</a>
              <a href="#">Upcoming</a>
              <a href="#">Classics</a>
            </div>
          </li>
        </ul>
        <div className="navbar-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="navbar-login">
          <a href="/login">Login</a>
        </div>
      </nav>

      <div className="movie-list">
        {movies.map((movie, index) => (
          <div className="movie-item" key={index}>
            <img src={movie.image} alt={movie.title} />
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
