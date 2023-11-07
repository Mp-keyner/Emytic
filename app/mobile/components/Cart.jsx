import React from "react";

const Cart = () => {
  const Styles = {
    ContainerCarts: {
      display: "flex",
      flexDirection: "column",
      overflowX: "scroll", // Habilitar el desplazamiento horizontal
      width: "100%", // Ajusta el ancho según sea necesario
    },
    Cart: {
      // border: "1px solid blue",
      margin: "1pc",
    },
    pad: {
      fontSize: "1.2pc",
      fontWeight: "bold",
      // textAling: "center",
      textAlign: "center",
    },
  };
  return (
    <div style={Styles.ContainerCarts}>
      <div style={Styles.Cart}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F1.png?alt=media&token=f3f2202b-6ce8-442a-8daa-9eeedf5265bf"
          alt=""
          width={"100%"}
          style={{ margin: 0 }}
        />
        <p style={Styles.pad}>
          El parque de macuira en la costa caribe, es la casa de felix el
          tigrillo
        </p>
      </div>
      <div style={Styles.Cart}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F2.png?alt=media&token=1e2a97e6-bad8-4985-90cb-e82384db5d8f"
          alt=""
          width={"100%"}
          style={{ margin: 0 }}
        />
        <p style={Styles.pad}>
          En el parque nacional de Gorgona en el pacifico vive Bely la ballena
        </p>
      </div>
      <div style={Styles.Cart}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F3.png?alt=media&token=d6f22b8c-8e67-430b-ab18-ca4ad5c7d9e7"
          alt=""
          width={"100%"}
          style={{ margin: 0 }}
        />
        <p style={Styles.pad}>
          En el Tuparro en la Orinoquia, esta el hogar de Nelson la nutria
        </p>
      </div>
      <div style={Styles.Cart}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F5.png?alt=media&token=9af18aee-bd78-436d-ba5c-9713dcb768f0"
          alt=""
          width={"100%"}
          style={{ margin: 0 }}
        />
        <p style={Styles.pad}>
          Y En el parque Amacayacu, mi casa en la amazonia
        </p>
      </div>
      <div style={Styles.Cart}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F3.png?alt=media&token=d6f22b8c-8e67-430b-ab18-ca4ad5c7d9e7"
          alt=""
          width={"100%"}
          style={{ margin: 0 }}
        />
        <p style={Styles.pad}>
          Chingaza en los andes esta mi amiga Dani la danta
        </p>
      </div>
    </div>
  );
};

export default Cart;
