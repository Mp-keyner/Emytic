import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View28 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo2 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(33)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-16 top-96 z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          La base de una buena comunicación es el dialogo, solo así podemos
          reconocer nuestras diferencias y aprendemos a respetar a los demás.
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed left-40 -top-16 z-50 h-64 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
        style={{ backgroundColor: "#51e843" }}
      >
        <p className="h-full">
          <b>Aprende:</b> <br />
          Es importante mantener buenas relaciones con otras personas. Esto
          implica saludar, respetar, compartir y ayudar a los demás. Cuando
          logramos una buena comunicación, podemos solucionar conflictos,
          encontramos buenos amigos y somos felices.
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

export default View28;
