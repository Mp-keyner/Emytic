import Image from "next/image";
import React from "react";
import Dnd from "./Dnd";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyFour = document.getElementById("TwentyFour");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    TwentyFour.scrollIntoView({
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
    if (e.keyCode === 68) {
      const TwentyFour = document.getElementById("TwentyFour");

      TwentyFour.scrollIntoView({
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
  const initialState = [
    { name: 'O', id: 1 },
    { name: 'I', id: 2 },
    { name: 'D', id: 3 },
    { name: 'A', id: 4 },
    { name: 'S', id: 5 },
    { name: 'A', id: 6 },
    { name: 'L', id: 7 },
    { name: 'D', id: 8 },
    { name: 'I', id: 9 },
    { name: 'R', id: 10 },
    { name: 'D', id: 11 },
  ]
  const FinalState = [
    { name: 'S', id: 1 },
    { name: 'O', id: 2 },
    { name: 'L', id: 3 },
    { name: 'I', id: 4 },
    { name: 'D', id: 5 },
    { name: 'A', id: 6 },
    { name: 'R', id: 7 },
    { name: 'I', id: 8 },
    { name: 'D', id: 9 },
    { name: 'A', id: 10 },
    { name: 'D', id: 11 },
  ]
  const initialState2 = [
    { name: 'M', id: 1 },
    { name: 'R', id: 2 },
    { name: 'A', id: 3 },
    { name: 'O', id: 4 },
  ]
  const FinalState2 = [
    { name: 'A', id: 1 },
    { name: 'M', id: 2 },
    { name: 'O', id: 3 },
    { name: 'R', id: 4 },
  ]
  const initialState3 = [
    { name: 'G', id: 1 },
    { name: 'T', id: 2 },
    { name: 'R', id: 3 },
    { name: 'U', id: 4 },
    { name: 'I', id: 5 },
    { name: 'A', id: 6 },
    { name: 'T', id: 7 },
    { name: 'D', id: 8 },
  ]
  const FinalState3 = [
    { name: 'G', id: 1 },
    { name: 'R', id: 2 },
    { name: 'A', id: 3 },
    { name: 'T', id: 4 },
    { name: 'I', id: 5 },
    { name: 'T', id: 6 },
    { name: 'U', id: 7 },
    { name: 'D', id: 8 },
  ]
  const initialState4 = [
    { name: 'S', id: 1 },
    { name: 'O', id: 2 },
    { name: 'R', id: 3 },
    { name: 'P', id: 4 },
    { name: 'E', id: 5 },
    { name: 'T', id: 6 },
    { name: 'E', id: 7 },
  ]
  const FinalState4 = [
    { name: 'R', id: 1 },
    { name: 'E', id: 2 },
    { name: 'S', id: 3 },
    { name: 'P', id: 4 },
    { name: 'E', id: 5 },
    { name: 'T', id: 6 },
    { name: 'O', id: 7 },
  ]
  const initialState5 = [
    { name: 'T', id: 1 },
    { name: 'I', id: 2 },
    { name: 'J', id: 3 },
    { name: 'U', id: 4 },
    { name: 'I', id: 5 },
    { name: 'S', id: 6 },
    { name: 'C', id: 7 },
    { name: 'A', id: 8 },
  ]
  const FinalState5 = [
    { name: 'J', id: 1 },
    { name: 'U', id: 2 },
    { name: 'S', id: 3 },
    { name: 'T', id: 4 },
    { name: 'I', id: 5 },
    { name: 'C', id: 6 },
    { name: 'I', id: 7 },
    { name: 'A', id: 8 },
  ]
  return (
    <>
      <div className="relative border-1 border-solid fondo4 h-screen">
        <div className="absolute z-50 bottom-[4pc] left-[1%] text-center w-[10pc] flex flex-col items-center ">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            alt=""
          />
        </div>

        <div className="fondo1">
          <div className="flex items-center flex-col gap-[1pc] h-screen py-[4pc] blu bg-[#00000040]"
            style={{
              overflowY: 'scroll'
            }}
          >
            <h1 className="text-[3pc] font-bold ">
              Organiza las palabras
            </h1>
            <Dnd initialState={initialState} FinalState={FinalState} />
            <Dnd initialState={initialState2} FinalState={FinalState2} />
            <Dnd initialState={initialState3} FinalState={FinalState3} />
            <Dnd initialState={initialState4} FinalState={FinalState4} />
            <Dnd initialState={initialState5} FinalState={FinalState5} />
          </div>
        </div>
        <Image
          className="w-[20pc] absolute right-[0pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2Fpanda2.png?alt=media&token=fe0d73cd-f95a-4f61-a6d3-bcd138828bdc"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
