import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const View25 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen relative fondo2">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia</h2>
        <Image
          onClick={() => handleClick(29)}
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
        <p>
          Este es mi amigo Flaqui El es un poderoso Jaguar. Vive en un hermoso
          llano El llano oriental, faquí que nos vas a contar
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        <p>
          Alegría y diversión, Con flaqui vamos a jugar Aprendiendo a
          comunicarnos Respetando a los demás, Escucha con atención la historia
          que te voy a contar
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
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
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

export default View25;
