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
  const handleKeyDown = (e) => {
    if (e.keyCode === 71) {
      const TwentySix = document.getElementById("TwentySix");

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
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid fondoMap h-screen"
      >
        <div className="absolute sm:bottom-[13pc] z-50 bottom-[0] right-[0pc] w-[10pc] flex flex-col items-center text-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha cursor-pointer"
            alt=''
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute sm:right-[58%] right-[5%] sm:top-[36%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              Nuestro siguiente viaje, es al <b>oriente a la región Orinoquia</b>,
              aquí a las personas les gusta zapatear al son de arpa, al ritmo del
              joropo, tengo muchos amigos como Chiqui el chigüiro, Beni el venado,
              pero hoy conocerás a alguien muy veloz… Vamos!
            </p>
          </div>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa4"
          style={{ transform: "translate(-17%, -45%)" }}
          className="w-[41pc] border border-none absolute xl:top-[50%] top-[25%] xl:left-[50%] left-[5%] sm:left-[50%] "
          title="Mapa de Colombia"
          alt=""
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
