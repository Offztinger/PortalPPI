import React from "react";
import { useState, useEffect } from "react";

function CrearEquipos() {
  const [formulario, setFormulario] = useState({
    documento: "",
  });
  const [equipos, setEquipos] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  function handleChange(e) {
    const inputValue = e.target.value;
    setFormulario({
      ...formulario,
      [e.target.name]: inputValue,
    });
  }
  const buscarEstudiante = async (documento) => {
    const response = await fetch(
      `http://localhost:8080/estudiante/${documento}`,
      {
        method: "GET",
      }
    );
    const responseJSON = await response.json();
    setEstudiantes([...estudiantes, responseJSON]);
  };

  useEffect(() => {
    const estudiantes = JSON.parse(localStorage.getItem('estudiantes'));
    if (estudiantes) {
     setEstudiantes(estudiantes);
    }
  }, []);

  console.log(estudiantes);
  return (
    <div>
      <div>
        <p>Digite un número de cédula para añadir al equipo</p>
        <form>
          <div
            style={{ border: "1px solid black", borderRadius: "20px" }}
            className="d-flex justify-content-between align-items-center"
          >
            <input
              className="w-100"
              style={{
                border: "none",
                background: "transparent",
                outline: "none",
                paddingLeft: "5px",
                fontSize: "15px",
              }}
              type="number"
              name="documento"
              value={formulario.documento}
              onChange={handleChange}
            />
            <button
              onClick={() => {
                buscarEstudiante(formulario.documento);
              }}
            >
              <svg
                fill="#000000"
                height="20px"
                style={{ margin: "5px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre Completo</th>
            <th scope="col">Modulo Sol</th>
            <th scope="col">Docente Encargado</th>
            <th scope="col">Numero Equipo</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo, index) => {
            return (
              <tr key={index}>
                <td>{equipo.nombre_completo}</td>
                <td>{equipo.modulo_sol}</td>
                <td>{equipo.docente_encargado}</td>
                <td>{equipo.numero_equipo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CrearEquipos;
