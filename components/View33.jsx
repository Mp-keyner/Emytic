import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Thirty = document.getElementById("Thirty");

    // Realizar el desplazamiento al siguiente elemento
    Thirty.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "60%";
    row.style.left = "7%";
    row.style.width = "200px";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid fondo8 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center z-50">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 blu w-[54pc] text-lg px-4 py-1 z-40 absolute text-black left-[49%] top-[16%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            Si, Emytic, quiero contarte que desde hace días me di cuenta que
            muchas personas no cuidan su hogar, la tierra que tenemos… En el
            bosque donde vivo con mi familia, la tala y quema de arboles esta
            debilitando mi casa, las especies de animales se están extinguiendo
            y no hacemos nada por salvarlos… me da tristeza que desaparezca lo
            que somos… Colombia es una tierra hermosa, con parques naturales que
            debemos preservar, como por ejemplo:
          </p>
        </div>
        <div
          className="border-2 blu w-[24pc] text-lg px-4 py-1 z-40 absolute text-black left-[33%] top-[58%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            La base de una buena comunicación es el dialogo, solo así podemos
            reconocer nuestras diferencias y aprendemos a respetar a los demás.
          </p>
        </div>

        <Image
          className="w-[17pc]  z-40  absolute right-[5%] top-[-1%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/mono2.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[18pc]  z-0  absolute left-[0%] top-[0%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/selva1.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[18pc]  z-0  absolute right-[0%] top-[0%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/selva2.svg"
          width={500}
          height={500}
        />
        <div className="flex absolute bottom-0">
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
          />
          <Image
            className="w-[20pc]  "
            data-aos="fade-left" // Definición única de data-aos
            data-aos-out="fade-left"
            src="/img/selva3.svg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default View11;
