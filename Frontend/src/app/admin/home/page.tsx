"use client";
import { VerEstudiantes } from "@/components/VerEstudiantes";
import { useEffect, useState } from "react";
import { IEstudiante } from "@/models/models";

export default function HomePageChildren() {
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
  const [putIDEs, setPutIDEs] = useState<string>("");

  const fetchApi = async () => {
    const response = await fetch("http://localhost:8080/estudiante", {
      method: "GET",
    });

    const responseJSON = await response.json();
    setEstudiantes(responseJSON);

    // const response2 = await fetch("http://localhost:8080/cronograma", {
    //   method: "GET",
    // });

    // const responseJSON2 = await response2.json();
    // setCronograma(responseJSON2);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <main>
      <div>
        <div>
          <VerEstudiantes estudiantes={estudiantes} setPutIDEs={setPutIDEs}/>
        </div>
      </div>
    </main>
  );
}
