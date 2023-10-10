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

      row.style.transition = "all 1s";
      row.style.top = "28%";
      row.style.left = "74%";
      row.style.width = "300px";
      console.log("objectsdftgyhuji");
    });
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 67) {
      const ThirtyThree = document.getElementById("ThirtyThree");

      ThirtyThree.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "28%";
      row.style.left = "74%";
      row.style.width = "300px";
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
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute sm:right-[50%] right-[5%] top-[21pc]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              Amiguitos hemos llegado a la región Amazonas, el hogar de muchas
              especies, una casa verde y majestuosa, ubicada al{" "}
              <b>sur de nuestro país Colombia</b>, y bañada del río amazonas,
              Vamos a conocer a Timi la mona Titi
            </p>
          </div>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa5"
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
