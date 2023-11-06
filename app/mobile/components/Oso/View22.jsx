import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View11 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(24)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed left-[40%] top-[5%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          <b>Aprende</b> <br />
          Soy dueño de mis propias emociones, por eso me amo, me respeto, aun
          teniendo problemas y dificultades sé, que puedo superarlos y seguir
          adelante
        </p>
      </div>

      <div
        className="bocadillo-cuadrado-mobile2 fixed left-14 bottom-[-17%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          Soso vamos a enseñarle a nuestros amigos lo que aprendimos y
          aprendimos que…
        </p>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute top-8 -left-7"
        title="Pepe el loro..."
        alt=""
      />
    </div>
  );
};

export default View11;
