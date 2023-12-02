import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'; 
import { useFavorites } from '../Routes/FavoritesContext';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);
  const { addToFavorites, removeFromFavorites, favorites } = useFavorites(); 
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setDentist(data))
      .catch(error => console.error(error));
  }, [id]);

  useEffect(() => {
    setIsFav(favorites.some(fav => fav.id === id));
  }, [favorites, id]);

  const imageUrl = `/images/${id}.jpg`;

  const handleFavClick = () => {
    if (isFav) {
      removeFromFavorites(id);
      setIsFav(false);
    } else {
      addToFavorites({ id, name: dentist.name, username: dentist.username });
      setIsFav(true);
    }
  };

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-container">
      <div className="detail-box">
        <h1 className="detail-title">Detalle {dentist.name}</h1>
        <img src={imageUrl} alt={dentist.name} className="detail-image" />
        <div className="detail-info">
          <p><strong>Nombre:</strong> {dentist.name}</p>
          <p><strong>Email:</strong> {dentist.email}</p>
          <p><strong>Teléfono:</strong> {dentist.phone}</p>
          <p><strong>Website:</strong> {dentist.website}</p>
        </div>
        <button onClick={handleFavClick} className="favButton">
          {isFav ? "Remove fav" : "Add fav"}
        </button>
      </div>
    </div>
  );
};

export default Detail;