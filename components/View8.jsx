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
  return (
    <>
      <div className="relative border-1 border-solid  bg-blue-600 h-screen">
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
          className="w-[23pc] text-[0-6pc] sm:w-[52pc] h-[15pc] border-2   text-lg px-4 py-1 z-40 absolute  text-black left-[3%] sm:left-[12pc] top-[2pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <table class="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Email</th>
                <th>Email</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Image src="/img/face/1.svg" width={100} height={100} />1
                </td>
                <td>
                  <Image src="/img/face/2.svg" width={100} height={100} />2
                </td>
                <td>
                  <Image src="/img/face/3.svg" width={100} height={100} />3
                </td>
                <td>
                  <Image src="/img/face/4.svg" width={100} height={100} />4
                </td>
                <td>
                  <Image src="/img/face/5.svg" width={100} height={100} />5
                </td>
                <td>
                  <Image src="/img/face/6.svg" width={100} height={100} />6
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          className="w-[52pc] h-[12pc] border-none text-lg px-4 py-1 z-40 absolute  grid grid-cols-3 text-[0.6pc] text-black  left-[21pc] top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>Ganar un examen con excelente nota</p>

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
