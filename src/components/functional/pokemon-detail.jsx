import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";

const PokemonDetail = ({ pokemon, handleClose }) => {
  const pokemonId =
    pokemon.entry_number <= 9
      ? "00" + pokemon.entry_number
      : pokemon.entry_number > 9 && pokemon.entry_number <= 99
      ? "0" + pokemon.entry_number
      : pokemon.entry_number;

  const urlSpecies =
    "https://pokeapi.co/api/v2/pokemon-species/" + pokemon.entry_number;
  const urlPokemon =
    "https://pokeapi.co/api/v2/pokemon/" + pokemon.entry_number;

  const [loading, showLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState({});

  const fetchData = async () => {
    try {
      const responses = await Promise.all([
        fetch(urlSpecies),
        fetch(urlPokemon),
      ]);
      const data = await Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );

      if (data.length === 2) {
        setPokemonData({ ...data[0], ...data[1] });
        showLoading(false);
      }
      //  pokemonSpecie = data[1];
    } catch (err) {
      console.log("Error ", err);
    }
  };

  useEffect(() => {
    if (pokemonData.id && pokemonData.id !== "") return;
    fetchData();
  });

  let imgUrlBig = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/";
  let imgUrlLit = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

  return (
    <div>
      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 className="title-big">{pokemonData.name}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            {loading ? (
              <div>
                <h4>CARGANDO...</h4>
                <div className="spinner-border text-success"></div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="img-responsive w-100"
                    src={imgUrlBig + pokemonId + ".png"}
                    alt=""
                  />
                </div>
                <div className="col-md-6">
                  <div className="container">
                    <small className="pokemon-id my-4">
                      ID {pokemonData.id}
                    </small>
                    <table className="table table-hover">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Alto:</strong>
                          </td>
                          <td>
                            {pokemonData.height
                              ? pokemonData.height
                              : "Sin data"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Peso:</strong>
                          </td>
                          <td>
                            {pokemonData.weight
                              ? pokemonData.weight
                              : "Sin data"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Categoría:</strong>
                          </td>
                          <td>{"Sin data"}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Genero:</strong>
                          </td>
                          <td>
                            {pokemonData.gender_rate
                              ? pokemonData.gender_rate
                              : "Sin data"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Habitat:</strong>
                          </td>
                          <td>
                            {pokemonData.habitat
                              ? pokemonData.habitat.name
                              : "Sin data"}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Color:</strong>
                          </td>
                          <td>
                            {pokemonData.color
                              ? pokemonData.color.name
                              : "Sin data"}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="container">
                    <div className="row">
                      <h5 className="sub-title">Tipos</h5>
                      <div className="col-12">
                        {pokemonData.types
                          ? pokemonData.types.map((tipo) => (
                              <span
                                className="badge badge-pill badge-success mr-1"
                                key={tipo.type.name}
                              >
                                {tipo.type.name}
                              </span>
                            ))
                          : ""}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="container-fluid">
            <h5 className="title">Evolución A:</h5>
            <div className="row">
              {pokemonData.chain && pokemonData.chain.evolves_to.length > 0 ? (
                pokemonData.chain.evolves_to.map((envolveTo, idx) => (
                  <div className="col-4" key={envolveTo.species.name}>
                    <img
                      className=" img-circle"
                      src={imgUrlLit + envolveTo.species.url + ".png"}
                      alt=""
                      width="150px"
                      height="150px"
                    />
                    <p>
                      {envolveTo.species.name}
                      <small>
                        <strong>#{idx + 1}</strong>
                      </small>
                    </p>
                  </div>
                ))
              ) : (
                <p>Sin Evolución</p>
              )}
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PokemonDetail;
