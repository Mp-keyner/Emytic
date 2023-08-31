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

      row.style.transition = "all 1s";
      row.style.top = "60%";
      row.style.left = "74%";
      row.style.width = "300px";
      console.log("objectsdftgyhuji");
    });
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-soli  bg-customColor h-screen"
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
          className="border-2 border-white sm:w-1/3 w-[15pc] text-lg px-4 py-1 z-40 absolute sm:right-[50%] right-[5%] top-[21pc]"
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
          style={{ transform: "translate(-6%, -50%)" }}
          className="w-[41pc] border border-none absolute top-[50%] left-[50%] sm:left-[50%] "
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
