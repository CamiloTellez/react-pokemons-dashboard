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
