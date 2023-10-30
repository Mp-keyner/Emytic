import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const View7 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondoMap relative second">
      <div className="w absolute bottom-10 right-0 font-bold w-52 flex flex-col items-center text-center">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(19)}
          src="/img/row.svg"
          width={80}
          height={80}
          className="flecha cursor-pointer"
          alt="Flecha"
        />
      </div>
      <Image
        data-aos="fade-up-left"
        src={"/img/map/1.svg"}
        width={300}
        height={300}
        id="mapa"
        style={{ transform: "translate(-17%, -45%)" }}
        className="w-[41pc] border border-none absolute top-[25%] left-[5%]"
        title="Mapa de Colombia"
        alt="Mapa de Colombia"
      />
      <div
        data-aos="fade-right"
        data-aos-delay="500"
        className="absolute left-9 bottom-64"
      >
        <div className="bocadillo-cuadrado-mobile1 ">
          <p>
            Amigos viajemos, al corazón de nuestro país la región andina , es
            una región ubicada en el{" "}
            <b>centro y se extiende al norte y al sur,</b>
            esta bañada por dos ríos maravillosos el rio Magdalena y el rio
            Cauca, es la región de las flores y el café y allí conoceremos a
            alguien muy especial
          </p>
        </div>
      </div>
    </div>
  );
};

export default View7;
