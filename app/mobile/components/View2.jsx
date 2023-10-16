import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "./Context";

const View2 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen relative fondo2">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para sabes por qué pepe está enojado</h2>
        <Image
          onClick={() => handleClick(4)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-6 top-96"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>¡Hola Pepe, estos son mis amigos!</p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        <p>
          ¡Hola amigos, soy Pepe, el loro!
          <br /> Hoy estaba un poco enojado y triste a la vez ¿Quieres saber por
          que?
        </p>
      </div>
      <Image
        src="/img/Arbol2.svg"
        priority={true} // {false} | {true}
        width={400}
        height={600}
        className="w-[36pc] z-10 absolute top-[0pc] left-[0pc]"
        data-aos="fade-right"
        alt=""
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute top-8 -left-7"
        title="Pepe el loro..."
        alt=""
      />
    </div>
  );
};

export default View2;
