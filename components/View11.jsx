import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const thirteen = document.getElementById("thirteen");

    // Realizar el desplazamiento al siguiente elemento
    thirteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.top = "456pc";
    row.style.left = "69pc";
    row.style.width = "8pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid border-red-500 bg-green-400 h-screen"
      >
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[24pc] border-2 border-red-500 absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/tortuga.svg"
          width={500}
          height={500}
        />
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[20pc] top-[10pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            ¡HOLA EMYTIC! Que alegría poder encontrarnos, justo en estos momento
            voy a leer una fabula, ¿ Niños quieren escucharla?
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[39pc] top-[23pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Esta es mi amiga Tuti la tortuga y con ella aprenderemos cosas
            maravillosas… ¡HOLA TUTI! Saluda a los niños
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[39pc] top-[23pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Esta es mi amiga Tuti la tortuga y con ella aprenderemos cosas
            maravillosas… ¡HOLA TUTI! Saluda a los niños
          </p>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
