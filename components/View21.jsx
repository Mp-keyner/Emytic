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

    row.style.transition = "all 1s";
    row.style.top = "0%";
    row.style.right = "0%";
    row.style.width = "8pc";
    row.style.opacity = 0;

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 83) {
      const TwentyThree = document.getElementById("TwentyThree");

      TwentyThree.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "0%";
      row.style.right = "0%";
      row.style.width = "8pc";
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
        className="relative border-1 border-solid fondo4 h-screen"
      >
        <div className="absolute top-[4pc] text-center left-[0pc] w-[10pc] flex flex-col items-center">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[17pc]  absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/panda.png"
          width={500}
          height={500}
        />

        <div
          data-aos="fade-right"
          className="z-40 absolute right-[20pc] top-[10pc]"
        >
          <div className="bocadillo-cuadrado2">
            <p>
              Aprende Soy dueño de mis propias emociones, por eso me amo, me
              respeto, aun teniendo problemas y dificultades sé, que puedo
              superarlos y seguir adelante.
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute sm:right-[55%] right-[5%] sm:top-[62%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado3">
            <p>
              Soso vamos a enseñarle a nuestros amigos lo que aprendimos y
              aprendimos que…
            </p>
          </div>
        </div>
        <div
          className="border-2  w-[13pc] blu flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute  "
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        ></div>
        <div
          data-aos="fade-right"
          className="z-40 absolute left-[15%] top-[10%]"
        >
          <div className="bocadillo-cuadrado5" style={{ fontSize: "1.5pc" }}>
            <p>Soy Capaz</p>
            <Image src="/img/check.svg" width={50} height={50} />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute left-[25%] top-[37%]"
        >
          <div className="bocadillo-cuadrado5" style={{ fontSize: "1.5pc" }}>
            <p>Soy Fuerte</p>
            <Image src="/img/check.svg" width={50} height={50} />
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute left-[60%] bottom-[16%]"
        >
          <div className="bocadillo-cuadrado5" style={{ fontSize: "1.5pc" }}>
            <p>No me rindo</p>
            <Image src="/img/check.svg" width={50} height={50} />
          </div>
        </div>
        <div
          className="border-2 blu w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute  left-[60%] top-[83%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Soy fantástico</p>
          <Image src="/img/check.svg" width={50} height={50} />
        </div>
        <div
          className="border-2 blu w-[13pc] flex items-center gap-[1pc] text-lg px-4 py-1 z-40 absolute  left-[89%] top-[83%]"
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
