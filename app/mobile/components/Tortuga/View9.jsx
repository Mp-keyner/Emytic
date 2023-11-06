import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View9 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo6 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(14)}
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
        <p>¡!</p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8 h-64 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="h-full pb-4">
          Había una vez un conejo muy presumido y vanidoso que se pasaba todo el
          día diciendo lo rápido que era corriendo y buscando la forma que lo
          retaran para hacerse lucir. Una tarde cerca del lago, una tortuguita
          cansada de escuchar sus alardes, le llama y le reta para hacer una
          carrera. El conejo al escuchar lo que dice la tortuguita, se ríe a
          carcajadas —Qué chistosa que eres tortuga, debes estar bromeando,
          siempre llegas tarde a todos lados—dijo la liebre mientras se reía de
          ella a carcajadas y con gran emoción llamó a todos los animales del
          bosque para que lo vieran ganar este reto tan pero tan tonto- dice el
          conejo. —no te rías tanto y esperemos al final de la carrera—
          respondió la tortuga con una sonrisa en su rostro. Esa misma tarde,
          los animales del bosque se reunieron para presenciar la carrera. Todos
          querían ver si la tortuga en realidad podía vencer a la liebre. Cuando
          todos estaban reunidos, el león, dijo con voz fuerte: —¡En sus marcas,
          listos, ya! El conejo corrió tan rápido que logro adelantar un gran
          trayecto, mirando hacia atrás dijo: - apenas Sali y ya no veo la
          tortuga, seguro estará pasando la línea de salida, tengo tiempo de ir
          a buscar un heladito para refrescarme y hacer una siesta corta- Cuando
          el conejo estaba haciendo su siesta, pensó: —Tortuga lenta e ingenua
          ¿Por qué habrá querido competir, si no tiene ninguna oportunidad de
          ganar?... Se acomodo debajo de un árbol frondoso que tenia una fresca
          sombra y allí se quedó dormido. Mientras tanto, la tortuga siguió
          caminando lento, pero sin pausa. Estaba tranquila y decidida a no
          darse por vencida. Pronto, se encontró con el conejo durmiendo
          plácidamente y siguió su recorrido ¡LA TORTUGA ESTA GANANDO LA
          CARRERA! Gritaron los animales de emoción… Los gritos despertaron al
          conejo, que no podía creer lo que veía: la tortuga estaba cruzando la
          meta y ella había perdido la carrera.
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

export default View9;
