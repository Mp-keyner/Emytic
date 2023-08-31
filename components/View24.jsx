import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentySix = document.getElementById("TwentySix");
    const mapa4 = document.getElementById("mapa4");

    mapa4.src = "/img/map/1.4.svg";
    mapa4.classList.add("miAnimacion4");

    mapa4.addEventListener("animationend", () => {
      // Realizar el desplazamiento al siguiente elemento
      TwentySix.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "36%";
      row.style.left = "85%";
      row.style.width = "12pc";
      console.log("objectsdftgyhuji");
    });
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid bg-blue-600 h-screen"
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
          className="border-2  sm:w-1/3 w-[15pc] text-lg px-4 py-1 z-40 absolute  sm:right-[50%] right-[5%] top-[34%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Nuestro siguiente viaje, es al <b>oriente a la región Orinoquia</b>,
            aquí a las personas les gusta zapatear al son de arpa, al ritmo del
            joropo, tengo muchos amigos como Chiqui el chigüiro, Beni el venado,
            pero hoy conocerás a alguien muy veloz… Vamos!
          </p>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa4"
          className="w-[41pc] border-1px  absolute top-0 right-[0] sm:right-[6%] mp"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
