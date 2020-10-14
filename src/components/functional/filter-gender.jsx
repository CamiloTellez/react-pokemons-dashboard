import React from "react";
import useFetch from "../../hooks/pokemons-fetch-list";
const FilterGender = () => {
  const url = `https://pokeapi.co/api/v2/gender`;
  const { status, data } = useFetch(url);

  let pokemonsGender = status === "fetched" && data.results ? data.results : [];
  return (
    <div className="row">
      <div className="col-12">
        <h5 className="sub-title">Genero:</h5>
      </div>

      <div className="col-12 mt-1">
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio" />
            All
          </label>
        </div>

        {pokemonsGender.map((gender) => (
          <div className="form-check" key={gender.name}>
            <label className="form-check-label">
              <input
                type="radio"
                className="form-check-input"
                name={gender.name}
              />
              {gender.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterGender;
