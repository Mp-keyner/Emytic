"use client";
import React from "react";
import Image from "next/image";

const View = () => {
  const ko = () => {
    console.log("keyner");
  };
  const handleClick = () => {
    console.log("¡Haz hecho clic en el div o etiqueta!");
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;600&display=swap"
        rel="stylesheet"
      />

      <main>
        <div className="border-1 border-solid border-red-500 bg-customColor h-screen text-white">
          <h1 className="text-center" onClick={handleClick}>
            EMYTIC
          </h1>
          <div className="flex justify-between items-center h-[96%] relative">
            <div className="w-[50%] pl-[1.5pc]">
              <Image
                src="/img/Rocking Horse.svg"
                priority={true} // {false} | {true}
                width={400}
                height={600}
                className="w-[100%] position: absolute top-[-42.6pc] right-[7pc]"
              />
            </div>
            <div className="w-[50%] flex justify-end">
              <Image
                src="/img/1.svg"
                width={300}
                height={500}
                style={{ zIndex: 999 }}
                className="absolute top-[12pc] left-[34%]"
              />
              <Image
                src="/img/6.svg"
                width={300}
                height={500}
                className="absolute top-[21pc] left-[-1pc]"
              />
              <div className="w-[27%] bg-red-500">
                <h2>Presiona para empezar</h2>
                <button onClick={ko} style={{ background: "blue" }}>
                  CLck
                </button>
                <Image src="/img/row.svg" width={100} height={100} />
              </div>
            </div>
          </div>
        </div>

        {/* Divs adicionales con contenido */}
        <div
          id="secon"
          className="border-1 border-solid border-red-500 bg-red-400 h-screen"
        >
          Contenido aquí
        </div>
        <div
          id="secon"
          className="border-1 border-solid border-blue-500 bg-blue-400 h-screen"
        >
          Contenido aquí
        </div>
        <div
          id="secon"
          className="border-1 border-solid border-red-500 bg-yellow-400 h-screen"
        >
          Contenido aquí
        </div>
      </main>
    </>
  );
};

export default View;
