import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ten = document.getElementById("ten");

    ten.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    // row.style.transition = "all 1s";
    // row.style.top = "169pc";
    // row.style.left = "66pc";
    // row.style.width = "13pc";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 57) {
      const ten = document.getElementById("ten");

      ten.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.opacity = 0;
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid  fondo4 h-screen">
        <div className="absolute top-[3pc] left-[0pc] w-[10pc] text-center flex flex-col items-center ">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[23pc] bg-[#00000096] sm:w-[52pc] h-[12pc] sm:h-[15pc] border-2 blu text-lg px-4 py-1 z-40 absolute left-[3%] sm:left-[50%] top-[18pc] sm:top-[30%] text-[0.6pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          style={{ transform: "translate(-50%, -50%)" }}
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
                    value="alegris"
                    title="alegris"
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
          className="w-[23pc] sm:w-[52pc] h-[12pc] border-none blu text-lg px-4 py-1 z-40 absolute  grid grid-cols-2 sm:grid-cols-3 gap-[1pc] left-[3%] sm:left-[21pc] top-[27pc] text-[1pc] sm:top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <label htmlFor="">
            <p>Ganar un examen con excelente nota</p>
            <input type="text" placeholder="Como te sientes" />
          </label>

          <p>Quedarme solo en la oscuridad</p>

          <p>Recibir una fiesta sorpresa</p>

          <p>No conseguir mi juguete favorito</p>

          <p>Probar un alimento que no me gusta</p>

          <p>Perder a un ser querido</p>
        </div>
      </div>
    </>
  );
};

export default View1;
