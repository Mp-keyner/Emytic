import React from "react";
import Image from "next/image";

const Fscreen = ({ setShowFunction }) => {
  const requestFullScreen = () => {
    console.log("dia dia ");
    // Verificar si el navegador admite el modo de pantalla completa
    if (document.documentElement.requestFullscreen) {
      // Solicitar entrar en modo de pantalla completa en respuesta a un clic
      document.documentElement.requestFullscreen();
      setShowFunction();
    }
  };

  return (
    <div className="relative bg-customColor h-screen text-white flex justify-center flex-col sm:p-[9pc] p-[1pc] overflow-hidden ">
      <br />
      <div className="z-40 sm:w-[30pc] w-[20pc] sm:border p-[1pc]">
        <h1 className="text-center text-[2pc] ">Antes de empezar</h1>
        <p className="z-40 text-[1.4pc]">
          Activa el modo de pantalla, competa para potenciar la experiencia{" "}
        </p>
        <br />
        <button
          className="border border-solid border-white w-[7pc] h-[3pc] rounded-lg z-40"
          onClick={requestFullScreen}
        >
          Comenzar
        </button>
      </div>
      <h1
        className="text-[4pc] sm:text-[8pc] font-bold z-40 absolute left-[2pc] top-[3pc]"
        data-aos="fade-up"
        id="titulo"
      >
        EMYTIC
      </h1>
      <Image
        src="/img/Arbol.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[100%] position: absolute bottom-[0vh] right-[7pc] sm:right-[-6pc] md:right-[0] xl:right-[0]"
        data-aos="fade-right"
        data-aos-out="fade-left"
        id="Arbol"
      />
      <Image
        src="/img/1.svg"
        width={300}
        height={500}
        className="fixed sm:top-[60%] top-[74%] sm:left-[81%] left-[68%] transform z-40 sm:w-[16pc] w-[10pc]"
        style={{ transform: "translate(-50%, -50%)" }}
        id="row"
        data-aos="fade-down"
      />
      <Image
        src="/img/Arbol2.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[100%] position: absolute top-[0vh] left-[0pc] sm:w-[41pc]"
        data-aos="fade-right"
        data-aos-out="fade-left"
        id="Arbol"
      />
    </div>
  );
};

export default Fscreen;
