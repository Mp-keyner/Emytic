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
          onClick={() => handleClick(11)}
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
            Ahora vamos a conocer a otro amigo en la región pacifico, la cual
            esta ubicada al <b>occidente</b> de nuestro país Colombia, aquí
            podemos escuchar diversos sonidos como los cantos de las ballenas
            jorobada, el sonido de la marimba, de la naturaleza y de la
            Felicidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default View7;
