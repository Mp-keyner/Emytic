import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const View30 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen relative fondo3">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para comenzar su historia</h2>
        <Image
          onClick={() => handleClick(36)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-6 top-96"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>Hola, Timi, como estas, te he notado pensativa en el día de hoy…</p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        <p>HOLA EMYTIC ¡Que alegría verte!</p>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
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

export default View30;
