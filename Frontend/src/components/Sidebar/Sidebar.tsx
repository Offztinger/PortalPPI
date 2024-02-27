import Link from "next/link";

export default function Sidebar() {
  return (
    <div
      style={{ marginLeft: "15px" }}
      className="d-flex flex-column w-25 justify-content-around"
    >
      <Link className="mb-3 btn btn-success" href="/admin/createEstudiante">
        Crear estudiante
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/createEquipo">
        Crear equipo
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/createAsesor">
        Crear asesor
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/createDocente">
        Crear docente
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/createCita">
        Crear cita
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/readEquipos">
        Ver equipos
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/readDocentes">
        Ver docentes
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/readAsesores">
        Ver asesores
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/readAsesores">
        Ver asesores
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/home">
        Ver estudiantes
      </Link>
      <Link className="mb-3 btn btn-success" href="/admin/calendar">
        Ver calendario
      </Link>
    </div>
  );
}
