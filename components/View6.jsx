import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const eight = document.getElementById("eight");

    eight.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "red";
    row.style.transition = "all 1s";
    row.style.top = "81%";
    row.style.left = "10%";
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid border-red-500 bg-yellow-300 h-screen"
      >
        <div className="absolute top-[3pc] left-[0pc] w-[10pc] flex flex-col items-center bg-[#222]">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[23pc] border-2 border-red-500  text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[0pc] sm:left-[27pc] top-[9pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Las emociones son estados de las personas, que permiten que
            reaccione frente a diversas situaciones y puedan comunicarse con los
            demás Para conocerlas debes sentirlas, pero es importante el mensaje
            que con ellas les muestras a lo demás.
          </p>
        </div>
        <div
          className="w-[23pc] border-2 border-red-500  text-lg px-4 py-1 z-40 absolute bg-white text-black mess sm:left-[13pc] left-[0pc] top-[25pc]"
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
