import React from "react";
import Card from "../Components/Card";
import { useFavorites } from './FavoritesContext';

function FavoritesContext() {
  const { favorites} = useFavorites();
  const estiloParrafo = {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '350px',
  };
  return (
    <>
      <h1>Dentistas Favoritos</h1>
      {favorites.length === 0 ? (
         <p style={estiloParrafo}>No hay ningun medico seleccionado como favorito</p>
      ) : (
        <div className="card-grid">
          {favorites.map((dentist) => (
            <Card
              key={dentist.id}
              name={dentist.name}
              username={dentist.username}
              id={dentist.id}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default FavoritesContext;