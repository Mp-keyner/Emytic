import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Three = document.getElementById("Three");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.1.svg";
    mapa.classList.add("mi-animacion");

    mapa.addEventListener("animationend", () => {
      // Realizar el desplazamiento al siguiente elemento
      Three.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.backgroundColor = "blue";
      row.style.transition = "all 1s";
      row.style.top = "91pc";
      row.style.left = "49pc";
      row.style.width = "300px";
      console.log("objectsdftgyhuji");
    });
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid border-red-500 bg-red-400 h-screen"
      >
        <div className="absolute bottom-[13pc] right-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[39pc] top-[21pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Nuestro primer viaje es a la región Caribe, esta ubicada al{" "}
            <b>norte de Colombia</b>, tiene lindas playas , las personas son
            alegres y les gusta bailar con la pollera colora
          </p>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa"
          className="w-[41pc] border-1px border-red-500 absolute top-0 right-[7pc] mp"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
