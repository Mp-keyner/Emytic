import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Seven = document.getElementById("Seven");

    Seven.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "79%";
    row.style.left = "10%";
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid  bg-blue-600 h-screen"
      >
        <div className="absolute top-[3pc] left-[0pc] w-[10pc] flex flex-col items-center text-center ">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[23pc] border-2   text-lg px-4 py-1 z-40 absolute sm:left-[29pc] left-[0pc] top-[15pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            1. En que parte del cuerpo sintió Pepe: <b>La tristeza</b> -{" "}
            <b>El enojo</b> - <b>La calma</b>
            <br />
            2. ¿Alguna vez te has sentido triste y enojado?
            <br />
            3. ¿Cuándo te sientes así, que haces?
          </p>
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
