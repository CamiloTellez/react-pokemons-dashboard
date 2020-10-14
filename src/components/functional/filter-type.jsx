import React from "react";

const FilterType = () => {
  return (
    <div className="row">
      <div className="col-12">
        <h5 className="sub-title">Tipo:</h5>
      </div>

      <div className="col-6 mt-1">
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            Bug
          </label>
        </div>
      </div>
      <div className="col-6 mt-1">
        <div className="form-check">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" value="" />
            Electric
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterType;
