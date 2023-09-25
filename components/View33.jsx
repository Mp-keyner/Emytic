import Image from "next/image";
import React, { useState } from "react";

const View11 = () => {
  const [StateX, setStateX] = useState('')
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyFive = document.getElementById("ThirtyFive");

    // Realizar el desplazamiento al siguiente elemento
    ThirtyFive.scrollIntoView({
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
            alt=""
          />
        </div>


        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[49%] top-[10%]"
        >
          <div className="bocadillo-cuadrado5">
            <p>
              Juguemos y ayudemos a Milu a crear estrategias para mejorar nuestro entorno y cuidar nuestra vida
            </p>
          </div>
        </div>

        <Image
          className="w-[17pc]  z-40  absolute right-[5%] top-[-1%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F33.png?alt=media&token=adf31456-021a-4f5e-834a-2d1587b2e1ec"
          width={500}
          height={500}
          alt=""
        />
        <Image
          className="w-[18pc]  z-0  absolute left-[0%] top-[0%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/selva1.svg"
          width={500}
          height={500}
          alt=""
        />
        <Image
          className="w-[18pc]  z-0  absolute right-[0%] top-[0%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/selva2.svg"
          width={500}
          height={500}
          alt=""
        />
        <div className="Se z-50 absolute top-[60%] left-[50%] bg-white border border-black p-[1pc]" style={{ transform: "translate(-50%, -50%)" }}>
          <div className="flex items-center gap-[1pc] ">
            <p className="w-[21pc]">Reciclar las basuras</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]">Tirar las basuras al piso</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]">Hacer campañasde aseo en mi barrio</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]"> Dejar los grifos dek gua abiertos para que el agua se desperdicie</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]">colocar letreros que ensucien las paredes</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]">Sembrar arboles</p>
            <input type="radio" />
          </div>
          <div className="flex items-center gap-[1pc]">
            <p className="w-[21pc]">Apagar las luces cuando no sea necesario utilizarla</p>
            <input type="radio" />
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
      </div >
    </>
  );
};

export default View11;
