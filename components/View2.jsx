import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimationNO = () => {
    console.log(window.screen.width, "width");
    console.log(window.screen.height, "height");
    const Secon = document.getElementById("Secon");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.svg";
    mapa.classList.remove("mi-animacion");
    mapa.classList.add("mi-animacionNO");

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
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fourth = document.getElementById("Fourth");

    Fourth.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "72%";
        row.style.left = "12%";
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "88%";
        row.style.left = "26%";
        row.style.width = "7pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 51) {
      const Fourth = document.getElementById("Fourth");
      Fourth.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "72%";
          row.style.left = "12%";
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "26%";
          row.style.width = "7pc";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo2 h-screen"
      >
        <div className="absolute sm:bottom-[13pc] bottom-[1pc] right-[1pc] w-[10pc] flex flex-col items-center text-center"
          data-aos-delay="1500"
          data-aos="fade-up-left">
          <h2>Presiona para saber por que pepe estaba enojado</h2>

          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="cursor-pointer flecha"
            alt=''
          />
        </div>


        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="z-40 absolute right-[36%] sm:top-[17pc] top-[60%]"
        >
          <div className="bocadillo-cuadrado2">
            <p>¡Hola Pepe, estos son mis amigos!</p>
          </div>
        </div>

        <div
          className="z-40 absolute sm:right-[59%] right-[2%] sm:top-[8pc] top-[4%]"
          data-aos="fade-up"
          data-aos-delay="2500"
        >
          <div className="bocadillo-cuadrado3">
            <p>
              ¡Hola amigos, soy Pepe, el loro! Hoy estaba un poco enojado y
              triste a la vez ¿Quieres saber por que?
            </p>
          </div>
        </div>
        <Image
          src="/img/Arbol2.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="w-[36pc] z-10 position: absolute top-[0pc] left-[0pc]"
          data-aos="fade-right"
          alt=''
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
          data-aos="fade-right"
          width={600}
          height={600}
          className="w-[18pc] z-40 position: absolute top-[10pc] left-[-2pc]"
          title="Pepe el loro..."
          alt=''
        />
      </div>
    </>
  );
};

export default View1;
