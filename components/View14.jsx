import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Sixteen = document.getElementById("Sixteen");

    // Realizar el desplazamiento al siguiente elemento
    Sixteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 84) {
      const Sixteen = document.getElementById("Sixteen");

      // Realizar el desplazamiento al siguiente elemento
      Sixteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.opacity = 0;
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
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[23pc] border-none  absolute right-[7pc] top-[15pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
          width={500}
          height={500}
        />

        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[20%] top-[4%]"
        >
          <div className="bocadillo-cuadrado1" style={{ minHeight: "80px" }}>
            <p>Hoy niños vamos a aprender que…</p>
          </div>
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[50%] top-[50%]"
          style={{ transform: " translate(-50%, -50%)" }}
        >
          <div
            className="bocadillo-cuadrado5 flex flex-col"
            style={{ minHeight: "120px" }}
          >
            <p>
              <b>Aprende</b>
            </p>
            <p>
              Hay situaciones que pueden generarnos emociones negativas como
              ira, enojo, ansiedad entre otras. Sin embargo, también hay otras
              situaciones que nos generan emociones positivas como alegría, amor
              y humor que nos permiten disfrutar la vida.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[50%] top-[85%]"
          style={{ transform: " translate(-50%, -50%)" }}
        >
          <div className="bocadillo-cuadrado5" style={{ minHeight: "120px" }}>
            <p>
              Lo importante es ser capaz de afrontar retos y situaciones, sin
              dejar que afecte nuestras emociones
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
