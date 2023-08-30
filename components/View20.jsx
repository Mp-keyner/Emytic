import Image from "next/image";
import React from "react";
 
const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fourteen = document.getElementById("Fourteen");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    Fourteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.top = "43%";
    row.style.left = "11%";
    row.style.width = "200px";
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
          className="border-2 border-red-500 w-[34pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[11pc] top-[5%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Pregunta Si un compañero tropieza el cuaderno de tu amigo y se cae
            al piso, y no lo levanta, porque lo debes recoger él. ¿Qué haces?
            Así como la gripa se contagia, las emociones también, en que
            situaciones has contagiado a tus amiguitos de felicidad
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-[20pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[2%] bottom-[34%]"
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
