import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View11 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo6 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(16)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-14 bottom-[-29%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          <b>
            Responde y comenta: <br />
          </b>
          1. ¿Cómo fue la actitud del conejo? <br />
          2. ¿Cómo fue la actitud de Tuti, la tortuga? <br />
          3. Crees que la actitud de la tortuga fue la correcta?, ¿por qué?{" "}
          <br />
          4. ¿Cómo te has sentido cuando se han burlado de ti y que has hecho?{" "}
          <br />
        </p>
      </div>

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute top-8 -right-5"
        title="Pepe el loro..."
        alt=""
      />
    </div>
  );
};

export default View11;
