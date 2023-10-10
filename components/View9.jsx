import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const View9 = () => {
  const [alegria, setAlegria] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
  );
  const [tristeza, setTristeza] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F3.png?alt=media&token=5388ab3d-868a-402c-bf05-9a230380e5c8"
  );
  const [enojo, setEnojo] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F2.png?alt=media&token=c69d47eb-46d2-40f8-baa8-6375aa606731"
  );
  const [miedo, setMiedo] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F4.png?alt=media&token=aa83b80b-06b6-41a9-85ec-ce85d6074041"
  );
  const [sorpresa, setSorpresa] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F5.png?alt=media&token=0c9373cc-abf3-47c4-a795-1b884645a8a9"
  );
  const [desagrado, setDesagrado] = useState(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F6.png?alt=media&token=dd373c4e-041d-499a-91cf-2a89b9c327e2"
  );
  const Alegria = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F1.png?alt=media&token=88ce0385-2b21-41a3-8998-59da5b7b8b38"
    );
  };
  const Tristeza = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F3.png?alt=media&token=e6dc324f-a409-4203-81ad-e880f7d7122f"
    );
  };
  const Enojo = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F2.png?alt=media&token=7b930cf5-4568-4378-b016-75a904b7ed4b"
    );
  };
  const Miedo = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F4.png?alt=media&token=6a39090c-ee37-49e8-b331-5c12722c2a78"
    );
  };
  const Sorpresa = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F5.png?alt=media&token=47bdd4bf-eb63-4386-b2b4-6cd8e1c2e85d"
    );
  };
  const Desagrado = () => {
    setAlegria(
      "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FCarasColor%2F6.png?alt=media&token=76e98c7b-ae0a-491f-99ed-7643698ea6b4"
    );
  };

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
            className="flecha cursor-pointer"
            alt=""
          />
        </div>

        <div className="Div1 flex items-center justify-center flex-col  h-screen gap-[1pc]">
          <div className="Div2 flex items-center justify-between w-[50pc]">
            <Image
              onClick={Alegria}
              src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
              width={100}
              height={100}
              className="w-[2pc] sm:w-[8pc] alegria border-[3px] border-black rounded-full"
              title="alegria"
              alt=''
            />
            <Image
              onClick={Enojo}
              src={enojo}
              width={100}
              height={100}
              className="w-[2pc] sm:w-[8pc] Enojo border-[3px] border-black rounded-full"
              title="alegria"
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.title)
              }
              alt=''
            />
          </div>
          <div className="D3 bg-white flex items-center flex-col border-[2px] border-black rounded-md p-[1pc]">
            <p className="text-[3pc]">¿CÓMO TE SIENTES?</p>
            <Image
              onClick={Enojo}
              src={alegria}
              width={100}
              height={100}
              className="w-[2pc] sm:w-[8pc] border-[3px] border-black rounded-full"
              title="alegria"
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.title)
              }
              alt=''
            />
          </div>
          <div className="Div3 flex items-center justify-between w-[50pc]">
            <Image
              onClick={Tristeza}
              src={tristeza}
              width={100}
              height={100}
              className="w-[2pc] sm:w-[8pc] Tristeza border-[3px] border-black rounded-full"
              title="alegria"
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.title)
              }
              alt=''
            />
            <Image
              onClick={Sorpresa}
              src={sorpresa}
              width={100}
              height={100}
              className="w-[2pc] sm:w-[8pc] Sorpresa border-[3px] border-black rounded-full"
              title="alegria"
              onDragStart={(e) =>
                e.dataTransfer.setData("text/plain", e.target.title)
              }
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View9;
