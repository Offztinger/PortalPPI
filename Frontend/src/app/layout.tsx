"use client";
import { useEffect, useState } from "react";
// import { backendURL } from "../../../config/constants";
// import { estudiante } from "../../../config/constants";
import "../styles/styles.css";
import correo from "../icons/envelope.png";
import calendario from "../icons/calendar-page.png";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "@/components/Sidebar/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //   function zero() {
  //     if (day < 10) {
  //       day = "0" + day;
  //     }
  //     if (month < 10) {
  //       month = "0" + month;
  //     }
  //   }

  const todayDate = new Date();
  const year = todayDate.getFullYear();
  let month = todayDate.getMonth() + 1;
  let day = todayDate.getDate();
  //   zero();
  const today = `${year}-${month}-${day}`;
  const notificationPopup = document.getElementById("notification-popup");
  const closeBtn = document.getElementById("close-btn");
  const [putIDEs, setPutIDEs] = useState();
  const [cronograma, setCronograma] = useState([]);

  //   Yeah, it's working.
  const cronogramaActual = cronograma.filter(
    (actividad: { fecha: string }) => actividad.fecha === today
  );


  let popUpOpen = false;
  const openPopUp = () => {
    const popUp = document.getElementById("notification-popup");
    if (popUp != null) {
      popUpOpen
        ? (popUp.style.display = "none")
        : (popUp.style.display = "block");
    }

    popUpOpen = !popUpOpen;
  };

  return (
    <html lang="en">
      <head>
        <title>React SSR</title>
      </head>
      <body>
        <main id="root">
          <div className="header">
            <div className="logos-header">
              <button id="notification-btn" onClick={openPopUp}>
                <Image
                  src={correo}
                  className="correo-logo"
                  alt="Soy el correo"
                />
              </button>
              <div id="notification-popup">
                <div className="popup-content">
                  <div className="popup-header">
                    <h3>Notificaciones</h3>
                    <button id="close-btn">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </button>
                  </div>
                  <ul className="notifications-list">
                    {cronogramaActual.map(
                      (
                        actividades: { titulo: string; hora_inicio: string },
                        index
                      ) => {
                        return (
                          <li
                            className="d-flex justify-content-start"
                            key={index}
                          >
                            <a href="#">
                              <strong>Actividad: </strong>
                              {actividades.titulo} <strong>Hora: </strong>
                              {actividades.hora_inicio}
                            </a>
                          </li>
                        );
                      }
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <Sidebar />
            <div className="contenedorPrincipal d-flex flex-column align-items-center justify-content-center">
              {children}
            </div>
          </div>
        </main>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  );
}
