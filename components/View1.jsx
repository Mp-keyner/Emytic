import Image from "next/image";
import Link from "next/link";
import React from "react";
import SvgComponent from "./SvgComponent";

const View1 = () => {
  const AddAnimationNO = () => {
    const row = document.getElementById("row");
    const Secon = document.getElementById("Secon");
    const mapa = document.getElementById("mapa");
    const animationName = event.animationName;

    mapa.src = "/img/map/1.svg";
    mapa.classList.add("mi-animacion");
    console.log(animationName)
    if (animationName === "mi-animacion") {
      mapa.addEventListener("animationend", () => {
        // Realizar el desplazamiento al siguiente elemento
        Secon.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
        row.style.transition = "all 1s";
        switch (true) {
          case screen.width >= 1200 && screen.width <= 1600:
            row.style.top = "60%";
            row.style.left = "74%";
            row.style.width = "300px";
            console.log(screen.width, "En el rango de 1200 a 1600");
            break;
          case screen.width >= 393 && screen.width <= 450:
            row.style.top = "88%";
            row.style.left = "26%";
            row.style.width = "12pc";
            console.log(screen.width, "Igual a 393");
            break;
          default:
            break;
        }
        console.log("Tecla pre");
      });
    }
  }
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

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "60%";
          row.style.left = "74%";
          row.style.width = "300px";
          console.log(screen.width, "En el rango de 1200 a 1600");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "26%";
          row.style.width = "12pc";
          console.log(screen.width, "Igual a 393");
          break;
        default:
          break;
      }
      console.log("Tecla pre");
    });
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 50) {
      const Three = document.getElementById("Three");
      Three.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "60%";
          row.style.left = "74%";
          row.style.width = "300px";
          console.log(screen.width, "En el rango de 1200 a 1600");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "26%";
          row.style.width = "12pc";
          console.log(screen.width, "Igual a 393");
          break;
        default:
          break;
      }
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-sol fondoMap h-screen"
      >
        <div className=" absolute sm:bottom-[13pc] z-50 bottom-[0] right-[0pc] w-[10pc] flex flex-col items-center text-center">
          <h2>Presiona para continuar con esta aventura</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha cursor-pointer"
            alt=""
          />
        </div>

        <Image
          data-aos="fade-up-left"
          src={"/img/map/1.svg"}
          width={300}
          height={300}
          id="mapa"
          style={{ transform: "translate(-17%, -45%)" }}
          className="w-[41pc] border border-none absolute xl:top-[50%] top-[25%] xl:left-[50%] left-[5%] sm:left-[50%] "
          title="Mapa de Colombia"
          alt=""
        />
        <div
          data-aos="fade-right"
          className="z-40 absolute sm:right-[58%] right-[5%] sm:top-[62%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              Nuestro primer viaje es a la región Caribe, esta ubicada al{" "}
              <b>norte de Colombia</b>, tiene lindas playas , las personas son
              alegres y les gusta bailar con la pollera colora
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View1;

//     top: 91pc;
// left: 49pc;
