import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyComponent from "./Ras";

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
    <div className="relative">
      <div className="absolute bottom-[0] z-50 right-[0pc] w-[10pc] flex flex-col text-center items-center ">
        <h2>Presiona para empezar con la actividad</h2>
        <Image
          onClick={AddAnimation}
          src="/img/row.svg"
          width={100}
          height={100}
          className="flecha"
        />
      </div>
      <MyComponent />
    </div>
  );
};

export default View1;
