"use client";

import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import "./Styles.css";
import { AppContext } from "./Context";
import ComoSientesSelect from "./ComoSientesSelect";

const ComoSientes = ({ to }) => {
  const { handleClick } = useContext(AppContext);
  const [showSelect, setShowSelect] = useState(false);
  const [screen, setScreen] = useState("");
  const [StatusChange, setStatusChange] = useState("");
  const tal =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c";
  const [face1, setFace1] = useState(tal);
  const [face2, setFace2] = useState(tal);
  const [face3, setFace3] = useState(tal);
  const [face4, setFace4] = useState(tal);
  const [face5, setFace5] = useState(tal);
  const [face6, setFace6] = useState(tal);
  const [face, setFace] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
  );
  const [vista, setvista] = useState("");
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
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F3.png?alt=media&token=e6dc324f-a409-4203-81ad-e880f7d7122f",
      title: "Tristeza",
    },
    {
      id: 3,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F2.png?alt=media&token=7b930cf5-4568-4378-b016-75a904b7ed4b",
      title: "Enojo",
    },
    {
      id: 4,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F4.png?alt=media&token=6a39090c-ee37-49e8-b331-5c12722c2a78",
      title: "Miedo",
    },
    {
      id: 5,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F5.png?alt=media&token=47bdd4bf-eb63-4386-b2b4-6cd8e1c2e85d",
      title: "Sorpresa",
    },
    {
      id: 6,
      name: "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F6.png?alt=media&token=76e98c7b-ae0a-491f-99ed-7643698ea6b4",
      title: "Desagrado",
    },
  ];
  const Situaciones = [
    {
      id: 1,
      description: "¿ Como te sientes ? ",
      statusFace: face1,
      setStatusFace: setFace1,
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
      height: "22pc",
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
      fontSize: "1.4pc",
      width: "80%",
      fontWeight: "bold",
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
          <div
            key={item.id}
            style={styles.containerSituaciones}
            className="blu"
          >
            <p style={styles.situacion}>{item.description}</p>
            <div
              style={{
                ...styles.FaceOption,
                backgroundImage: `url(${item.statusFace})`,
              }}
              onClick={ChangeFace(item.statusFace, item.id)}
            ></div>
          </div>
        ))}
      </div>
      <div style={styles.Footer}>
        <h2 className="text-white text-[1.2pc]">
          Presiona para continuar con esta aventura
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
        <ComoSientesSelect
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

export default ComoSientes;
