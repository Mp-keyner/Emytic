import React, { useContext, useState } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View33 = () => {
  const { handleClick } = useContext(AppContext);
  const Styles = {
    Celdas: {
      // border: "1px solid red",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    Filas: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
    },
    line: {
      width: "98%",
      height: "1px",
      background: "black",
      margin: "3px",
    },
  };
  const useCreateX = () => {
    const [valueX, setValueX] = useState("");
    const Create = () => {
      console.log("cerate x");
      setValueX(
        <Image
          src="/img/x.png"
          width={100}
          height={100}
          alt=""
          className="w-[2pc] h-[2.4pc] m-0"
        />
      );
    };
    return {
      Create,
      valueX,
    };
  };
  const Strategy = useCreateX();
  const Strategy1 = useCreateX();
  const Strategy2 = useCreateX();
  const Strategy3 = useCreateX();
  const Strategy4 = useCreateX();
  const Strategy5 = useCreateX();
  const Strategy6 = useCreateX();
  const Strategy7 = useCreateX();
  const Strategy8 = useCreateX();
  console.log(Strategy);
  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-0 flex justify-center items-center text-center w-[100%] font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(40)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed left-[40%] top-[5%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          <b>
            JUGUEMOS Y AYUDEMOS A MILU A CREAR ESTRATEGIAS PARA MEJORAR NUESTRO
            ENTORNO Y CUIDAR NUESTRA VIDA.
          </b>
        </p>
      </div>

      <div
        className="bocadillo-cuadrado5 fixed left-[1.5rem] bottom-[-6%] z-50 "
        style={{ width: "350px" }}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <table style={{ width: "100%" }}>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Reciclar las basuras
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy.Create();
              }}
            >
              {Strategy.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Tirar la basura al piso
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy1.Create();
              }}
            >
              {Strategy1.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Hacer campañas de aseo en mi barrio
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy2.Create();
              }}
            >
              {Strategy2.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Dejar los grifos de agua abiertos para que el agua se desperdie
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy3.Create();
              }}
            >
              {Strategy3.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Colocar letreros que ensucie las paredes
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy4.Create();
              }}
            >
              {Strategy4.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Sembrar arboles
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy5.Create();
              }}
            >
              {Strategy5.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Usar el agua de lo aires para regar las plantas
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy6.Create();
              }}
            >
              {Strategy6.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Apagar las luces cuando no sea necesario utilizarlas
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy7.Create();
              }}
            >
              {Strategy7.valueX}
            </td>
          </tr>
          <div style={Styles.line}></div>
          <tr style={Styles.Filas}>
            <td style={{ ...Styles.Celdas, width: "16.3pc" }}>
              Trabajar unidos los miembros de la comunidad para mantener un buen
              entorno, limpio y agradable
            </td>
            <td
              style={{
                ...Styles.Celdas,
                width: "3.4pc",
                height: "2.4pc",
                border: "1px solid black",
              }}
              onClick={() => {
                console.log("CLik");
                Strategy8.Create();
              }}
            >
              {Strategy8.valueX}
            </td>
          </tr>
        </table>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute top-8 -left-7"
        title="Pepe el loro..."
        alt=""
      />
    </div>
  );
};

export default View33;
