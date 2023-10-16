import React from "react";

const Select = ({
  screen,
  setShowSelect,
  setStatusChange,
  StatusChange,
  Status,
  showSelect,
  idIndex,
}) => {
  console.log(Status);
  console.log("StatusChange", StatusChange);
  const {
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
  } = Status;
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
      name: "Aa",
      letra: "A",
      image: "/img/Animal/4.svg",
    },
    {
      id: 2,
      name: "Bb",
      letra: "B",
      image: "/img/Animal/5.svg",
    },
    {
      id: 3,
      name: "Cc",
      letra: "C",
      image:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F2.png?alt=media&token=7b930cf5-4568-4378-b016-75a904b7ed4b",
    },
    {
      id: 4,
      name: "Dd",
      letra: "D",
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
    console.log(StatusChange);
    switch (StatusChange) {
      case 1:
        switch (idIndex) {
          case 0:
            setFace1(name);
            break;
          case 1:
            setFace2(name);
            break;
          case 2:
            setFace3(name);
            break;
          case 3:
            setFace4(name);
            break;
          case 4:
            setFace5(name);
            break;
          case 5:
            setFace6(name);
            break;

          default:
            break;
        }
        break;
      case 2:
        switch (idIndex) {
          case 0:
            setFace7(name);
            break;
          case 1:
            setFace8(name);
            break;
          case 2:
            setFace9(name);
            break;
          default:
            break;
        }
        break;
      case 3:
        switch (idIndex) {
          case 0:
            setFace10(name);
            break;
          case 1:
            setFace11(name);
            break;
          case 2:
            setFace12(name);
            break;
          case 3:
            setFace13(name);
            break;
          case 4:
            setFace14(name);
            break;
          case 5:
            setFace15(name);
            break;
          case 6:
            setFace16(name);
            break;
          case 7:
            setFace17(name);
            break;
          case 8:
            setFace18(name);
            break;

          default:
            break;
        }
        break;
      case 4:
        switch (idIndex) {
          case 0:
            setFace19(name);
            break;
          default:
            break;
        }
        break;
      case 5:
        switch (idIndex) {
          case 0:
            setFace20(name);
            break;
          case 1:
            setFace21(name);
            break;
          case 2:
            setFace22(name);
            break;
          case 3:
            setFace23(name);
            break;
          case 4:
            setFace24(name);
            break;
          default:
            break;
        }
        break;
      case 6:
        switch (idIndex) {
          case 0:
            setFace25(name);
            break;
          case 1:
            setFace26(name);
            break;
          case 2:
            setFace27(name);
            break;
          case 3:
            setFace28(name);
            break;
          case 4:
            setFace29(name);
            break;
          case 5:
            setFace30(name);
            break;
          default:
            break;
        }
        break;
      case 7:
        switch (idIndex) {
          case 0:
            setFace31(name);
            break;
          case 1:
            setFace32(name);
            break;
          case 2:
            setFace33(name);
            break;
          case 3:
            setFace34(name);
            break;
          case 4:
            setFace35(name);
            break;
          case 5:
            setFace36(name);
            break;
          case 6:
            setFace37(name);
            break;
          case 7:
            setFace38(name);
            break;
          case 8:
            setFace39(name);
            break;
          case 9:
            setFace40(name);
            break;
          default:
            break;
        }
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
              onClick={() => funcions(item.letra, item)}
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
