import Image from "next/image";
import Link from "next/link";
import React from "react";

const View9 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Eightteen = document.getElementById("Eightteen");

    Eightteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "82%";
    row.style.left = "11%";
    row.style.opacity = 1;
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 85) {
      const Eightteen = document.getElementById("Eightteen");

      Eightteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "82%";
      row.style.left = "11%";
      row.style.opacity = 1;
      row.style.width = "13pc";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid  fondo6 h-screen">
        <div className="absolute top-[3pc] left-[0pc] w-[10pc] flex flex-col items-center text-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <Image
          className="  z-40 absolute left-[15pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/1.svg"
          width={150}
          height={150}
        />
        <Image
          className="  z-40 absolute left-[55pc] top-[2pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/2.svg"
          width={150}
          height={150}
        />
        <Image
          className="  z-40 absolute left-[5pc] top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/3.svg"
          width={150}
          height={150}
        />
        <Image
          className="  z-40 absolute left-[32pc] top-[26pc]"
          data-aos="fade-dowm" // Definición única de data-aos
          data-aos-out="fade-down"
          src="/img/face/4.svg"
          width={150}
          height={150}
        />
        <Image
          className="  z-40 absolute left-[66pc] top-[22pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/5.svg"
          width={150}
          height={150}
        />

        <div
          className="w-[44pc] h-[7pc] blu border-2  text-[4pc] px-4 py-1 z-40 absolute left-[18pc] top-[14pc]"
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
