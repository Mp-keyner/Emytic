import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyNine = document.getElementById("TwentyNine");

    // Realizar el desplazamiento al siguiente elemento
    TwentyNine.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "36%";
    row.style.left = "85%";
    row.style.width = "12pc";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 75) {
      const TwentyNine = document.getElementById("TwentyNine");

      TwentyNine.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "36%";
      row.style.left = "85%";
      row.style.width = "12pc";
      row.style.transform = "translate(0)";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo1 h-screen">
        <div className="absolute top-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=''
          />
        </div>


        <div
          data-aos="fade-right"
          className="z-40 absolute right-[12%] top-[48%]"
        >
          <div className="bocadillo-cuadrado5">
            <p>
              Hola chicos: En esta sopa de letras encontraras 8 palabras
              importante para mantener buenas relaciones con los demás.
              <b>Dale Click para ¡Descúbrirlas!</b>
            </p>
          </div>
        </div>
        <a href="https://sopa-six.vercel.app/"
          target="_blank"
          data-aos="fade-right"
          style={{ transform: "translate(-50%, -50%)" }}
          className="z-50 absolute left-[50%] top-[50%]">
          <div className="bocadillo-cuadrado5">
            Sopa de Letras
          </div>
        </a>


        <Image
          className="w-[17pc]  z-40  absolute right-[0pc] bottom-[0]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
          width={500}
          height={500}
          alt=''
        />
        <Image
          className="w-[41pc]   absolute left-[0pc] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
          alt=''
        />
      </div>
    </>
  );
};

export default View11;
