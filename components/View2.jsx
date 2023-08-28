import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fourth = document.getElementById("Fourth");

    Fourth.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.top = "72%";
    row.style.left = "12%";
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-blue-400 h-screen">
        <div className="absolute bottom-[13pc] right-[0pc] w-[10pc] flex flex-col items-center text-center bg-green-900">
          <h2>Presiona para empezar</h2>

          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[12pc] border-2 border-red-500 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[29pc] top-[15pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>¡Hola Pepe, estos son mis amigos!</p>
        </div>
        <div
          className=" border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[39pc] top-[8pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            ¡Hola amigos, soy Pepe, el loro! Hoy estaba un poco enojado y triste
            a la vez ¿Quieres saber por que?
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

export default View1;
