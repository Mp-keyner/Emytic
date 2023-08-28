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

    row.style.backgroundColor = "blue";
    // row.style.transition = "all 1s";
    // row.style.top = "169pc";
    // row.style.left = "66pc";
    // row.style.width = "13pc";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-[#d89f22] h-screen">
        <div className="absolute top-[3pc] left-[0pc] w-[10pc] text-center flex flex-col items-center bg-green-400">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[52pc] h-[15pc] border-2 border-red-500  text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[12pc] top-[2pc]"
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
          className="w-[52pc] h-[12pc] border-2 border-red-500  text-lg px-4 py-1 z-40 absolute bg-white text-black mess left-[21pc] top-[20pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <table class="styled-table-tow">
            <tbody>
              <tr>
                <td>
                  <p>Ganar un examen con excelente nota</p>
                </td>
                <td>
                  <p>Quedarme solo en la oscuridad</p>
                </td>
                <td>
                  <p>Recibir una fiesta sorpresa</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p>No conseguir mi juguete favorito</p>
                </td>
                <td>
                  <p>Probar un alimento que no me gusta</p>
                </td>
                <td>
                  <p>Perder a un ser querido</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default View1;
