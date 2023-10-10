import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

const View11 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tarea, setTarea] = useState('')
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyOne = document.getElementById("ThirtyOne");

    // Realizar el desplazamiento al siguiente elemento
    ThirtyOne.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "36%";
    row.style.left = "85%";
    row.style.width = "12pc";
    row.style.transform = "translate(0)";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const ShowTask1 = () => {
    console.log("tarea");
    setIsModalOpen(true);
    setTarea('Haz un dibujo a tu compañero con el que menos hablas y dile que deseas conocerlo mas.')
  };
  const ShowTask2 = () => {
    console.log("tarea");
    setIsModalOpen(true);
    setTarea('Comparte tu merienda con un compañero que no haya llevado.')
  };
  const ShowTask3 = () => {
    console.log("tarea");
    setIsModalOpen(true);
    setTarea('Acercate a ese compeñero que no comprendio algun tema y ayudalo a entenderlo.')
  };
  const ShowTask4 = () => {
    console.log("tarea");
    setIsModalOpen(true);
    setTarea('Regala abrazos a todos tus compañeros')
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 90) {
      const ThirtyOne = document.getElementById("ThirtyOne");

      ThirtyOne.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "36%";
      row.style.left = "85%";
      row.style.width = "12pc";
      row.style.transform = "translate(0)";
      row.style.opacity = 0;
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo5 h-screen">
        <div className="absolute z-50 top-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para decir como te sientes</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha cursor-pointer"
            alt=""
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute right-[-11%] top-[50%]"
          style={{ transform: "translate(-50%, -50%)", height: '3pc' }}
        >
          <div className="bocadillo-cuadrado">
            <p>Escoge un regalo y descubre la tarea que guarda:</p>

          </div>
        </div>

        <Image
          className="w-[17pc] z-40  absolute right-[0pc] bottom-[0]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
          width={500}
          height={500}
          alt=''
        />
        <Image
          className="w-[41pc]  absolute left-[-20%] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
          alt=''
        />
        <Image
          className="w-[41pc]  absolute right-[-20%] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
          alt=''
        />
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="grid grid-cols-2  absolute left-[50%] top-[50%] gap-[2pc]"
        >
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask1}
            alt=''
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask2}
            alt=''
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask3}
            alt=''
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask4}
            alt=''
          />
        </div>
        {/* Modal */}
        {isModalOpen && (
          <Modal closeModal={closeModal} mensaje={tarea} />
        )}
      </div>
    </>
  );
};

export default View11;
