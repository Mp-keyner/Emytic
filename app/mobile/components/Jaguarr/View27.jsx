import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View27 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo2 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(6)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile2 fixed left-14 bottom-[-42%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          Saludar es importante Al llegar a un lugar Me ayuda en mis relaciones
          Y emociones expresar
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8 h-64 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="h-full pb-4">
          – ahhhh corran, corran ….corran, corran por sus vidas se escucho decir
          de un diminuto Cuy jajajaja aproveche su pánico y rugí con todas mis
          fuerzas- GRUAAAAAAAAA, y de pronto la reserva se paralizó, todos se
          sintieron amenazados, ya nadie gritaba ni corría, me miraban con
          temor, y Terror, me acorde de las palabras de mamá, anda con
          amabilidad… me sentí abrumado y el que salió corriendo fui Yo. Corrí y
          corrí, y cuando me di cuenta estaba en el rio Ariporo, sediento tome
          agua queriendo suspirar, -Hola Flaqui, me saludaron, era el señor
          Chico el Chigüiro, acabo de ver lo que sucedió -¿Qué crees que le pasó
          a tus amigos? –No sé, todas la mañanas nos divertimos con mis hazañas,
          es importante que me vean y que me saluden, y que me escuchen , y que
          me… -Continua, dijo el señor Chigüiro, pensando le dije –ah! Ah! Ellos
          me escuchan, y yo no los dejo hablar, ellos me saludan y yo no saludo
          a ninguno, no conozco sus hazañas, cuando me ven, me saludan pero se
          esconden y… siempre termino solo- dije tristemente, -no he sido
          amable, -¿Qué debes hacer pequeño Jaguar?- me pregunto –buscarlos,
          pedirles perdón, debo solucionar el desastre que hice…- Suspira mi
          pequeño, hazlo, así se va tu enojo, y lo que sientes, y ves hacer lo
          que me has dicho, corregir tus errores te ayudará a recuperar a tus
          amigos- dijo el señor Chigüiro. Mientras me devolvía pensaba en una
          forma de acercarme, así que decidí dejarles una notica en la puertas
          de sus casas, que decía –perdón, ¿quieres ser mi amigo? con un ramito
          de mamito, y fui a descansar. A la mañana siguiente, cuando salía…para
          mi sorpresa, todos estaban en la puerta de mi casa –Buenos días
          Flaqui, ¿Cómo estas hoy?-dijeron los animales de la reserva, yo
          apenado baje mi cabeza y corrieron hacia mi para abrazarme, y a
          reírse, fue el abrazo más caluroso y lleno de amistad, que pude haber
          recibido, se sentaron y me dijeron –queremos escucharte, yo respondí -
          Único, poderoso pero amistosito y ustedes –Urra! comenzaron a gritar y
          a contarme sus interesantes hazañas…Uff que alivio, tenia amigos. De
          lejos se escucho al señor Chico el Chigüiro –Si el Jaguar esta feliz
          la reserva también esta feliz.
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
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
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

export default View27;
