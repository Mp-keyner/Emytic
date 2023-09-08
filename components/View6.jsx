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
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[23pc] border-2 text-lg px-4 py-1 z-40 absolute left-[50%] sm:left-[50%] blu top-[25pc] sm:top-[40%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: " translate(-50%, -50%)" }}
        >
          <p>
            Las emociones son estados de las personas, que permiten que
            reaccione frente a diversas situaciones y puedan comunicarse con los
            demás Para conocerlas debes sentirlas, pero es importante el mensaje
            que con ellas les muestras a lo demás.
          </p>
        </div>
        <div
          className="w-[23pc] border-2 blu text-lg px-4 py-1 z-40 absolute sm:left-[13pc] sm:top-[60%] left-[0.7pc] top-[39pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>Pepe buscando información encontré esto..</p>
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
          src="/img/6.1.svg"
          data-aos="fade-right"
          width={100}
          height={100}
          className="w-[18pc] z-30 position: absolute top-[10pc] right-[0pc]"
        />
      </div>
    </>
  );
};

export default View1;
