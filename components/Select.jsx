import React from "react";

const Select = ({ vista, setShowSelect }) => {
  const styles = {
    constainerSelect: {
      backgroundColor: "red",
      width: "100%",
      height: `${vista}px`,
      position: "absolute",
    },
    containerTop: {
      border: "1px solid blue",
      height: `${vista / 2}px`,
    },
    constainerBotton: {
      backgroundColor: "yellow",
      height: `${vista / 2}px`,
      borderRadius: "34px 34px 0 0",
      paddingTop: "1pc",
    },
    TitleSentimientos: {
      fontSize: "2pc",
      fontWeight: "bold",
      marginLeft: "1pc",
    },
    containerSituaciones: {
      border: "1px solid red",
      width: "100%",
      minHeight: "6pc",
      display: "flex",
      alignItems: "center",
      padding: "0 5px",
      boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    situacion: {
      marginLeft: "1pc",
      fontSize: "1.4pc",
      width: "16pc",
    },
    FaceOption: {
      width: "6pc",
      height: "90%",
      border: "1px solid red",
      backgroundSize: "4.5pc",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
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
  };
  const Emociones = [
    {
      id: 1,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
    {
      id: 2,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
    {
      id: 3,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
    {
      id: 4,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
    {
      id: 5,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
    {
      id: 6,
      name: "Alegria",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38",
    },
  ];
  return (
    <div style={styles.constainerSelect}>
      <div
        style={styles.containerTop}
        onClick={() => setShowSelect(false)}
      ></div>
      <div style={styles.constainerBotton}>
        <h1 style={styles.TitleSentimientos}>Emociones</h1>
        <div style={styles.situaciones}>
          {Emociones.map((item) => (
            <div
              key={item.id}
              style={styles.containerSituaciones}
              onClick={() => console.log("si si si")}
            >
              <p style={styles.situacion}>{item.name}</p>
              <div
                style={{
                  ...styles.FaceOption,
                  backgroundImage: `url(${item.image})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Select;
