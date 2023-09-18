import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Eight = document.getElementById("Eight");

    Eight.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "81%";
        row.style.left = "10%";
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "88%";
        row.style.left = "31%";
        row.style.width = "7pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 55) {
      const Eight = document.getElementById("Eight");

      Eight.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "81%";
          row.style.left = "10%";
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "31%";
          row.style.width = "7pc";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid fondo5 h-screen"
      >
        <div className="absolute top-[3pc] z-50 left-[0pc] w-[10pc] text-center flex flex-col items-center ">
          <h2>Presiona para continuar a la actividad</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha"
          />
        </div>

        <div
          className="z-40 absolute left-[50%] sm:left-[50%] top-[40%] sm:top-[40%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="bocadillo-cuadrado5">
            <p>
              Las emociones son <b>estados de las personas</b>, que permiten que
              reaccione frente a diversas situaciones y puedan comunicarse con
              los demás Para conocerlas debes sentirlas, pero es importante el
              mensaje que con ellas les muestras a lo demás.
            </p>
          </div>
        </div>

        <div className="z-40 absolute sm:left-[13pc] sm:top-[60%] left-[0.7pc] top-[39pc]">
          <div className="bocadillo-cuadrado1" style={{ minHeight: "67px" }}>
            <p>Pepe buscando información encontré esto..</p>
          </div>
        </div>
        <Image
          src="/img/5.1.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="w-[36pc] z-10 position: absolute top-[0pc] right-[0pc]"
          data-aos="fade-right"
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F39.png?alt=media&token=5b155cb2-6871-47a5-8735-5bdbb3c639e8"
          data-aos="fade-right"
          width={500}
          height={500}
          className="w-[18pc] z-30 position: absolute top-[10pc] right-[0pc]"
        />
      </div>
    </>
  );
};

export default View1;
