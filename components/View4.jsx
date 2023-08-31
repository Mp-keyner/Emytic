import Image from "next/image";
import Link from "next/link";
import React from "react";

const View4 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Six = document.getElementById("Six");

    Six.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "62%";
    row.style.left = "12%";
    row.style.width = "300px";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid bg-blue-600 h-screen">
        <div className="absolute bottom-[25pc] right-[0pc] w-[10pc] flex flex-col items-center text-center ">
          <h2>Presiona para continuar</h2>

          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className=" border-2  w-1/3 text-lg px-4 py-1 z-40 absolute   right-[12pc] top-[16pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Tranquilo Pepe, a cualquiera le puede pasar lo importante es que te
            calmaste y así es más fácil ver que te enoja y que te hace muy
            feliz. Amiguitos…vamos responder en tu cuaderno “Feliz” las
            siguientes Preguntas
          </p>
        </div>
        <div
          className=" border-2  w-1/3 text-lg px-4 py-1 z-40 absolute   right-[39pc] top-[8pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            De pronto, llegó mamá y con su abrazo, mi cuerpo se sintió relajao y
            respiraba mejor, y sentí calma
          </p>
        </div>
        <Image
          src="/img/Arbol2.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="w-[36pc] z-10 position: absolute top-[0pc] left-[0pc]"
          data-aos="fade-right"
        />
        <Image
          src="/img/6.svg"
          data-aos="fade-right"
          width={100}
          height={100}
          className="w-[18pc] z-40 position: absolute top-[10pc] left-[0pc]"
        />
      </div>
    </>
  );
};

export default View4;
