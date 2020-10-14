import React, { useState } from "react";
import PokemonDetail from "./pokemon-detail";

const PokemonCard = ({ pokemon }) => {
  const pokemonId =
    pokemon.entry_number <= 9
      ? "00" + pokemon.entry_number
      : pokemon.entry_number > 9 && pokemon.entry_number <= 99
      ? "0" + pokemon.entry_number
      : pokemon.entry_number;

  const [show, setShow] = useState(false);
  const viewPokemonDetail = () => setShow(true);
  const onClose = () => setShow(false);

  let imgUrl = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
  return (
    <div className="col-md-4">
      <div
        className="card mb-4 shadow w-75 pokemon-card"
        onClick={() => viewPokemonDetail()}
      >
        <img
          className="card-img-top"
          src={imgUrl + pokemonId + ".png"}
          alt=""
        />
        <div className="card-body">
          <h5 className="pokemon-name">{pokemon.pokemon_species.name}</h5>
        </div>
      </div>
      {show ? (
        <PokemonDetail pokemon={pokemon} handleClose={() => onClose()} />
      ) : (
        ""
      )}
    </div>
  );
};

export default PokemonCard;
