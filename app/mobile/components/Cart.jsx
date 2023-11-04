import React from "react";

const Cart = ({
  img = "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Cartas%2F1.png?alt=media&token=f3f2202b-6ce8-442a-8daa-9eeedf5265bf",
  description = "El parque de macuira en la costa caribe, es la casa de felix el tigrillo ",
}) => {
  const Styles = {
    ContainerCarts: {
      display: "flex",
      overflowX: "scroll", // Habilitar el desplazamiento horizontal
      width: "100%", // Ajusta el ancho según sea necesario
    },
    Cart: {
      border: "1px solid blue",
      width: "400pc", // Ajusta el ancho de cada tarjeta según sea necesario
    },
  };
  return (
    <div style={Styles.ContainerCarts}>
      <div style={Styles.Cart}>
        <img src={img} alt="" />
        <p>{description}</p>
      </div>
      <div style={Styles.Cart}>
        <img src={img} alt="" />
        <p>{description}</p>
      </div>
      <div style={Styles.Cart}>
        <img src={img} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Cart;
