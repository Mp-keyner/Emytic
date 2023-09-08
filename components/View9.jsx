import Image from "next/image";
import Link from "next/link";
import React from "react";

const View9 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Eleven = document.getElementById("Eleven");

    Eleven.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "82%";
        row.style.left = "11%";
        row.style.opacity = 1;
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.opacity = 1;
        row.style.top = "88%";
        row.style.left = "30%";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 48) {
      const Eleven = document.getElementById("Eleven");

      Eleven.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "82%";
          row.style.left = "11%";
          row.style.opacity = 1;
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.opacity = 1;
          row.style.top = "88%";
          row.style.left = "30%";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }

      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo5 h-screen">
        <div className="absolute top-[3pc] left-[0pc] text-center w-[10pc] flex flex-col items-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <Image
          className="border-2 z-40 absolute left-[15pc] border-none top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/1.svg"
          width={150}
          height={150}
        />
        <Image
          className="border-2 z-40 absolute left-[6%] border-none top-[15pc] sm:top-[2pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/2.svg"
          width={150}
          height={150}
        />
        <Image
          className="border-2 z-40 absolute left-[13%] sm:left-[5pc] border-none w-[8pc] top-[44pc] sm:top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/3.svg"
          width={150}
          height={150}
        />
        <Image
          className="border-2 z-40 absolute left-[14pc] sm:left-[32pc] border-none top-[37pc] sm:top-[26pc]"
          data-aos="fade-dowm" // Definición única de data-aos
          data-aos-out="fade-down"
          src="/img/face/4.svg"
          width={150}
          height={150}
        />
        <Image
          className="border-2 z-40 absolute left-[55%] sm:left-[66pc] border-none top-[17pc] sm:top-[22pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/5.svg"
          width={150}
          height={150}
        />

        <div
          className="w-[23pc] text-[2.05pc] sm:w-[44pc] h-[4pc] blu sm:h-[7pc] border-2  sm:text-[4pc] px-4 py-1 z-40 absolute left-[3%] sm:left-[27%] top-[50%] sm:top-[14pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>¿CÓMO TE SIENTES?</p>
        </div>
      </div>
    </>
  );
};

export default View9;
