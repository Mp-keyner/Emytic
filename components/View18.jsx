import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Twenty = document.getElementById("Twenty");

    // Realizar el desplazamiento al siguiente elemento
    Twenty.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "17%";
    row.style.left = "93%";
    row.style.width = "8pc";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 79) {
      const Twenty = document.getElementById("Twenty");

      Twenty.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.transition = "all 1s";
      row.style.top = "17%";
      row.style.left = "93%";
      row.style.width = "8pc";
      row.style.opacity = 0;
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="twelve"
        className="relative border-1 border-solid fondo5 h-screen"
      >
        <div className="absolute top-[4pc] text-center left-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <Image
          className="w-[24pc] absolute right-[1pc] top-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
          width={500}
          height={500}
        />
        <Image
          className="w-[78pc] absolute   right-[1pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/13.png?alt=media&token=04e64342-f3a5-49b3-881a-59de998fc84e"
          width={500}
          height={500}
        />
        <div
          data-aos="fade-right"
          className="z-40 absolute right-[20pc] top-[10pc]"
        >
          <div className="bocadillo-cuadrado4">
            <p>
              Hola niños! <b>Soy Soso</b>, un poco perezoso pero muy cariñoso, y
              tengo algo para contarte
            </p>
          </div>
        </div>

        <div
          data-aos="fade-right"
          className="z-40 absolute sm:left-[23%] left-[5%] sm:top-[62%] top-[25pc]"
        >
          <div className="bocadillo-cuadrado3">
            <p>
              Holaaa Preséntate a mis amigos, les he dicho que eres un oso
              anteojo muy especial
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
