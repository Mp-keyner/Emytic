import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Three = document.getElementById("Three");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

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
        className="relative border-1 border-solid border-red-500 bg-green-400 h-screen"
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
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
