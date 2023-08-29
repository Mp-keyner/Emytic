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
  const AddAnimation = () => {
    console.log(window.screen.width, "width");
    console.log(window.screen.height, "height");
    const Secon = document.getElementById("secon");

    row.style.transition = "all 1s";
    if (screen.width > 400) {
      row.style.top = "80%";
      row.style.left = "10%";
    } else if (screen.width < 400) {
      row.style.top = "86%";
      row.style.left = "26%";
    }
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");

    Secon.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
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
          className="text-[4pc] sm:text-[8pc] font-bold z-40 absolute left-[1pc]"
          data-aos="fade-up"
          id="titulo"
        >
          EMYTIC
        </h1>
        <Image
          src="/img/Arbol.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="w-[100%] position: absolute bottom-[0vh] right-[7pc]"
          data-aos="fade-right"
          data-aos-out="fade-left"
          id="Arbol"
        />
        <Image
          src="/img/1.svg"
          width={300}
          height={500}
          className="fixed sm:top-[60%] top-[57%] sm:left-[43%] left-[23%] transform z-40 w-[10pc] sm:w-[16pc]"
          style={{ transform: "translate(-50%, -50%)" }}
          id="row"
          data-aos="fade-down"
        />
        <Image
          src="/img/6.svg"
          width={300}
          height={500}
          className="absolute top-[74%] sm:top-[35%] left-[-1pc] w-[12pc] sm:w-[19pc]"
          data-aos="fade-right"
          id="loro"
          data-aos-out="fade-left"
        />
        <div
          data-aos="fade-left"
          data-aos-out="fade-left"
          className="absolute sm:bottom-[13pc] bottom-[7pc] z-[1pc] right-[0pc] w-[10pc] flex flex-col items-center text-center"
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
          className="border-2 border-red-500 sm:w-1/3 w-[20pc] xl:top-[41%] text-lg px-4 py-1 z-40 absolute bg-white text-black mess sm:right-[14%] sm:top-[27%] right-[2%] top-[14%]"
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
