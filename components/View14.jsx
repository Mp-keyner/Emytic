import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Sixteen = document.getElementById("Sixteen");

    // Realizar el desplazamiento al siguiente elemento
    Sixteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 84) {
      const Sixteen = document.getElementById("Sixteen");

      // Realizar el desplazamiento al siguiente elemento
      Sixteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.opacity = 0;
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid fondo6 h-screen"
      >
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[13pc] border-none  absolute right-[7pc] top-[15pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/tortuga.svg"
          width={500}
          height={500}
        />

        <div
          className="border-2  w-1/3 text-lg blu px-4 py-1 z-40 absolute  right-[39pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>Hoy niños vamos a aprender que…</p>
        </div>
        <div
          className="border-2 blu w-1/3 text-lg px-4 py-1 z-40 absolute  right-[27pc] top-[9pc]"
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
          className="border-2 blu w-1/3 text-lg px-4 py-1 z-40 absolute  right-[27pc] top-[24pc]"
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
