import Image from "next/image";
import React from "react";

const View34 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyFourt = document.getElementById("ThirtyFourt");

    // Realizar el desplazamiento al siguiente elemento
    ThirtyFourt.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "17%";
    row.style.left = "93%";
    row.style.width = "8pc";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 79) {
      const Twenty = document.getElementById("Twenty");

      Twenty.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.transition = "all 1s";
      row.style.top = "17%";
      row.style.left = "93%";
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
        className="relative border-1 border-solid fondo8 h-screen"
      >
        <div className="absolute top-[4pc] text-center left-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=''
          />
        </div>
        <Image
          className="w-[24pc] absolute left-[1pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
          width={500}
          height={500}
          alt=''
        />
        <Image
          className="w-[78pc] absolute   right-[1pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/13.png?alt=media&token=04e64342-f3a5-49b3-881a-59de998fc84e"
          width={500}
          height={500}
          alt=''
        />
        <div
          data-aos="fade-right"
          className="z-40 absolute right-[25%] top-[40%]"
        >
          <div className="bocadillo-cuadrado4">
            <p>
              Hola, <b>Timi</b>, como estas, te he notado pensativa en el dia de hoy...
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute sm:left-[23%] left-[5%] sm:top-[62%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado3">
            <p>
              Holaaa Emytic ¡Que alegria verte!
            </p>
          </div>
        </div>
        <div className="flex absolute bottom-0">
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
            alt=""
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default View34;

//     top: 91pc;
// left: 49pc;