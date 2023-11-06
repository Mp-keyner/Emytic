import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View34 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para reiniciar esta aventura</h2>
        <Image
          onClick={() => handleClick(35)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>

      <Image
        className="w-[18pc]  z-0  absolute left-[0%] top-[0%]"
        data-aos="fade-left" // Definición única de data-aos
        data-aos-out="fade-left"
        src="/img/selva1.svg"
        width={500}
        height={500}
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2Fpanda2.png?alt=media&token=fe0d73cd-f95a-4f61-a6d3-bcd138828bdc"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute bottom-0 right-1"
        title="Pepe el loro..."
        alt=""
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute bottom-0-8 -left-7"
        title="Pepe el loro..."
        alt=""
      />
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F39.png?alt=media&token=5b155cb2-6871-47a5-8735-5bdbb3c639e8"
        data-aos="fade-right"
        width={200}
        height={200}
        className="z-40 absolute bottom-0-8 right-2"
        title="Pepe el loro..."
        alt=""
      />
      <div
        data-aos="fade-left"
        className="z-40 absolute top-[36%] right-[13%] "
      >
        <div className="bocadillo-cuadrado-mobile2">
          <p>
            Muchas gracias por hacer parte de esta increible aventura nos vemos
            en otra ocacion...
          </p>
        </div>
      </div>
    </div>
  );
};

export default View34;
