import { useState } from "react";
import React from "react";
import Axios from "axios";
import ModalBootstrap from "../ModalBootstrap/ModalBootstrap";

// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function RegistrarEstudiantes() {
  const [show, setShow] = useState(false);
  const [formulario, setFormulario] = useState({
    documento: "",
    nombre_completo: "",
    telefono_fijo: "",
    celular: "",
    correo_estudiantil: "",
    correo_personal: "",
    codigo_plan: "",
  });
  const [isError, setIsError] = useState(false);

  function handleChange(e) {
    const inputValue = e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: inputValue,
    });
  }
  const postEstudiante = () => {
    Axios.post(
      "http://localhost:8080/estudiante",
      {
        documento: formulario.documento,
        nombre_completo: formulario.nombre_completo,
        telefono_fijo: formulario.telefono_fijo,
        celular: formulario.celular,
        correo_estudiantil: formulario.correo_estudiantil,
        correo_personal: formulario.correo_personal,
        codigo_plan: formulario.codigo_plan,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )
      .then((res) => {
        console.log(`CÓDIGO POST ESTUDIANTE: ${res.status}`);
        setIsError(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
      });
  };

  function multipleFunction() {
    postEstudiante();
    setShow(true);
  }

  return (
    <div className="d-flex flex-column align-items-center">
      <ModalBootstrap
        show={show}
        handleClose={() => setShow(false)}
        isError={isError}
        Msg={'Se ha creado el registro exitosamente'}
      />
      <h2 style={{ color: "white" }}>Registra un estudiante</h2>
      <div>
        <div className="form-group">
          <label>Documento</label>
          <input
            type="number"
            name="documento"
            className="form-control"
            value={formulario.documento}
            onChange={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Docente, recuerde colocar el documento de identidad sin errores. Ya
            que después no sé podrá editar si no se escala con la
            administración.
          </small>
        </div>
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
          <label>Telefono Fijo</label>
          <input
            type="number"
            name="telefono_fijo"
            className="form-control"
            value={formulario.telefono_fijo}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Celular</label>
          <input
            type="number"
            name="celular"
            className="form-control"
            value={formulario.celular}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo institucional</label>
          <input
            type="email"
            name="correo_estudiantil"
            className="form-control"
            value={formulario.correo_estudiantil}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Correo Personal</label>
          <input
            type="email"
            name="correo_personal"
            className="form-control"
            value={formulario.correo_personal}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Código Plan</label>
          <input
            type="number"
            name="codigo_plan"
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

export default RegistrarEstudiantes;
