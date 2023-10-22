import React from "react";

const Select = ({
  screen,
  setShowSelect,
  setStatusChange,
  StatusChange,
  Status,
  showSelect,
}) => {
  console.log(Status);
  console.log("StatusChange", StatusChange);
  const { setFace1, setFace2, setFace3, setFace4, setFace5, setFace6 } = Status;
  const styles = {
    constainerSelect: {
      // backgroundColor: "red",
      width: "100%",
      position: "absolute",
      overflow: "hidden",
    },
    containerTop: {
      // border: "1px solid blue",
      // height: `${screen / 2}px`,
      height: "50%",
    },
    constainerBotton: {
      backgroundColor: "#D3CECE",
      // height: `${screen / 2}px`,
      height: "50%",
      borderRadius: "34px 34px 0 0",
      paddingTop: "1pc",
      position: "fixed",
      width: "100%",
      bottom: "-30pc",
    },
    TitleSentimientos: {
      fontSize: "2pc",
      fontWeight: "bold",
      marginLeft: "1pc",
    },
    containerSituaciones: {
      // border: "1px solid red",
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
      // border: "1px solid red",
      backgroundSize: "4.5pc",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    },
    situaciones: {
      // backgroundColor: "blue",
      width: "100%",
      height: "80%",
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
      name: "Tristeza",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F3.png?alt=media&token=e6dc324f-a409-4203-81ad-e880f7d7122f",
    },
    {
      id: 3,
      name: "Enojo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F2.png?alt=media&token=7b930cf5-4568-4378-b016-75a904b7ed4b",
    },
    {
      id: 4,
      name: "Miedo",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F4.png?alt=media&token=6a39090c-ee37-49e8-b331-5c12722c2a78",
    },
    {
      id: 5,
      name: "Sorpresa",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F5.png?alt=media&token=47bdd4bf-eb63-4386-b2b4-6cd8e1c2e85d",
    },
    {
      id: 6,
      name: "Desagrado",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F6.png?alt=media&token=76e98c7b-ae0a-491f-99ed-7643698ea6b4",
    },
  ];
  const funcions = (name) => {
    switch (StatusChange) {
      case 1:
        setFace1(name);
        break;
      case 2:
        setFace2(name);
        break;
      case 3:
        setFace3(name);
        break;
      case 4:
        setFace4(name);
        break;
      case 5:
        setFace5(name);
        break;
      case 6:
        setFace6(name);
        break;

      default:
        break;
    }
    console.log("si si si");
    setShowSelect(false);
  };
  return (
    <div style={styles.constainerSelect} className="Fondo">
      <div
        style={styles.containerTop}
        onClick={() => setShowSelect(false)}
      ></div>
      <div style={styles.constainerBotton} className="Show">
        <h1 style={styles.TitleSentimientos}>Emociones</h1>
        <div style={styles.situaciones}>
          {Emociones.map((item) => (
            <div
              key={item.id}
              style={styles.containerSituaciones}
              onClick={() => funcions(item.image, item)}
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
