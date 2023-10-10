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
            alt=""
          />
        </div>
        <Image
          className="w-[17pc]  absolute right-[5%] top-[5%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
          width={500}
          height={500}
          alt=""
        />

        <div
          data-aos="fade-right"
          className="z-40 absolute right-[20%] top-[10%]"
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
          className="z-40 absolute left-[21%] top-[64%]"
        >
          <div className="bocadillo-cuadrado3">
            <p>
              Soso vamos a enseñarle a nuestros amigos lo que aprendimos y
              aprendimos que…
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute left-[25%] top-[16%]"
        >
          <div className="bocadillo-cuadrado5 text-[2pc]">
            <p>Soy Capaz</p>
            <Image src="/img/check.svg" width={50} height={50} alt='' />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute  left-[25%] top-[37%]"
        >
          <div className="bocadillo-cuadrado5 text-[2pc]">
            <p>Soy Fuerte</p>
            <Image src="/img/check.svg" width={50} height={50} alt='' />
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute left-[60%] top-[66%]"
        >
          <div className="bocadillo-cuadrado5 text-[2pc]">
            <p>No me rindo</p>
            <Image src="/img/check.svg" width={50} height={50} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
