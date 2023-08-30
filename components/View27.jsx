import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyNine = document.getElementById("TwentyNine");

    // Realizar el desplazamiento al siguiente elemento
    TwentyNine.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "yellow";
    row.style.transition = "all 1s";
    row.style.top = "36%";
    row.style.left = "85%";
    row.style.width = "12pc";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-yellow-600 h-screen">
        <div className="absolute top-[4pc] right-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 border-red-500 w-[20pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[-12%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            Hola chicos: En esta sopa de letras encontraras 8 palabras
            importante para mantener buenas relaciones con los demás.
            <b>¡Descúbrelas!</b>
          </p>
        </div>
        <div
          className="h-[90vh] flex flex-col justify-center items-center  border-2 border-red-500 w-[41pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[50%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <Image
            className="w-[71%] border-2 z-40 border-red-500"
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/sopa.svg"
            width={500}
            height={500}
          />
          <p className="grid grid-cols-2">
            <b>Ayudar</b>
            <b>Compartir</b>
            <b>Respetar</b>
            <b>Colaborar</b>
            <b>Dialogar</b>
            <b>Saludar</b>
          </p>
        </div>

        <Image
          className="w-[17pc] border-2 z-40 border-red-500 absolute right-[0pc] bottom-[-2.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/5.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[41pc] border-2 border-red-500 absolute left-[0pc] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default View11;
