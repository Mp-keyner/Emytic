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

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "78%";
          row.style.width = "12pc";
          row.style.left = "11%";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.opacity = 1;
          row.style.top = "88%";
          row.style.left = "30%";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }
      console.log("objectsdftgyhuji");
    });
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 81) {
      const twelve = document.getElementById("twelve");

      twelve.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "78%";
          row.style.left = "11%";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.opacity = 1;
          row.style.top = "88%";
          row.style.left = "30%";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }

      console.log("objectsdftgyhuji");
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
        <div className="absolute bottom-[0%] z-50 sm:bottom-[13pc] text-center right-[0pc] w-[10pc] flex flex-col items-center">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[3%] sm:left-[18%] top-[21pc]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              Ahora vamos a conocer a otro amigo en la región pacifico, la cual
              esta ubicada al <b>occidente</b> de nuestro país Colombia, aquí
              podemos escuchar diversos sonidos como los cantos de las ballenas
              jorobada, el sonido de la marimba, de la naturaleza y de la
              Felicidad.
            </p>
          </div>
        </div>
        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapados"
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
