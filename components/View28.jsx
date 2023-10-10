import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Thirty = document.getElementById("Thirty");

    // Realizar el desplazamiento al siguiente elemento
    Thirty.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "60%";
    row.style.left = "7%";
    row.style.width = "200px";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 76) {
      const Thirty = document.getElementById("Thirty");

      Thirty.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "60%";
      row.style.left = "7%";
      row.style.width = "200px";
      row.style.transform = "translate(0)";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo4 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center z-50">
          <h2>Presiona para ver los regalos</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=''
            className="flecha cursor-pointer text-center"
          />
        </div>


        <div
          data-aos="fade-right"
          className="z-40 absolute left-[16%] top-[25%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="bocadillo-cuadrado5">
            <p>
              <b>Aprende:</b>
              <br />
              Es importante mantener buenas relaciones con otras personas. Esto
              implica saludar, respetar, compartir y ayudar a los demás. Cuando
              logramos una buena comunicación, podemos solucionar conflictos,
              encontramos buenos amigos y somos felices.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute left-[17%] top-[58%]"
        >
          <div className="bocadillo-cuadrado1">
            <p>
              La base de una buena comunicación es el dialogo, solo así podemos
              reconocer nuestras diferencias y aprendemos a respetar a los demás.
            </p>
          </div>
        </div>

        <Image
          className="w-[17pc] z-40  absolute left-[0pc] bottom-[0]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
          width={500}
          height={500}
          alt=''
        />
        <Image
          className="w-[35pc] z-40  absolute left-[50%] top-[50%]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/palabras.svg"
          width={500}
          height={500}
          style={{ transform: "translate(-50%, -50%)" }}
          alt=''
        />
        <Image
          className="w-[41pc]   absolute right-[0pc] bottom-[-6.3pc]"
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
