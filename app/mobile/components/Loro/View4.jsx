import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View4 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo2 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con las preguntas</h2>
        <Image
          onClick={() => handleClick(7)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-14 -bottom-72 z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          Tranquilo Pepe, a cualquiera le puede pasar lo importante es que te
          calmaste y así es más fácil ver que te enoja y que te hace muy feliz.
          Amiguitos…vamos responder en tu cuaderno “Feliz” las siguientes
          Preguntas
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-40 -top-32 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="">
          De pronto, llegó mamá y con su abrazo, mi cuerpo se sintió relajao y
          respiraba mejor, y sentí calma
        </p>
      </div>
      <Image
        src="/img/Arbol2.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[36pc] z-10 absolute top-[0pc] left-[0pc]"
        data-aos="fade-right"
        alt=""
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
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

export default View4;
