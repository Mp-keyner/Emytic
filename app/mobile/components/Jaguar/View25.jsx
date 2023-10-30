import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const View8 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen relative fondo3">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para comenzar su historia</h2>
        <Image
          onClick={() => handleClick(20)}
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
        <p>
          Holaaa Preséntate a mis amigos, les he dicho que eres un oso anteojo
          muy especial
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8"
        data-aos="fade-right"
        data-aos-delay="1500"
      >
        <p>
          Hola niños! Soy Soso, un poco perezoso pero muy cariñoso, y tengo algo
          para contarte
        </p>
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
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

export default View8;
