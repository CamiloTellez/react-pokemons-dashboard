import React, { useState } from "react";
import PokemonDetail from "./pokemon-detail";

const PokemonCard = () => {
  const [show, setShow] = useState(false);
  const viewPokemonDetail = () => setShow(true);
  const onClose = () => setShow(false);

  return (
    <div className="col-md-4">
      <div
        className="card mb-4 shadow-sm w-75"
        onClick={() => viewPokemonDetail()}
      >
        <img
          className="card-img-top"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title ">Nombre Pokemon</h5>
        </div>
      </div>
      {show ? (
        <PokemonDetail
          pokemon={{ pokePrueba: 1 }}
          handleClose={() => onClose()}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PokemonCard;
