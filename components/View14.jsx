import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const sixteen = document.getElementById("sixteen");

    // Realizar el desplazamiento al siguiente elemento
    sixteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid border-black-500 bg-gray-400 h-screen"
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
          className="w-[13pc] border-2 border-red-500 absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/tortuga.svg"
          width={500}
          height={500}
        />

        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[39pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>Hoy niños vamos a aprender que…</p>
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[27pc] top-[9pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            <b>Aprende</b>
          </p>
          <p>
            Hay situaciones que pueden generarnos emociones negativas como ira,
            enojo, ansiedad entre otras. Sin embargo, también hay otras
            situaciones que nos generan emociones positivas como alegría, amor y
            humor que nos permiten disfrutar la vida.
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[27pc] top-[24pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Lo importante es ser capaz de afrontar retos y situaciones, sin
            dejar que afecte nuestras emociones
          </p>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;