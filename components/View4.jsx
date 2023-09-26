import Image from "next/image";
import Link from "next/link";
import React from "react";

const View4 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Six = document.getElementById("Six");

    Six.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "62%";
        row.style.left = "12%";
        row.style.width = "300px";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "88%";
        row.style.left = "26%";
        row.style.width = "10pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 53) {
      const Six = document.getElementById("Six");

      Six.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "62%";
          row.style.left = "12%";
          row.style.width = "300px";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "26%";
          row.style.width = "10pc";
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
      <div className="relative border-1 border-solid fondo4 h-screen">
        <div className="absolute bottom-[1%] sm:bottom-[25pc] right-[0pc] w-[10pc] flex flex-col items-center text-center "
          data-aos="fade-right"
          data-aos-delay="1500">

          <h2>Presiona para continuar</h2>

          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=''
          />
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          className="z-40 absolute left-[10%] sm:left-[53%] top-[46%] sm:top-[16pc]"
        >
          <div
            className="bocadillo-cuadrado2"
            style={{ minHeight: "67px" }}
            data-aos-delay="1500"
          >
            <p>
              Tranquilo Pepe, a cualquiera le puede pasar lo importante es que
              te calmaste y así es más fácil ver que te enoja y que te hace muy
              feliz. Amiguitos…vamos responder en tu cuaderno “Feliz” las
              siguientes Preguntas
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          data-aos-delay="500"
          className="z-40 absolute left-[20%] top-[33%]"
        >
          <div className="bocadillo-cuadrado1" style={{ minHeight: "67px" }}
          >
            <p>
              De pronto, llegó mamá y con su abrazo, mi cuerpo se sintió relajao
              y respiraba mejor, y sentí calma
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
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
          data-aos="fade-right"
          width={500}
          height={500}
          className="w-[18pc] z-40 position: absolute top-[10pc] left-[0pc]"
          title="Pepe el loro..."
        />
      </div>
    </>
  );
};

export default View4;
