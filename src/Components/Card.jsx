import React from "react";
import { Link } from "react-router-dom";
import { useFavorites } from '../Routes/FavoritesContext'; 
import "./Card.css";


const Card = ({ name, username, id }) => {

  const { addToFavorites, removeFromFavorites, favorites } = useFavorites();
  const isFav = favorites.some((fav) => fav.id === id);

  const handleFavClick = () => {
    if (isFav) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ id, name, username });
    }
  };

  return (
    
    <div className={`card ${isFav ? "fav" : ""}`}>
      <Link to={`/dentist/${id}`}>
        <img
          src={`/images/${id}.jpg`}
          alt={name}
          className="card-img" 
        />
        <h3>{name}</h3>
        <p>Nombre: {username}</p>
      </Link>
      <button onClick={handleFavClick} className="favButton">
        {isFav ? "Remove fav" : "Add fav"}
      </button>
    </div>
    
  );
};

export default Card;