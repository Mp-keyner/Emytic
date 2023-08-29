import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Nineteen = document.getElementById("Nineteen");
    const mapa3 = document.getElementById("mapa3");

    mapa3.src = "/img/map/1.3.svg";
    mapa3.classList.add("miAnimacion3");

    mapa3.addEventListener("animationend", () => {
      // Realizar el desplazamiento al siguiente elemento
      Nineteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.backgroundColor = "blue";
      row.style.transition = "all 1s";
      row.style.top = "77%";
      row.style.left = "15%";
      row.style.width = "13pc";
      console.log("objectsdftgyhuji");
    });
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid border-red-500 bg-red-400 h-screen"
      >
        <div className="absolute sm:bottom-[13pc] z-50 bottom-[0] right-[0pc] w-[10pc] flex flex-col items-center text-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="border-2 border-red-500 sm:w-1/3 w-[15pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess sm:right-[50%] right-[5%] top-[21pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Amigos viajemos, al corazón de nuestro país la región andina , es
            una región ubicada en el{" "}
            <b>centro y se extiende al norte y al sur</b>, esta bañada por dos
            ríos maravillosos el rio Magdalena y el rio Cauca, es la región de
            las flores y el café y allí conoceremos a alguien muy especial
          </p>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa3"
          className="w-[41pc] border-1px border-red-500 absolute top-0 right-[0] sm:right-[6%] mp"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
