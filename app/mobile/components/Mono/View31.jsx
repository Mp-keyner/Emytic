import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";
import Cart from "../Cart";

const View31 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative flex flex-col justify-center items-center">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(37)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>

      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-40 top-10 h-64 overflow-scroll"
        style={{ position: "absolute" }}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="h-full pb-4">
          Si, Emytic, quiero contarte que desde hace días me di cuenta que
          muchas personas no cuidan su hogar, la tierra que tenemos… En el
          bosque donde vivo con mi familia, la tala y quema de arboles esta
          debilitando mi casa, las especies de animales se están extinguiendo y
          no hacemos nada por salvarlos… me da tristeza que desaparezca lo que
          somos… Colombia es una tierra hermosa, con parques naturales que
          debemos preservar, como por ejemplo:
        </p>
      </div>
      <div className="w-[90%] border border-black h-[27pc]">
        <Cart />
      </div>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
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

export default View31;
