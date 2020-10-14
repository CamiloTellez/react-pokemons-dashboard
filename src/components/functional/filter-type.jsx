import React from "react";
import useFetch from "../../hooks/pokemons-fetch-list";

const FilterType = () => {
  const url = `https://pokeapi.co/api/v2/type`;
  const { status, data } = useFetch(url);

  let pokemonsTypes = status === "fetched" && data.results ? data.results : [];

  return (
    <div className="row">
      <div className="col-12">
        <h5 className="sub-title">Tipo:</h5>
      </div>

      {pokemonsTypes.map((type) => (
        <div className="col-6 mt-1" key={type.name}>
          <div className="form-check">
            <label className="form-check-label">
              <input
                type="checkbox"
                className="form-check-input"
                value={type.name}
              />
              {type.name}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FilterType;
