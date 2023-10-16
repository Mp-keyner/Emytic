"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./Styles.css";
import Select from "./SelectLetras";

const Letras = () => {
  const [showSelect, setShowSelect] = useState(false);
  const [screen, setScreen] = useState("");
  const [StatusChange, setStatusChange] = useState("");
  const tal =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c";
  const [face1, setFace1] = useState("M");
  const [face2, setFace2] = useState("A");
  const [face3, setFace3] = useState("N");
  const [face4, setFace4] = useState("E");
  const [face5, setFace5] = useState("J");
  const [face6, setFace6] = useState("O");
  const [face7, setFace7] = useState("M");
  const [face8, setFace8] = useState("I");
  const [face9, setFace9] = useState("S");
  const [face10, setFace10] = useState("E");
  const [face11, setFace11] = useState("M");
  const [face12, setFace12] = useState("O");
  const [face13, setFace13] = useState("C");
  const [face14, setFace14] = useState("I");
  const [face15, setFace15] = useState("O");
  const [face16, setFace16] = useState("N");
  const [face17, setFace17] = useState("E");
  const [face18, setFace18] = useState("S");
  const [face19, setFace19] = useState("Y");
  const [face20, setFace20] = useState("T");
  const [face21, setFace21] = useState("E");
  const [face22, setFace22] = useState("N");
  const [face23, setFace23] = useState("G");
  const [face24, setFace24] = useState("O");
  const [face25, setFace25] = useState("B");
  const [face26, setFace26] = useState("U");
  const [face27, setFace27] = useState("E");
  const [face28, setFace28] = useState("N");
  const [face29, setFace29] = useState("A");
  const [face30, setFace30] = useState("S");
  const [face31, setFace31] = useState("R");
  const [face32, setFace32] = useState("E");
  const [face33, setFace33] = useState("L");
  const [face34, setFace34] = useState("A");
  const [face35, setFace35] = useState("C");
  const [face36, setFace36] = useState("I");
  const [face37, setFace37] = useState("O");
  const [face38, setFace38] = useState("N");
  const [face39, setFace39] = useState("E");
  const [face40, setFace40] = useState("S");
  const [idIndex, setIdIndex] = useState(0);
  const [face, setFace] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
  );
  console.log(face1, face2, face3, face4, face5, face6);
  console.log(face7, face8, face9);
  console.log(face3);
  console.log(face25, face26, face27, face28, face29, face30);
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
  const Palabras = [
    {
      id: 1,
      description: [face1, face2, face3, face4, face5, face6],
      statusFace: face1,
      setStatusFace: setFace1,
    },
    {
      id: 2,
      description: [face7, face8, face9],
      statusFace: face2,
      setStatusFace: setFace2,
    },
    {
      id: 3,
      description: [
        face10,
        face11,
        face12,
        face13,
        face14,
        face15,
        face16,
        face17,
        face18,
      ],
      statusFace: face3,
      setStatusFace: setFace3,
    },
    {
      id: 4,
      description: [face19],
      statusFace: face4,
      setStatusFace: setFace4,
    },
    {
      id: 5,
      description: [face20, face21, face22, face23, face24],
      statusFace: face5,
      setStatusFace: setFace5,
    },
    {
      id: 6,
      description: [face25, face26, face27, face28, face29, face30],
      statusFace: face6,
      setStatusFace: setFace6,
    },
    {
      id: 7,
      description: [
        face31,
        face32,
        face33,
        face34,
        face35,
        face36,
        face37,
        face38,
        face39,
        face40,
      ],
      statusFace: face6,
      setStatusFace: setFace7,
    },
  ];
  console.log(showSelect);
  console.log(vista + " kk");
  console.log(screen + "screen");
  const styles = {
    ContainerApp: {
      // backgroundColor: "#333",
      height: `${screen}px`,
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
      height: "90%",
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
      justifyContent: "space-around",
      padding: "0 5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    FaceOption: {
      width: "4.5pc",
      height: "90%",
      // border: "1px solid red",
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    situacion: {
      marginLeft: "1pc",
      fontSize: "1.4pc",
      width: "80%",
    },
    Footer: {
      // border: "1px solid red",
      display: "flex",
      alignItems: "center",
      padding: "0 1pc",
      marginBottom: "0.6pc",
    },
    letras: {
      width: "10%",
      // backgroundColor: "red",
      border: "1px solid black",
      height: "50%",
      textAlign: "center",
      fontSize: "2pc",
    },
  };

  const ChangeFace = (x, id, idFather) => {
    return () => {
      console.log(x);
      // y("keynere");
      setShowSelect(true);
      setStatusChange(idFather);

      setIdIndex(id);
      console.log(idIndex, "numero de la letra");
      console.log(StatusChange, "numero de la fila ");
    };
  };
  const Status = {
    setFace1,
    setFace2,
    setFace3,
    setFace4,
    setFace5,
    setFace6,
    setFace7,
    setFace8,
    setFace9,
    setFace10,
    setFace11,
    setFace12,
    setFace13,
    setFace14,
    setFace15,
    setFace16,
    setFace17,
    setFace18,
    setFace19,
    setFace20,
    setFace21,
    setFace22,
    setFace23,
    setFace24,
    setFace25,
    setFace26,
    setFace27,
    setFace28,
    setFace29,
    setFace30,
    setFace31,
    setFace32,
    setFace33,
    setFace34,
    setFace35,
    setFace36,
    setFace37,
    setFace38,
    setFace39,
    setFace40,
  };

  return (
    <dii style={styles.ContainerApp} className="fondo8">
      <div style={styles.situaciones}>
        {Palabras.map((item) => (
          <div
            key={item.id}
            style={styles.containerSituaciones}
            className="blu"
          >
            {item.description.map((subItem, index) => (
              <div
                key={subItem.id}
                style={styles.letras}
                onClick={ChangeFace(item.statusFace, index, item.id)}
              >
                {subItem}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div style={styles.Footer}>
        <h2 className="text-white text-[1.2pc]">
          Presiona para saber por que pepe estaba enojado
        </h2>
        <Image
          //   onClick={AddAnimation}
          src="/img/row2.svg"
          width={100}
          height={100}
          className="flecha"
          alt=""
        />
      </div>
      {showSelect && (
        <Select
          screen={vista}
          setShowSelect={setShowSelect}
          showSelect={showSelect}
          setStatusChange={setStatusChange}
          StatusChange={StatusChange}
          Status={Status}
          idIndex={idIndex}
        />
      )}
    </dii>
  );
};

export default Letras;

// onClick={ChangeFace(item.statusFace, item.id)}
