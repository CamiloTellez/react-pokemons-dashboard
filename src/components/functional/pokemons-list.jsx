import React from "react";

import PokemonCard from "./pokemon-card";
/* Este componente se encarga de renderizar la lista de pokemones que se le envian desde el componente superior */
const PokemonsList = ({ pokemonsList }) => {
  return (
    <div className="container">
      <div className="row text-left mb-4">
        <div className="col-12 ">
          <h4>Selecciona un Pokemon para ver más información</h4>
        </div>
      </div>
      <div className="row ">
        {pokemonsList.data.map((pk) => (
          <PokemonCard pokemon={pk} key={pk.entry_number} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
