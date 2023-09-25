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

      row.style.transition = "all 1s";
      row.style.top = "77%";
      row.style.left = "15%";
      row.style.width = "13pc";
      console.log("objectsdftgyhuji");
    });
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 73) {
      const Nineteen = document.getElementById("Nineteen");

      Nineteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "77%";
      row.style.left = "15%";
      row.style.width = "13pc";
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
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute sm:right-[58%] right-[5%] sm:top-[58%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              Amigos viajemos, al corazón de nuestro país la región andina , es
              una región ubicada en el{" "}
              <b>centro y se extiende al norte y al sur</b>, esta bañada por dos
              ríos maravillosos el rio Magdalena y el rio Cauca, es la región de
              las flores y el café y allí conoceremos a alguien muy especial
            </p>
          </div>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          alt=""
          id="mapa3"
          style={{ transform: "translate(-17%, -45%)" }}
          className="w-[41pc] border border-none absolute xl:top-[50%] top-[25%] xl:left-[50%] left-[5%] sm:left-[50%] "
          title="Mapa de Colombia"
        />
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
