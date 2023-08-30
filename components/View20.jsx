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

    row.style.backgroundColor = "red";
    row.style.transition = "all 1s";
    row.style.top = "60%";
    row.style.left = "7%";
    row.style.width = "200px";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-red-400 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 border-red-500 w-[34pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[50%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            Pregunta Si un compañero tropieza el cuaderno de tu amigo y se cae
            al piso, y no lo levanta, porque lo debes recoger él. ¿Qué haces?
            Así como la gripa se contagia, las emociones también, en que
            situaciones has contagiado a tus amiguitos de felicidad
          </p>
        </div>

        <div
          className="border-2 border-red-500 w-[20pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[18%] top-[9%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Amiguitos, en tu cuadernillo mientras coloreas a Soso, piensa y
            pregúntales a tus compañeros
          </p>
        </div>
        <Image
          className="w-[17pc] border-2 border-red-500 absolute left-[0pc] bottom-[0pc]"
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
