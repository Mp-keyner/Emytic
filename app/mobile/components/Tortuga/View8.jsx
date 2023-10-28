import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const View8 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen relative fondo6">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para comenzar su historia</h2>
        <Image
          onClick={() => handleClick(12)}
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
          Esta es mi amiga Tuti la tortuga y con ella aprenderemos cosas
          maravillosas… <b>¡HOLA TUTI!</b> Saluda a los niños
        </p>
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
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
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
