import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Thirteen = document.getElementById("Thirteen");

    // Realizar el desplazamiento al siguiente elemento
    Thirteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "17%";
    row.style.left = "93%";
    row.style.width = "8pc";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 87) {
      const Thirteen = document.getElementById("Thirteen");

      // Realizar el desplazamiento al siguiente elemento
      Thirteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "17%";
      row.style.left = "93%";
      row.style.width = "8pc";
      console.log("objectsdftgyhuji");
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
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[24pc] absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/tortuga.svg"
          width={500}
          height={500}
        />
        <div
          className="border-2  w-1/3 blu text-lg px-4 py-1 z-40 absolute  right-[20pc] top-[10pc]"
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
          className="border-2  w-1/3 blu text-lg px-4 py-1 z-40 absolute  right-[39pc] top-[23pc]"
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
