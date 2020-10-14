import React, { useState } from "react";
import Navbar from "./functional/navbar";
import PokemonsList from "./functional/pokemons-list";
import FilterType from "./functional/filter-type";
import FilterColor from "./functional/filter-color";
import FilterGender from "./functional/filter-gender";

import useFetch from "../hooks/pokemons-fetch-list";

/* Componente principal del dashboard, se encarga de administrar el estado y crea el layout principal */

const Dashboard = () => {
  const url = `https://pokeapi.co/api/v2/pokedex/national`;
  const { status, data } = useFetch(url); ///Consume el hook para cachear la lista de los pokemones

  let pokemonsList =
    status === "fetched" && data.pokemon_entries ? data.pokemon_entries : [];

  const [currentPage, setCurrentPage] = useState(1);
  const [filteredList, setFiltered] = useState([]);
  const [filtered, setIsFiltered] = useState(false);

  ///Función que se ejecuta cuando se oprime el botón ver mas, realiza un tipo de  paginación para cargar más pokemones
  const loadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  //Función ejecutada por el buscador de la barra de navegación cuando un usuario escribe dentro del campo
  //filtra la lista de pokemones por id o por nombre y actualiza el estado del dashboard
  const onInputFilterHandler = (e) => {
    let q = e.target.value;
    if (!q || q === "") {
      setFiltered([]);
      setIsFiltered(false);
      return;
    }

    let dataTmp = [...pokemonsList];

    let newPokemonsList = dataTmp.filter((v) => {
      let dataObjectQuery = v.entry_number + v.pokemon_species.name + " ";
      if (dataObjectQuery && q) {
        if (dataObjectQuery.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });

    setFiltered(newPokemonsList);
    setIsFiltered(true);
    return;
  };

  return (
    <div>
      <Navbar onInputQuery={onInputFilterHandler} />
      <main className="container-fluid  main-container">
        <div className="row">
          <div className="col-md-3">
            <div className="card my-4 mt-5 shadow-sm p-3 mb-5 bg-white rounded card-filters ">
              <h4 className="title">
                Filtros
                <img
                  className="ml-2"
                  alt=""
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACoElEQVRoge2YP2gTYRTAfy+NoXYpDnZp3Vzs2RY7OLh16OQkiFqVikUCKjiWKgilf0xw0VGHiiCd6qII6mBRcKggqaZcI7UgYmoRoSBdapvkObS2MZdc7i6XhMr9luTeve/9uXff+77vICAgIKCeSKGg59Gv44LcB1pBSwwrJi+hKz7Y2JSnQaPT51ue598JWfwh94DWEpbqSZtuPth/sCSw27AmIBoF0rUPxR6FbyHVaKHcMgfyOTI0P6HCwJaBHVOy/a+II6tULV6sWtvXUqijE6mxrkulYrR9hZob914VSNjpVJm5pvDGNTsF2woAdA+ZB3Mi7xWaNyU1q8BqJsvRhVjnJ7v4yk7iRNxYFLS/RLzVQgUdKBc8OOxCszHjKcrdyuNyiMgdc6zrsRNVx210X+OPQYS33qNyzIw0yHWnymXnQD6dgx/bpCGcQNgPVZkDK0pDd2q8/avTmFwtZMnbXWlVzgBZN+MckhOVs26CBw8rcTJuTAuMuR1XFmXEvHX4pdthnrYSHyLtIwgvvIwtjrya/5zy9FC87YWGJZfZwznAVbmLoqQjufU+pk55ei09b+bMYWMF5TSw7tUGsIGE+mZj3T+9GqhoN5qMGe8UHfJuQQbNcaOi1uyqjZai84Y5BZwEN21UnpjjxgmbE48jfDkPZCNcBMou+3ksNmbWLlQaPPhUAYCOm6kOyeZmFG0qvFdQgbVcSI7Njxqzfvj17UQ2N3poTgXLgaMQEbniV/DgYwX+cqDvmSoCIigCbP1uXS9P9vrq8z88E+8yggTqTZBAvQkSqDdBAvUmSMAVwm+/TdY2AdWHfpusUQK6oEr/8mTvZb8th/02mI/AF5D40vfIA173ZKrhowoJyBuFFiC+tLE66fVzSUBAgDP+AA9E1iFhhBpkAAAAAElFTkSuQmCC"
                ></img>
              </h4>
              <hr />
              <div className="card-body">
                <FilterType />
                <hr />
                <FilterColor />
                <hr />
                <FilterGender />
                <hr />
                <button type="button" className="btn btn-warning">
                  Limpiar filtros
                </button>
              </div>
            </div>
          </div>

          {/* Sección principal con la lista de tarjetas y pokemones */}
          <div className="col-md-9">
            <PokemonsList
              pokemonsList={paginator(
                !filtered ? pokemonsList : filteredList,
                currentPage
              )}
            />

            {pokemonsList.length === 0 ? (
              <div>
                <h4>CARGANDO...</h4>
                <div className="spinner-border text-success"></div>
              </div>
            ) : (
              ""
            )}
            {filtered && pokemonsList.length > 20 ? (
              <div className="text-center">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => loadMore()}
                >
                  Cargar Más
                </button>
              </div>
            ) : (
              ""
            )}

            {filtered && pokemonsList.length === 0 ? (
              <p> No se encontraron resultados</p>
            ) : (
              ""
            )}
          </div>
        </div>
      </main>
    </div>
  );

  //Función de paginación o ver más
  function paginator(items, current_page) {
    let page = current_page || 1,
      per_page = current_page * 20,
      //  offset = (page - 1) * per_page,
      paginatedItems = items.slice(0, per_page),
      total_pages = Math.ceil(items.length / per_page);

    return {
      page: page,
      per_page: per_page,
      pre_page: page - 1 ? page - 1 : null,
      next_page: total_pages > page ? page + 1 : null,
      total: items.length,
      total_pages: total_pages,
      data: paginatedItems,
    };
  }
};

export default Dashboard;
