import React from "react";

import PokemonCard from "./pokemon-card";

const PokemonsList = () => {
  return (
    <div className="container">
      <div className="row text-left mb-4">
        <div className="col-12 ">
          <h4>Selecciona un Pokemon para ver más información</h4>
        </div>
      </div>
      <div className="row ">
        <PokemonCard />
      </div>
    </div>
  );
};

export default PokemonsList;
