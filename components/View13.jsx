import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fifteen = document.getElementById("Fifteen");

    // Realizar el desplazamiento al siguiente elemento
    Fifteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "15%";
    row.style.left = "14%";
    row.style.width = "8pc";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 82) {
      const Fifteen = document.getElementById("Fifteen");

      // Realizar el desplazamiento al siguiente elemento
      Fifteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "15%";
      row.style.left = "14%";
      row.style.width = "8pc";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-soli fondo6 h-screen"
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
          className="w-[13pc]  absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
          width={500}
          height={500}
        />

        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute right-[11pc] top-[6pc] sm:right-[17%] sm:top-[10%]"
        >
          <div className="bocadillo-cuadrado6" style={{ minHeight: "120px" }}>
            <p>
              ¡Si!, no debemos burlarnos de los demás. Hay que aprender que
              todos somos iguales y únicos, que tenemos capacidades aunque nos
              demoremos un poquito más…Como yo! jajajaja
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[19%]  top-[2pc] "
        >
          <div className="bocadillo-cuadrado1" style={{ minHeight: "120px" }}>
            <p>
              ¡ Tuti que bonita historia! Como te habrás sentido cuando la
              liebre se burlo de ti, lo importante es que pese a la risa de la
              liebre, pudiste sacar una sonrisa de felicidad. Amiguitos vamos a
              trabajar, en tu cuadernillo están estas preguntas, vamos comenta
              con tus compañeros y responde
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute  left-[50%] top-[50%] "
          style={{ transform: " translate(-50%, 5%)" }}
        >
          <div className="bocadillo-cuadrado5" style={{ minHeight: "120px" }}>
            <p>
              Responde y comenta: <br />
              1. ¿Cómo fue la actitud del conejo? <br />
              2. ¿Cómo fue la actitud de Tuti, la tortuga? <br />
              3. Crees que la actitud de la tortuga fue la correcta?, ¿por qué?{" "}
              <br />
              4. ¿Cómo te has sentido cuando se han burlado de ti y que has
              hecho? <br />
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
