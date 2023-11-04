import React from "react";

const LetrasOrdenSelect = ({
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
      height: `${screen}px`,
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
      alignItems: "center",
    },
    situacion: {
      marginLeft: "1pc",
      fontSize: "1.2pc",
      fontWeight: "bold",
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
      name: "J - U - S - T - I - C - I - A",
      image: "J - U - S - T - I - C - I - A",
    },
    {
      id: 2,
      name: "O - I - D - A - S - A - L - D - I - R - D",
      image: "O - I - D - A - S - A - L - D - I - R - D ",
    },
    {
      id: 3,
      name: "M - R - A - O",
      image: "M - R - A - O",
    },
    {
      id: 4,
      name: "G - T - R - U - I - A - T - D",
      image: "G - T - R - U - I - A - T - D",
    },
    {
      id: 5,
      name: "O - R - P - S - E - T - E",
      image: "O - R - P - S - E - T - E",
    },
    {
      id: 6,
      name: "S - O - L - I - D - A - R - I - D - A - D",
      image: "S - O - L - I - D - A - R - I - D - A - D",
    },
    {
      id: 7,
      name: "T - I - J - U - I - S - C - A",
      image: "T - I - J - U - I - S - C - A",
    },
    {
      id: 8,
      name: "O - A - S - A - I - D - L - D - I - R - D",
      image: "O - A - S - A - I - D - L - D - I - R - D",
    },
    {
      id: 9,
      name: "A - O - M - R",
      image: "A - O - M - R",
    },
    {
      id: 10,
      name: "G - R - A - T - I - T - U - D",
      image: "G - R - A - T - I - T - U - D",
    },
    {
      id: 11,
      name: "A - M - O - R",
      image: "A - M - O - R",
    },
    {
      id: 12,
      name: "A - S - A - L - D - I - R - D - O - I - D",
      image: "A - S - A - L - D - I - R - D - O - I - D",
    },
    {
      id: 13,
      name: "U - G - T - R - I - A - T - D",
      image: "U - G - T - R - I - A - T - D",
    },
    {
      id: 14,
      name: "E - T - O - R - P - S - E",
      image: "E - T - O - R - P - S - E",
    },
    {
      id: 15,
      name: "U - I - S - C - T - I - J - A",
      image: "U - I - S - C - T - I - J - A",
    },
    {
      id: 16,
      name: "D - L - D - I - R - O - A - S - A - I - D",
      image: "D - L - D - I - R - O - A - S - A - I - D",
    },
    {
      id: 17,
      name: "R - E - S - P - E - T - O",
      image: "R - E - S - P - E - T - O",
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
        <h1 style={styles.TitleSentimientos}>Opciones de Palabras </h1>
        <div style={styles.situaciones}>
          {Emociones.map((item) => (
            <div
              key={item.id}
              style={styles.containerSituaciones}
              onClick={() => funcions(item.image, item)}
            >
              <p style={styles.situacion}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LetrasOrdenSelect;
