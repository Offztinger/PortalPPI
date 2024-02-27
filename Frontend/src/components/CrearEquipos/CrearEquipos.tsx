import { useState } from "react";
import React from "react";
import Axios from "axios";
import ModalBootstrap from "../ModalBootstrap/ModalBootstrap";

function CrearEquipos() {
  const [show, setShow] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formulario, setFormulario] = useState({
    nombre_completo: "",
    modulo_sol: "",
    docente_encargado: "",
    numero_equipo: "",
  });

  function handleChange(e) {
    const inputValue = e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: inputValue,
    });
  }

  const postEquipo = () => {
    Axios.post(
      "http://localhost:8080/equipo",
      {
        nombre_completo: formulario.nombre_completo,
        modulo_sol: formulario.modulo_sol,
        docente_encargado: formulario.docente_encargado,
        numero_equipo: formulario.numero_equipo,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        setIsError(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  function multipleFunction() {
    postEquipo();
    setShow(true);
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <ModalBootstrap
        show={show}
        handleClose={() => setShow(false)}
        isError={isError}
        Msg={"Se ha creado el registro exitosamente"}
      />
      <h2>Registra un equipo</h2>
      <div>
        <div className="form-group">
          <label>Nombre Completo</label>
          <input
            type="text"
            name="nombre_completo"
            className="form-control"
            value={formulario.nombre_completo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Modulo Sol</label>
          <input
            type="text"
            name="modulo_sol"
            className="form-control"
            value={formulario.modulo_sol}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Docente</label>
          <input
            type="text"
            name="docente_encargado"
            className="form-control"
            value={formulario.docente_encargado}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Número equipo</label>
          <input
            type="number"
            name="numero_equipo"
            className="form-control"
            value={formulario.codigo_plan}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button onClick={multipleFunction} className="btn btn-success">
            Crear estudiante
          </button>
        </div>
      </div>
    </div>
  );
}

export default CrearEquipos;
