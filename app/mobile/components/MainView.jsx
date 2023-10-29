import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "./Context";

const MainView = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="fondo1 h-screen text-white relative">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;700&family=Ubuntu:wght@300&display=swap"
        rel="stylesheet"
      />
      <h1 className="text-6xl font-bold absolute z-10 top-4 left-4">EMYTIC</h1>
      <Image
        src="/img/Arbol.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[100%] position: absolute bottom-[0vh] right-[7pc] "
        data-aos="fade-right"
        data-aos-out="fade-left"
        id="Arbol"
      />
      <Image
        className="w-[18pc]  z-0  absolute left-[0%] top-[0%]"
        data-aos="fade-left" // Definición única de data-aos
        data-aos-out="fade-left"
        src="/img/selva1.svg"
        width={500}
        height={500}
      />
      <Image
        className="w-[18pc]  z-0  absolute right-[0%] top-[0%]"
        data-aos="fade-left" // Definición única de data-aos
        data-aos-out="fade-left"
        src="/img/selva2.svg"
        width={500}
        height={500}
      />

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
        width={300}
        height={500}
        className="absolute bottom-20  w-[12pc]"
        data-aos="fade-right"
        id="loro"
        data-aos-out="fade-left"
        title="Pepe el loro..."
      />
      <div
        data-aos="fade-left"
        data-aos-out="fade-left"
        className="absolute bottom-28 right-0 w-[10pc] flex flex-col items-center text-center text-black "
        onClick={() => handleClick(2)}
      >
        <h2 className="text-xl font-semibold ">Presiona para empezar</h2>
        <Image
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
        />  
      </div>
      <div data-aos="fade-left" className="z-40 absolute top-[14%] right-[2%] ">
        <div className="bocadillo-cuadrado-mobile1">
          <p>
            Hola soy <b>EMYTIC</b>, juntos realizaremos un divertido viaje por
            las regiones de Colombia, para conocer nuevos amigos que nos
            enseñaran sobre tus emociones y nos contaran unas historias muy
            interesante.
            <br /> <br />
            <b>Vamos sígueme!</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainView;
