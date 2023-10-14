"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Styles.css";
import Select from "./Select";

const Situaciones = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [screen, setScreen] = useState("");
  const [vista, setvista] = useState("");
  const [face, setFace] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
  );
  useEffect(() => {
    setScreen(window.screen.height);
    setvista(window.innerHeight);
  }, []);
  const Sentimientoa = [
    {
      id: 1,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
    {
      id: 2,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
    {
      id: 3,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
    {
      id: 4,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
    {
      id: 5,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
    {
      id: 6,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
      title: "Alegria",
    },
  ];
  const Situaciones = [
    {
      id: 1,
      description: "Ganar un examen con excelente nota",
    },
    {
      id: 2,
      description: "Quedarme solo en la oscuridad",
    },
    {
      id: 3,
      description: "Recibir una fiesta sorpresa",
    },
    {
      id: 4,
      description: "Perder a un ser querido",
    },
    {
      id: 5,
      description: "Probar un alimento que no me gusta",
    },
    {
      id: 6,
      description: "No conseguir mi juguete favorito",
    },
  ];
  console.log(showSelect);

  const styles = {
    ContainerApp: {
      backgroundColor: "#333",
      height: `${vista}px`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    },
    containerFace: {
      backgroundColor: "#79c606",
      width: "100%",
      // height: "30vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    situaciones: {
      backgroundColor: "blue",
      width: "100%",
      height: "22pc",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "1pc",
      overflowY: "scroll",
      padding: "1pc",
    },
    Faces: {
      background: "#79c606",
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
      width: "6pc",
      height: "90%",
      border: "1px solid red",
      backgroundImage: `url(${face})`,
      backgroundSize: "4.5pc",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    situacion: {
      marginLeft: "1pc",
      fontSize: "1.4pc",
      width: "16pc",
    },
    Footer: {
      border: "1px solid red",
      display: "flex",
      alignItems: "center",
      padding: "0 1pc",
    },
  };

  return (
    <dii style={styles.ContainerApp}>
      <div style={styles.containerFace}>
        <div style={styles.Faces}>
          {Sentimientoa.map((item) => (
            <div
              key={item.id}
              style={styles.containerFaceImages}
              className="containerFaceImages"
            >
              <Image
                src={item.name}
                width={100}
                height={100}
                title={item.name}
                alt="Alegria"
                style={styles.FaceSentimientos}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.situaciones}>
        {Situaciones.map((item) => (
          <div key={item.id} style={styles.containerSituaciones}>
            <p style={styles.situacion}>{item.description}</p>
            <div
              style={styles.FaceOption}
              onClick={() => setShowSelect(true)}
            ></div>
          </div>
        ))}
      </div>
      <div style={styles.Footer}>
        <h2>Presiona para saber por que pepe estaba enojado</h2>
        <p>{screen}--</p>
        <p>{vista}</p>
        <Image
          //   onClick={AddAnimation}
          src="/img/row.svg"
          width={100}
          height={100}
          className="flecha"
          alt=""
        />
      </div>
      {showSelect && <Select vista={vista} setShowSelect={setShowSelect} />}
    </dii>
  );
};

export default Situaciones;
