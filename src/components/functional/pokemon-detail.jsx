import React from "react";
import { Modal } from "react-bootstrap";

const PokemonDetail = ({ pokemon, handleClose }) => {
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
            <h4 className="title-big">
              Nombre Pokemon <small className="pokemon-id">Id123456</small>
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  className="img-responsive w-100"
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <p className="pokemon-description">Descripción</p>
                    </div>
                  </div>
                  <table className="table table-hover">
                    <tbody>
                      <tr>
                        <td>
                          <strong>Alto:</strong>
                        </td>
                        <td>Doe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Peso:</strong>
                        </td>
                        <td>Moe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Categoría:</strong>
                        </td>
                        <td>Moe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Genero:</strong>
                        </td>
                        <td>Moe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Habitat:</strong>
                        </td>
                        <td>Moe</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Color:</strong>
                        </td>
                        <td>Moe</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="container">
                  <div className="row">
                    <h5 className="sub-title">Tipos</h5>
                    <div className="col-12">
                      <span className="badge badge-pill badge-success mr-1">
                        success
                      </span>
                      <span className="badge badge-pill badge-success mr-1">
                        success
                      </span>
                      <span className="badge badge-pill badge-success mr-1">
                        Primary
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="container-fluid">
            <h5 className="title">Evolución</h5>
            <div className="row">
              <div className="col-4">
                <img
                  className=" img-circle"
                  src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/132.png"
                  alt=""
                  width="150px"
                  height="150px"
                />
                <small>
                  <strong>#1</strong>
                </small>
              </div>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PokemonDetail;
