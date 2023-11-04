import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View10 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(22)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-14 bottom-[-45%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          Pregunta Si un compañero tropieza el cuaderno de tu amigo y se cae al
          piso, y no lo levanta, porque lo debes recoger él. ¿Qué haces? Así
          como la gripa se contagia, las emociones también, en que situaciones
          has contagiado a tus amiguitos de felicidad
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-40 top-[-22%] overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="">
          Amiguitos, en tu cuadernillo mientras coloreas a Soso, piensa y
          pregúntales a tus compañeros
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

export default View10;
