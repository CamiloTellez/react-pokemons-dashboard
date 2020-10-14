import React from "react";

const FilterGender = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h5>Genero:</h5>
      </div>

      <div className="col-12 mt-1">
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio" />
            Todos
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio" />
            Macho
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio" />
            Femenino
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label">
            <input type="radio" className="form-check-input" name="optradio" />
            Indefinido
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterGender;
