import Image from "next/image";
import Link from "next/link";
import React from "react";

const View9 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyTow = document.getElementById("ThirtyTow");

    ThirtyTow.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "63%";
    row.style.left = "2%";
    row.style.opacity = 1;
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid bg-blue-600 h-screen">
        <div className="absolute top-[3pc] left-[0pc] text-center w-[10pc] flex flex-col items-center ">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <Image
          className=" z-40 absolute left-[15pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/1.svg"
          width={150}
          height={150}
        />
        <Image
          className=" z-40 absolute left-[55pc] top-[2pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/2.svg"
          width={150}
          height={150}
        />
        <Image
          className=" z-40 absolute left-[5pc] top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/3.svg"
          width={150}
          height={150}
        />
        <Image
          className=" z-40 absolute left-[32pc] top-[26pc]"
          data-aos="fade-dowm" // Definición única de data-aos
          data-aos-out="fade-down"
          src="/img/face/4.svg"
          width={150}
          height={150}
        />
        <Image
          className=" z-40 absolute left-[66pc] top-[22pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/face/5.svg"
          width={150}
          height={150}
        />

        <div
          className="w-[44pc] h-[7pc] border-2  text-[4pc] px-4 py-1 z-40 absolute  left-[18pc] top-[14pc]"
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
