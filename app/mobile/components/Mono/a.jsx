import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View12 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(16)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-16 top-[52%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p
          style={{
            fontSize: "1.7pc",
            fontWeight: "bold",
          }}
        >
          Soy Capaz
        </p>
        <Image
          src="/img/check.svg"
          width={200}
          height={200}
          className="w-[4pc]"
          title="Pepe el loro..."
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-16 top-56 z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p
          style={{
            fontSize: "1.7pc",
            fontWeight: "bold",
          }}
        >
          Soy Capazl
        </p>
        <Image
          src="/img/check.svg"
          width={200}
          height={200}
          className="w-[4pc]"
          title="Pepe el loro..."
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-16 bottom-[-44%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p
          style={{
            fontSize: "1.7pc",
            fontWeight: "bold",
          }}
        >
          Soy Capaz 12
        </p>
        <Image
          src="/img/check.svg"
          width={200}
          height={200}
          className="w-[4pc]"
          title="Pepe el loro..."
          alt=""
        />
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

export default View12;
