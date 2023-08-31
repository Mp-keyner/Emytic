import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyThree = document.getElementById("TwentyThree");

    // Realizar el desplazamiento al siguiente elemento
    TwentyThree.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    row.style.top = "0%";
    row.style.right = "0%";
    row.style.width = "8pc";
    row.style.opacity = 0;

    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid border-red-500 bg-green-400 h-screen"
      >
        <div className="absolute top-[4pc] text-center left-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[17pc] border-2 border-red-500 absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/panda.png"
          width={500}
          height={500}
        />
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[20pc] top-[10pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Aprende Soy dueño de mis propias emociones, por eso me amo, me
            respeto, aun teniendo problemas y dificultades sé, que puedo
            superarlos y seguir adelante.
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[36pc] top-[23pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Soso vamos a enseñarle a nuestros amigos lo que aprendimos y
            aprendimos que…
          </p>
        </div>
        <div
          className="border-2 border-red-500 w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[25%] top-[16%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Soy Capaz</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
        <div
          className="border-2 border-red-500 w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[25%] top-[37%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Soy Fuerte</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
        <div
          className="border-2 border-red-500 w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[60%] top-[16%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>No me rindo</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
        <div
          className="border-2 border-red-500 w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[60%] top-[83%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Soy fantástico</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
        <div
          className="border-2 border-red-500 w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[89%] top-[83%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Soy valiente</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;