import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyThree = document.getElementById("ThirtyThree");
    const mapa5 = document.getElementById("mapa5");

    mapa5.src = "/img/map/1.5.svg";
    mapa5.classList.add("mi-animacion");

    mapa5.addEventListener("animationend", () => {
      // Realizar el desplazamiento al siguiente elemento
      ThirtyThree.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.backgroundColor = "blue";
      row.style.transition = "all 1s";
      row.style.top = "28%";
      row.style.left = "74%";
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
            Amiguitos hemos llegado a la región Amazonas, el hogar de muchas
            especies, una casa verde y majestuosa, ubicada al{" "}
            <b>sur de nuestro país Colombia</b>, y bañada del río amazonas,
            Vamos a conocer a Timi la mona Titi
          </p>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa5"
          className="w-[41pc] border-1px border-red-500 absolute top-0 right-[0] sm:right-[6%] mp"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
