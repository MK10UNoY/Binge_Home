import React from "react";
import "./Genres.css";
import actionImage from "./assets/action.jpeg";
import adventureImage from "./assets/adventure.jpeg";
import animationImage from "./assets/animation.jpeg";
import biographyImage from "./assets/any.jpeg";
import comedyImage from "./assets/any.jpeg";
import crimeImage from "./assets/any.jpeg";
import documentaryImage from "./assets/any.jpeg";
import dramaImage from "./assets/any.jpeg";
import familyImage from "./assets/any.jpeg";
import fantasyImage from "./assets/any.jpeg";
import historyImage from "./assets/any.jpeg";
import horrorImage from "./assets/any.jpeg";
import musicalImage from "./assets/any.jpeg";
import mysteryImage from "./assets/any.jpeg";
import romanceImage from "./assets/any.jpeg";
import sciFiImage from "./assets/any.jpeg";
import sportImage from "./assets/any.jpeg";
import thrillerImage from "./assets/any.jpeg";
import warImage from "./assets/any.jpeg";
import westernImage from "./assets/any.jpeg";

const Genres = () => {
  const genres = [
    { genre: "Action", image: actionImage },
    { genre: "Adventure", image: adventureImage },
    { genre: "Animation", image: animationImage },
    { genre: "Biography", image: biographyImage },
    { genre: "Comedy", image: comedyImage },
    { genre: "Crime", image: crimeImage },
    { genre: "Documentary", image: documentaryImage },
    { genre: "Drama", image: dramaImage },
    { genre: "Family", image: familyImage },
    { genre: "Fantasy", image: fantasyImage },
    { genre: "History", image: historyImage },
    { genre: "Horror", image: horrorImage },
    { genre: "Musical", image: musicalImage },
    { genre: "Mystery", image: mysteryImage },
    { genre: "Romance", image: romanceImage },
    { genre: "Sci-Fi", image: sciFiImage },
    { genre: "Sport", image: sportImage },
    { genre: "Thriller", image: thrillerImage },
    { genre: "War", image: warImage },
    { genre: "Western", image: westernImage },
  ];

  return (
    <div className="genres-page">
      <h1>Genres</h1>
      <div className="genre-list">
        {genres.map((genre, index) => (
          <div className="genre-card" key={index}>
            <div
              className="genre-content"
              style={{
                backgroundImage: `url(${genre.image})`,
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2>{genre.genre}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
