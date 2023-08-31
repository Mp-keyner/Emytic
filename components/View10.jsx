import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const twelve = document.getElementById("twelve");
    const mapados = document.getElementById("mapados");

    mapados.src = "/img/map/1.2.svg";
    mapados.classList.add("miAnimacion2");

    mapados.addEventListener("animationend", () => {
      // Realizar el desplazamiento al siguiente elemento
      twelve.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "78%";
      row.style.left = "11%";
      console.log("objectsdftgyhuji");
    });
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid bg-customColor h-screen"
      >
        <div className="absolute bottom-[13pc] text-center right-[0pc] w-[10pc] flex flex-col items-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="border-2 w-1/3 text-lg px-4 py-1 z-40 absolute  right-[39pc] top-[21pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Ahora vamos a conocer a otro amigo en la región pacifico, la cual
            esta ubicada al <b>occidente</b> de nuestro país Colombia, aquí
            podemos escuchar diversos sonidos como los cantos de las ballenas
            jorobada, el sonido de la marimba, de la naturaleza y de la
            Felicidad.
          </p>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapados"
          className="w-[41pc] border-1px border-red-500 absolute top-0 right-[] sm:right-[6%] mp"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
