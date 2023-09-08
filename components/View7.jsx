import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Nine = document.getElementById("Nine");

    Nine.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "77%";
        row.style.left = "12%";
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "90%";
        row.style.left = "31%";
        row.style.width = "10pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 56) {
      const Nine = document.getElementById("Nine");

      Nine.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "77%";
          row.style.left = "12%";
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "90%";
          row.style.left = "31%";
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
      <div
        id="secon"
        className="relative border-1 border-solid  h-screen fondo5"
      >
        <div className="absolute top-[3pc] z-50 left-[0pc] w-[10pc] flex flex-col text-center items-center ">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[23pc] sm:w-[52pc] h-[12pc] sm:h-[15pc] border-2 blu text-lg px-4 py-1 z-40 absolute left-[3%] sm:left-[13pc] top-[18pc] sm:top-[3pc] text-[0.6pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <table class="styled-table text-[0.4pc] sm:text-[1pc]">
            <thead>
              <tr>
                <th>Edad</th>
                <th>Edad</th>
                <th>Edad</th>
                <th>Edad</th>
                <th>Edad</th>
                <th>Edad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image
                    src="/img/face/1.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  1
                </td>
                <td>
                  <Image
                    src="/img/face/2.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  2
                </td>
                <td>
                  <Image
                    src="/img/face/3.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  3
                </td>
                <td>
                  <Image
                    src="/img/face/4.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  4
                </td>
                <td>
                  <Image
                    src="/img/face/5.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  5
                </td>
                <td>
                  <Image
                    src="/img/face/6.svg"
                    width={100}
                    height={100}
                    className="w-[2pc] sm:w-[7pc]"
                  />
                  6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="w-[23pc] border-2  text-lg px-4 py-1 z-40 blu absolute left-[3%] sm:left-[13pc] top-[34pc] sm:top-[25pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>Escribe el numero de cada carita con la situación que la generó</p>
        </div>
        <Image
          src="/img/5.1.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="w-[16pc] sm:w-[36pc] z-10 position: absolute top-[0pc] right-[0pc]"
          data-aos="fade-right"
        />
        <Image
          src="/img/6.1.svg"
          data-aos="fade-right"
          width={100}
          height={100}
          className="w-[10pc] sm:w-[18pc] z-30 position: absolute top-[4pc] sm:top-[10pc] right-[0pc]"
        />
      </div>
    </>
  );
};

export default View1;
