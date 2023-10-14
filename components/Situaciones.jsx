import Image from "next/image";
import React from "react";
import "./Styles.css";

const Situaciones = () => {
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
  return (
    <div style={{ cursor: Touch }}>
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
            <div style={styles.FaceOption}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Situaciones;

const styles = {
  containerFace: {
    backgroundColor: "#79c606",
    width: "100%",
    height: "30vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  situaciones: {
    backgroundColor: "blue",
    width: "100%",
    height: "53vh",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "1pc",
    overflowY: "scroll",
    padding: "1pc 0",
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
    // boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  },
  containerSituaciones: {
    border: "1px solid red",
    width: "376px",
    minHeight: "6pc",
    display: "flex",
    alignItems: "center",
  },
  FaceOption: {
    width: "6pc",
    height: "1pc",
    border: "1px solid red",
  },
  situacion: {
    marginLeft: "1pc",
    fontSize: "1.4pc",
    width: "16pc",
  },
};