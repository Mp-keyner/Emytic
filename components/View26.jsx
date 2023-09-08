import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyEight = document.getElementById("TwentyEight");

    // Realizar el desplazamiento al siguiente elemento
    TwentyEight.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "60%";
    row.style.left = "7%";
    row.style.width = "200px";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 74) {
      const TwentyEight = document.getElementById("TwentyEight");

      TwentyEight.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "60%";
      row.style.left = "7%";
      row.style.width = "200px";
      row.style.transform = "translate(0)";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo5 h-screen">
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
          className="border-2 blu w-[54pc] text-[1pc] px-4 py-1 z-40 absolute left-[52%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            – ahhhh corran, corran ….corran, corran por sus vidas se escucho
            decir de un diminuto Cuy jajajaja aproveche su pánico y rugí con
            todas mis fuerzas- GRUAAAAAAAAA, y de pronto la reserva se paralizó,
            todos se sintieron amenazados, ya nadie gritaba ni corría, me
            miraban con temor, y Terror, me acorde de las palabras de mamá, anda
            con amabilidad… me sentí abrumado y el que salió corriendo fui Yo.
            Corrí y corrí, y cuando me di cuenta estaba en el rio Ariporo,
            sediento tome agua queriendo suspirar, -Hola Flaqui, me saludaron,
            era el señor Chico el Chigüiro, acabo de ver lo que sucedió -¿Qué
            crees que le pasó a tus amigos? –No sé, todas la mañanas nos
            divertimos con mis hazañas, es importante que me vean y que me
            saluden, y que me escuchen , y que me… -Continua, dijo el señor
            Chigüiro, pensando le dije –ah! Ah! Ellos me escuchan, y yo no los
            dejo hablar, ellos me saludan y yo no saludo a ninguno, no conozco
            sus hazañas, cuando me ven, me saludan pero se esconden y… siempre
            termino solo- dije tristemente, -no he sido amable, -¿Qué debes
            hacer pequeño Jaguar?- me pregunto –buscarlos, pedirles perdón, debo
            solucionar el desastre que hice…- Suspira mi pequeño, hazlo, así se
            va tu enojo, y lo que sientes, y ves hacer lo que me has dicho,
            corregir tus errores te ayudará a recuperar a tus amigos- dijo el
            señor Chigüiro. Mientras me devolvía pensaba en una forma de
            acercarme, así que decidí dejarles una notica en la puertas de sus
            casas, que decía –perdón, ¿quieres ser mi amigo? con un ramito de
            mamito, y fui a descansar. A la mañana siguiente, cuando salía…para
            mi sorpresa, todos estaban en la puerta de mi casa –Buenos días
            Flaqui, ¿Cómo estas hoy?-dijeron los animales de la reserva, yo
            apenado baje mi cabeza y corrieron hacia mi para abrazarme, y a
            reírse, fue el abrazo más caluroso y lleno de amistad, que pude
            haber recibido, se sentaron y me dijeron –queremos escucharte, yo
            respondí - Único, poderoso pero amistosito y ustedes –Urra!
            comenzaron a gritar y a contarme sus interesantes hazañas…Uff que
            alivio, tenia amigos. De lejos se escucho al señor Chico el Chigüiro
            –Si el Jaguar esta feliz la reserva también esta feliz.
          </p>
        </div>

        <Image
          className="w-[17pc] z-40  absolute left-[0pc] bottom-[-2.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/5.2.svg"
          width={500}
          height={500}
        />
        <Image
          className="w-[41pc]  absolute left-[-27pc] bottom-[-6.3pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/4.svg"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default View11;
