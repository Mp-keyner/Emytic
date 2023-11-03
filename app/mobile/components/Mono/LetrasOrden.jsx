"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import "../Styles.css";
import { AppContext } from "../Context";
import LetrasOrdenSelect from "./LetrasOrdenSelect";

const LetrasOrden = ({ to }) => {
  const { handleClick } = useContext(AppContext);
  const [showSelect, setShowSelect] = useState(false);
  const [screen, setScreen] = useState("");
  const [StatusChange, setStatusChange] = useState("");
  const tal =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c";
  const [face1, setFace1] = useState(
    "O - I - D - A - S - A - L - D - I - R - D"
  );
  const [face2, setFace2] = useState("M - R - A - O");
  const [face3, setFace3] = useState("G - T - R - U - I - A - T - D");
  const [face4, setFace4] = useState("O - R - P - S - E - T - E");
  const [face5, setFace5] = useState("T - I - J - U - I - S - C - A");
  const [face6, setFace6] = useState(tal);
  const [face, setFace] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
  );
  const [vista, setvista] = useState("");
  useEffect(() => {
    setScreen(window.screen.height);
    setvista(window.innerHeight);
  }, []);

  const Situaciones = [
    {
      id: 1,
      description: "O - I - D - A - S - A - L - D - I - R - D ",
      statusFace: face1,
      setStatusFace: setFace1,
    },
    {
      id: 2,
      description: "O - I - D - A - S - A - L - D - I - R - D ",
      statusFace: face2,
      setStatusFace: setFace2,
    },
    {
      id: 3,
      description: "O - I - D - A - S - A - L - D - I - R - D ",
      statusFace: face3,
      setStatusFace: setFace3,
    },
    {
      id: 4,
      description: "O - I - D - A - S - A - L - D - I - R - D ",
      statusFace: face4,
      setStatusFace: setFace4,
    },
    {
      id: 5,
      description: "O - I - D - A - S - A - L - D - I - R - D ",
      statusFace: face5,
      setStatusFace: setFace5,
    },
  ];
  const styles = {
    ContainerApp: {
      // backgroundColor: "#333",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    },
    containerFace: {
      // backgroundColor: "#79c606",
      width: "100%",
      // height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    situaciones: {
      // backgroundColor: "blue",
      width: "100%",
      height: "43pc",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "1pc",
      overflowY: "scroll",
      padding: "1pc",
    },
    Faces: {
      // background: "#79c606",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      width: "96%",
      // height: "80%",
      padding: "1pc",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      alignItems: "center",
      justifyItems: "center",
    },
    FaceSentimientos: {
      // border: "1px solid red",
      width: "60%",
      alignContent: "center",
      justifyItems: "center",
    },
    containerFaceImages: {
      // border: "1px solid blue",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "3px",
      transition: "all 0.2s ease-in-out",
      padding: "2px 0",
    },
    containerSituaciones: {
      //   border: "1px solid red",
      width: "100%",
      minHeight: "6pc",
      display: "flex",
      alignItems: "center",
      padding: "0 5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    FaceOption: {
      width: "20%",
      height: "90%",
      // border: "1px solid red",
      backgroundSize: "4.5pc",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    situacion: {
      marginLeft: "1pc",
      fontSize: "1.2pc",
      width: "100%",
      fontWeight: "bold",
      margin: "0pc",
      textAlign: "center",
    },
    Footer: {
      // border: "1px solid red",
      display: "flex",
      alignItems: "center",
      padding: "0 1pc",
      marginBottom: "0.6pc",
    },
  };

  const ChangeFace = (x, id) => {
    return () => {
      console.log(x);
      // y("keynere");
      setShowSelect(true);
      setStatusChange(id);
      console.log(id);
    };
  };
  const Status = {
    setFace1,
    setFace2,
    setFace3,
    setFace4,
    setFace5,
    setFace6,
  };

  return (
    <div style={styles.ContainerApp} className="fondo8">
      <div style={styles.containerFace}></div>
      <div style={styles.situaciones}>
        {Situaciones.map((item) => (
          <div
            key={item.id}
            style={styles.containerSituaciones}
            className="blu"
            onClick={ChangeFace(item.statusFace, item.id)}
          >
            <p style={styles.situacion}>{item.statusFace}</p>
          </div>
        ))}
      </div>
      <div style={styles.Footer}>
        <h2 className="text-white text-[1.2pc]">
          Presiona para saber por que pepe estaba enojado
        </h2>
        <Image
          onClick={() => handleClick(to)}
          src="/img/row2.svg"
          width={100}
          height={100}
          className="flecha"
          alt=""
        />
      </div>
      {showSelect && (
        <LetrasOrdenSelect
          screen={screen}
          setShowSelect={setShowSelect}
          showSelect={showSelect}
          setStatusChange={setStatusChange}
          StatusChange={StatusChange}
          Status={Status}
        />
      )}
    </div>
  );
};

export default LetrasOrden;

{
  /*
<div
              style={{
                ...styles.FaceOption,
                backgroundImage: `url(${item.statusFace})`,
              }}
              onClick={ChangeFace(item.statusFace, item.id)}
            ></div>
*/
}
