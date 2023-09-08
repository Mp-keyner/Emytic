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
          src="/img/panda.png"
          width={500}
          height={500}
        />
        <Image
          className="w-[78pc] absolute right-[1pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/13.png?alt=media&token=04e64342-f3a5-49b3-881a-59de998fc84e"
          width={500}
          height={500}
        />
        <div
          className="border-2  w-1/3 text-lg px-4 py-1 z-40 absolute blu right-[20pc] top-[10pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Hola niños! Soy Soso, un poco perezoso pero muy cariñoso, y tengo
            algo para contarte
          </p>
        </div>
        <div
          className="border-2  w-1/3 text-lg px-4 py-1 z-40 absolute blu right-[36pc] top-[23pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Holaaa Preséntate a mis amigos, les he dicho que eres un oso anteojo
            muy especial
          </p>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
