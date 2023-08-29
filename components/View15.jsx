import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Seventeen = document.getElementById("Seventeen");

    Seventeen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "blue";
    // row.style.transition = "all 1s";
    // row.style.top = "169pc";
    // row.style.left = "66pc";
    // row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-[#d89f22] h-screen p-[1pc]">
        <h1 className="text-[2pc] font-semibold">Descubre el mensaje oculto</h1>
        <br />
        <div className="absolute top-[3pc] right-[0pc] w-[10pc] flex flex-col items-center bg-green-400 z-[1]">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div className="p-[1pc] bg-white w-[21pc]">
          <img src="/img/ce/3.svg" alt="nn" className="w-[22pc]" />
        </div>
        <div className="absolute top-[4pc] right-[1pc] contaAni gap-[1pc] w-[54pc]">
          <div className="p-[1pc] bg-white tat">
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/13.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc]" />
          </div>
          <div className="p-[1pc] bg-white tat w-[11pc]">
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc]" />
          </div>
          <div
            className="p-[1pc] bg-white w-[29pc] tat ml-[7pc]"
            style={{ gridColumn: "1/3" }}
          >
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/6.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc]" />
          </div>

          <div className="p-[1pc] bg-white tat justify-end w-[5pc] ml-[16pc]">
            <img src="/img/Animal/28.svg" alt="nn" className="w-[22pc]" />
          </div>

          <div className="p-[1pc] bg-white tat w-[17pc]">
            <br />
            <img src="/img/Animal/23.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/10.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc]" />
          </div>
          <div className="p-[1pc] bg-white tat">
            <img src="/img/Animal/5.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/24.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc]" />
          </div>
          <div className="p-[1pc] bg-white tat">
            <img src="/img/Animal/21.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/15.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/6.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc]" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc]" />
          </div>
        </div>

        <div className="flex gap-[2pc] absolute bottom-[6pc] justify-center w-[97%]">
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc] " />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
        </div>
        <div className="flex gap-[2pc] bottom-[3pc] absolute justify-center w-[97%]">
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
          <div className="flex gap-[0.6pc] border border-1 border-solid border-black">
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
            <input type="text" className="bg-red-400 w-[2pc]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default View1;
