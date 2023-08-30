import React, { useState } from "react";
import Image from "next/image";

const View11 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const ThirtyOne = document.getElementById("ThirtyOne");

    // Realizar el desplazamiento al siguiente elemento
    ThirtyOne.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.backgroundColor = "yellow";
    row.style.transition = "all 1s";
    row.style.top = "36%";
    row.style.left = "85%";
    row.style.width = "12pc";
    row.style.transform = "translate(0)";
    row.style.opacity = 0;
    console.log("objectsdftgyhuji");
  };
  const ShowTask = () => {
    console.log("tarea");
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="relative border-1 border-solid border-red-500 bg-yellow-600 h-screen">
        <div className="absolute z-50 top-[4pc] right-[0pc] w-[10pc] flex flex-col items-center bg-blue-500">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 border-red-500 w-[20pc] text-lg px-4 py-1 z-40 absolute bg-white text-black mess right-[-12%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>Escoge un regalo y descubre la tarea que guarda:</p>
        </div>

        <Image
          className="w-[17pc] border-2 z-40 border-red-500 absolute right-[0pc] bottom-[-2.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/5.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[41pc] border-2 border-red-500 absolute left-[-20%] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[41pc] border-2 border-red-500 absolute right-[-20%] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
        />
        <div
          style={{ transform: "translate(-50%, -50%)" }}
          className="grid grid-cols-2 border-2 border-red-500 absolute left-[50%] top-[50%] gap-[2pc]"
        >
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask}
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask}
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask}
          />
          <Image
            src="/img/regaloT.svg"
            width={200}
            height={200}
            onClick={ShowTask}
          />
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div
            style={{ backdropFilter: "blur(10px)" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff29]"
          >
            <div className="modal-overlay fixed inset-0"></div>
            <div className="modal-content bg-blue-900 rounded-lg p-4 z-20">
              <Image
                onClick={closeModal}
                src="/img/x.svg"
                width={50}
                height={50}
                className="absolute top-0 right-0 m-2"
              />
              {/* Contenido del modal */}
              <h2 className="text-lg font-bold mb-2">Tarea del regalo</h2>
              <p>Esta es la tarea que guarda el regalo.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default View11;
