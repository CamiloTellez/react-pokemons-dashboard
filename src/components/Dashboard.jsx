import React, { Component } from "react";
import Navbar from "./functional/navbar";
import PokemonsList from "./functional/pokemons-list";
import FilterType from "./functional/filter-type";
import FilterColor from "./functional/filter-color";
import FilterGender from "./functional/filter-gender";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <main className="container-fluid  main-container">
          <div className="row">
            <div className="col-md-3">
              <div className="card my-4 mt-5 shadow-sm p-3 mb-5 bg-white rounded">
                <h4 className="card-header">Filtros</h4>
                <div className="card-body">
                  <FilterType />
                  <hr />
                  <FilterColor />
                  <hr />
                  <FilterGender />
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <PokemonsList />

              <div className="text-center">
                <button type="button" className="btn btn-primary">
                  Cargar Más
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Dashboard;
