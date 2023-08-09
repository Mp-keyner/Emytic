"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NO = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);
  const CALme = () => {
    console.log("object");
  };
  const CALme1 = () => {
    console.log("objectsdftgyhuji");
  };

  const AddAnimation = () => {
    console.log(window.screen.width, "width");
    console.log(window.screen.height, "height");
    Secon.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    // });
    row.style.backgroundColor = "blue";
    row.style.transition = "all 1s";
    switch (window.screen.height) {
      case 720:
        row.style.top = "61pc";
        row.style.left = "1pc";
        break;
      case 1024:
        row.style.top = "81pc";
        row.style.left = "1pc";
        break;

      default:
        break;
    }
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;700&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet"
      />
      <div className="border-1 border-solid border-red-500 bg-customColor h-screen text-white">
        <h1
          className="text-[8pc] font-bold z-40 absolute left-[1pc]"
          data-aos="fade-up"
          id="titulo"
        >
          HEMYTIC
        </h1>
        <Image
          src="/img/Arbol.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          onClick={CALme}
          className="w-[100%] position: absolute bottom-[0] right-[7pc]"
          data-aos="fade-right"
          data-aos-out="fade-left"
          id="Arbol"
        />
        <Image
          src="/img/1.svg"
          width={300}
          height={500}
          className="absolute top-[12pc] left-[34%] z-40"
          style={{ backgroundColor: "red" }}
          id="row"
          data-aos="fade-down"
        />
        <Image
          src="/img/6.svg"
          width={300}
          height={500}
          className="absolute top-[35%] left-[-1pc]"
          data-aos="fade-right"
          id="loro"
          data-aos-out="fade-left"
        />
        <div
          data-aos="fade-left"
          data-aos-out="fade-left"
          className="absolute bottom-[13pc] right-[0pc] w-[10pc] flex flex-col items-center bg-red-500"
        >
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="border-2 border-red-500 w-1/3 text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[9pc] top-[3pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Hola soy <b>EMYTIC</b>, juntos realizaremos un divertido viaje por
            las regiones de Colombia, para conocer nuevos amigos que nos
            enseñaran sobre tus emociones y nos contaran unas historias muy
            interesante.
            <b>Vamos sígueme!</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default NO;
