import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View10 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo6 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(15)}
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
          ¡ Tuti que bonita historia! Como te habrás sentido cuando la liebre se
          burlo de ti, lo importante es que pese a la risa de la liebre, pudiste
          sacar una sonrisa de felicidad. Amiguitos vamos a trabajar, en tu
          cuadernillo están estas preguntas, vamos comenta con tus compañeros y
          responde
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-40 top-[-22%] overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="">
          ¡Si!, no debemos burlarnos de los demás. Hay que aprender que todos
          somos iguales y únicos, que tenemos capacidades aunque nos demoremos
          un poquito más…Como yo! jajajaja
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

export default View10;
