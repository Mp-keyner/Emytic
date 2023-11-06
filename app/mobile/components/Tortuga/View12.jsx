import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View12 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo6 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(17)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-16 top-96 z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>Hoy niños vamos a aprender que…</p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed left-40 -top-4 z-50 h-64 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="h-full">
          Hay situaciones que pueden generarnos emociones negativas como ira,
          enojo, ansiedad entre otras. Sin embargo, también hay otras
          situaciones que nos generan emociones positivas como alegría, amor y
          humor que nos permiten disfrutar la vida.
        </p>
      </div>

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F37.png?alt=media&token=a062d78d-5652-4f5e-81ad-965c8a81a1f5"
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

export default View12;
