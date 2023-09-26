import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Fourteen = document.getElementById("Fourteen");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    Fourteen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "43%";
    row.style.left = "11%";
    row.style.width = "200px";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 69) {
      const Fourteen = document.getElementById("Fourteen");

      // Realizar el desplazamiento al siguiente elemento
      Fourteen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "43%";
      row.style.left = "11%";
      row.style.width = "200px";
      console.log("objectsdftgyhuji");
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo6 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para </h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          data-aos="fade-right"
          className="z-40 absolute top-[50%] left-[50%]"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="bocadillo-cuadrado5" style={{ width: '60pc', fontSize: '1pc' }}>
            <p>
              Había una vez un conejo muy presumido y vanidoso que se pasaba todo
              el día diciendo lo rápido que era corriendo y buscando la forma que
              lo retaran para hacerse lucir. Una tarde cerca del lago, una
              tortuguita cansada de escuchar sus alardes, le llama y le reta para
              hacer una carrera. El conejo al escuchar lo que dice la tortuguita,
              se ríe a carcajadas —Qué chistosa que eres tortuga, debes estar
              bromeando, siempre llegas tarde a todos lados—dijo la liebre
              mientras se reía de ella a carcajadas y con gran emoción llamó a
              todos los animales del bosque para que lo vieran ganar este reto tan
              pero tan tonto- dice el conejo. —no te rías tanto y esperemos al
              final de la carrera— respondió la tortuga con una sonrisa en su
              rostro. Esa misma tarde, los animales del bosque se reunieron para
              presenciar la carrera. Todos querían ver si la tortuga en realidad
              podía vencer a la liebre. Cuando todos estaban reunidos, el león,
              dijo con voz fuerte: —¡En sus marcas, listos, ya! El conejo corrió
              tan rápido que logro adelantar un gran trayecto, mirando hacia atrás
              dijo: - apenas Sali y ya no veo la tortuga, seguro estará pasando la
              línea de salida, tengo tiempo de ir a buscar un heladito para
              refrescarme y hacer una siesta corta- Cuando el conejo estaba
              haciendo su siesta, pensó: —Tortuga lenta e ingenua ¿Por qué habrá
              querido competir, si no tiene ninguna oportunidad de ganar?... Se
              acomodo debajo de un árbol frondoso que tenia una fresca sombra y
              allí se quedó dormido. Mientras tanto, la tortuga siguió caminando
              lento, pero sin pausa. Estaba tranquila y decidida a no darse por
              vencida. Pronto, se encontró con el conejo durmiendo plácidamente y
              siguió su recorrido ¡LA TORTUGA ESTA GANANDO LA CARRERA! Gritaron
              los animales de emoción… Los gritos despertaron al conejo, que no
              podía creer lo que veía: la tortuga estaba cruzando la meta y ella
              había perdido la carrera.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
