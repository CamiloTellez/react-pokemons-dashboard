import React from "react";
import useFetch from "../../hooks/pokemons-fetch-list";
const FilterColor = () => {
  const url = `https://pokeapi.co/api/v2/pokemon-color`;
  const { status, data } = useFetch(url);

  let pokemonsColor = status === "fetched" && data.results ? data.results : [];
  return (
    <div className="row">
      <div className="col-12">
        <h5 className="sub-title">Color:</h5>
      </div>

      {pokemonsColor.map((color) => (
        <div className="col-6 mt-1" key={color.name}>
          <div
            className="square-color"
            style={{ backgroundColor: color.name }}
          ></div>
          <span>{color.name}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterColor;
