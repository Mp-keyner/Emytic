import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyFour = document.getElementById("TwentyFour");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    TwentyFour.scrollIntoView({
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
    if (e.keyCode === 68) {
      const TwentyFour = document.getElementById("TwentyFour");

      TwentyFour.scrollIntoView({
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
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 blu flex gap-[1pc] w-[34pc] text-lg px-4 py-1 z-40 absolute  left-[50%] top-[42%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>O</p>
          <p>I</p>
          <p>D</p>
          <p>A</p>
          <p>S</p>
          <p>A</p>
          <p>L</p>
          <p>D</p>
          <p>I</p>
          <p>R</p>
          <p>D</p>
        </div>
        <div
          className="border-2 blu flex gap-[1pc] w-[34pc] text-lg px-4 py-1 z-40 absolute  left-[50%] top-[53%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>M</p>
          <p>R</p>
          <p>A</p>
          <p>O</p>
        </div>
        <div
          className="border-2 blu flex gap-[1pc] w-[34pc] text-lg px-4 py-1 z-40 absolute  left-[50%] top-[64%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>G</p>
          <p>T</p>
          <p>R</p>
          <p>U</p>
          <p>I</p>
          <p>A</p>
          <p>T</p>
          <p>D</p>
        </div>
        <div
          className="border-2 blu flex gap-[1pc] w-[34pc] text-lg px-4 py-1 z-40 absolute  left-[50%] top-[75%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>S</p>
          <p>O</p>
          <p>R</p>
          <p>P</p>
          <p>E</p>
          <p>T</p>
          <p>E</p>
        </div>
        <div
          className="border-2 blu flex gap-[1pc] w-[34pc] text-lg px-4 py-1 z-40 absolute  left-[50%] top-[86%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>T</p>
          <p>I</p>
          <p>J</p>
          <p>U</p>
          <p>I</p>
          <p>S</p>
          <p>C</p>
          <p>A</p>
        </div>

        <div
          className="border-2 blu w-[30pc] text-lg px-4 py-1 z-40 absolute  right-[52%] top-[9%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            <span className="text-[1.4pc]">
              <b>Actividad</b>
            </span>
            <br />
            Ordena las letras y encuentra esas emociones que nos hacen sentir
            bien y a nuestros amigos también
          </p>
        </div>
        <Image
          className="w-[17pc] absolute left-[0pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/pantaParamos.png"
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
