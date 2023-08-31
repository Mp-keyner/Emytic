import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fifteen = document.getElementById("Fifteen");

    // Realizar el desplazamiento al siguiente elemento
    Fifteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.top = "15%";
    row.style.left = "14%";
    row.style.width = "8pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid bg-customColor h-screen"
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
          className="w-[13pc]  absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/tortuga.svg"
          width={500}
          height={500}
        />
        <div
          className="border-2  w-1/3 text-lg px-4 py-1 z-40 absolute  right-[11pc] top-[6pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            ¡Si!, no debemos burlarnos de los demás. Hay que aprender que todos
            somos iguales y únicos, que tenemos capacidades aunque nos demoremos
            un poquito más…Como yo! jajajaja
          </p>
        </div>
        <div
          className="border-2  w-1/3 text-lg px-4 py-1 z-40 absolute  right-[39pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            ¡ Tuti que bonita historia! Como te habrás sentido cuando la liebre
            se burlo de ti, lo importante es que pese a la risa de la liebre,
            pudiste sacar una sonrisa de felicidad. Amiguitos vamos a trabajar,
            en tu cuadernillo están estas preguntas, vamos comenta con tus
            compañeros y responde
          </p>
        </div>
        <div
          className="border-2  w-1/3 text-lg px-4 py-1 z-40 absolute  right-[27pc] top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Responde y comenta: <br />
            1. ¿Cómo fue la actitud del conejo? <br />
            2. ¿Cómo fue la actitud de Tuti, la tortuga? <br />
            3. Crees que la actitud de la tortuga fue la correcta?, ¿por qué?{" "}
            <br />
            4. ¿Cómo te has sentido cuando se han burlado de ti y que has hecho?{" "}
            <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
