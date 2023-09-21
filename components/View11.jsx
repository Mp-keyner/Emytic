import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Thirteen = document.getElementById("Thirteen");

    // Realizar el desplazamiento al siguiente elemento
    Thirteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "17%";
        row.style.left = "93%";
        row.style.width = "8pc";
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
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 87) {
      const Thirteen = document.getElementById("Thirteen");

      // Realizar el desplazamiento al siguiente elemento
      Thirteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "17%";
          row.style.left = "93%";
          row.style.width = "8pc";
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
        id="twelve"
        className="relative border-1 border-solid fondo6 h-screen"
      >
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[20pc] sm:w-[24pc] absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
          width={500}
          height={500}
        />

        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute right-[5%] sm:right-[28%] top-[10pc]"
        >
          <div className="bocadillo-cuadrado6">
            <p>
              ¡HOLA EMYTIC! Que alegría poder encontrarnos, justo en estos
              momento voy a leer una fabula,
              <br />¿ Niños quieren escucharla?
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[5%] sm:left-[18%] top-[23pc] sm:top-[60%]"
        >
          <div className="bocadillo-cuadrado1" style={{ minHeight: "120px" }}>
            <p>
              Esta es mi amiga Tuti la tortuga y con ella aprenderemos cosas
              maravillosas… <b>¡HOLA TUTI!</b> Saluda a los niños
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
