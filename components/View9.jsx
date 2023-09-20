import Image from "next/image";
import Link from "next/link";
import React from "react";

const View9 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Eleven = document.getElementById("Eleven");

    Eleven.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "82%";
        row.style.left = "11%";
        row.style.opacity = 1;
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.opacity = 1;
        row.style.top = "88%";
        row.style.left = "30%";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 48) {
      const Eleven = document.getElementById("Eleven");

      Eleven.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "82%";
          row.style.left = "11%";
          row.style.opacity = 1;
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.opacity = 1;
          row.style.top = "88%";
          row.style.left = "30%";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }

      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo5 h-screen">
        <div className="absolute top-[3pc] left-[0pc] text-center w-[10pc] flex flex-col items-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
              width={100}
              height={100}
              className="w-[2pc] sm:w-[7pc] alegria border-[3px] border-black rounded-full"
              title="alegria"
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.title)
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View9;
