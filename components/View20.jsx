import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyTwo = document.getElementById("TwentyTwo");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    TwentyTwo.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "60%";
    row.style.left = "7%";
    row.style.width = "200px";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 65) {
      const TwentyTwo = document.getElementById("TwentyTwo");

      TwentyTwo.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "60%";
      row.style.left = "7%";
      row.style.width = "200px";
      row.style.transform = "translate(0)";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo4 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute left-[50%] top-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="bocadillo-cuadrado5">
            <p>
              Pregunta Si un compañero tropieza el cuaderno de tu amigo y se cae
              al piso, y no lo levanta, porque lo debes recoger él. ¿Qué haces?
              Así como la gripa se contagia, las emociones también, en que
              situaciones has contagiado a tus amiguitos de felicidad
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute right-[18%] top-[9%]"
        >
          <div className="bocadillo-cuadrado2">
            <p>
              Amiguitos, en tu cuadernillo mientras coloreas a Soso, piensa y
              pregúntales a tus compañeros
            </p>
          </div>
        </div>
        <Image
          className="w-[17pc]   absolute left-[0pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
