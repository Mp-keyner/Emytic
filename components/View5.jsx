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

    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "79%";
        row.style.left = "10%";
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "92%";
        row.style.left = "31%";
        row.style.width = "9pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 54) {
      const Seven = document.getElementById("Seven");

      Seven.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "79%";
          row.style.left = "10%";
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "92%";
          row.style.left = "31%";
          row.style.width = "9pc";
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
      <div
        id="secon"
        className="relative border-1 border-solid  fondo1 h-screen"
      >
        <div className="absolute z-50 top-[3pc] left-[0pc] w-[10pc] flex flex-col items-center text-center ">
          <h2>Presiona para continuar con esta aventura</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha"
          />
        </div>

        <div className="z-40 absolute sm:left-[29pc] left-[3%] top-[47%] sm:top-[15pc]">
          <div className="bocadillo-cuadrado5">
            <p>
              1. En que parte del cuerpo sintió Pepe: <b>La tristeza</b> -{" "}
              <b>El enojo</b> - <b>La calma</b>
              <br />
              2. ¿Alguna vez te has sentido triste y enojado?
              <br />
              3. ¿Cuándo te sientes así, que haces?
            </p>
          </div>
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
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F39.png?alt=media&token=5b155cb2-6871-47a5-8735-5bdbb3c639e8"
          data-aos="fade-right"
          width={500}
          height={500}
          className="w-[18pc] z-30 position: absolute top-[10pc] right-[0pc]"
        />
      </div>
    </>
  );
};

export default View1;
