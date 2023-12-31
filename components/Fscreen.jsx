import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sppiner from "./Sppiner";

const Fscreen = ({ setShowFunction, Show, volumen, setVolumen, isMovileQ }) => {
  const [wiew, setWiew] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setWiew(true);
    }, 100); // 10000 milisegundos = 10 segundos

    // Limpia el temporizador cuando el componente se desmonta o se actualiza
    return () => clearTimeout(timer);
  }, []); //
  function requestFullScreen() {
    setShowFunction(!Show);
    setVolumen(!volumen);
    console.log("dia dia ");
    // Verificar si el navegador admite el modo de pantalla completa
    if (isMovileQ) {
      if (document.documentElement.requestFullscreen) {
        // Solicitar entrar en modo de pantalla completa en respuesta a un clic
        document.documentElement.requestFullscreen();

        console.log(Show);
      }
    }
  }

  return (
    <div className="relative bg-customColor h-screen text-white flex justify-center flex-col sm:p-[9pc] p-[1pc] overflow-hidden ">
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
        src="/img/Arbol2.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[100%] position: absolute top-[0vh] left-[0pc] sm:w-[41pc]"
        data-aos="fade-right"
        data-aos-out="fade-left"
        id="Arbol"
      />
      <div className="w-[100%] position: absolute bottom-[0vh] right-[0] flex h-screen items-center justify-center flex-col gap-6 blU">
        <div className="flex items-center justify-center flex-col">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/lo.png?alt=media&token=fe3fd1e8-1660-4aee-aa59-8c3d1641ac3d"
            width={800}
            height={800}
          />
        </div>
        {wiew ? (
          <button
            onClick={requestFullScreen}
            className="border border-solid border-white w-[7pc] h-[3pc] rounded-lg z-40 text-white flecha"
          >
            Comenzar
          </button>
        ) : (
          <Sppiner />
        )}
      </div>
    </div>
  );
};

export default Fscreen;
