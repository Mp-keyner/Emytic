import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View9 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de Soso</h2>
        <Image
          onClick={() => handleClick(22)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile4 fixed left-6 top-96"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          ¿Quieres que te cuente lo que paso en la escuela en el día de hoy?
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-44 -top-8 h-64 overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
        style={{ backgroundColor: "#51e843" }}
      >
        <p className="h-full pb-4">
          Me acerque a mi amiga Lulú y le pregunte: -¿Qué te pasa lulú? Y ella
          encogió sus hombros y me respondió –estoy muy decepcionada, porque
          perdí el examen de matemáticas, continuo llorando y me dijo -¿Qué le
          diré a mama? Yo le respondí -pues siempre la verdad, ¿estudiaste? Si,
          me esfuerzo, pero llega un momento en que no entiendo nada, dice Lulú.
          Yo Soso el oso anteojos me sentí triste por ella, pero me acorde que
          la maestra dice cuando las cosas están difíciles, con ella podemos
          contar, así que le dije – Lulú yo también me he sentido como tú,
          también he llorado cuando pierdo un examen, pero me acuerdo que la
          maestra un día me dijo, con tu esfuerzo y mi ayuda lo puedes lograr!
          (secándole las lagrimas) Para mi sorpresa, en recreo mientras comía
          una achupalla, vi a Lulú hablando con la maestra y luego corrió hacia
          mi y me abrazo de felicidad y me dijo –Soso gracias! la maestra me
          dijo que era una niña muy inteligente y con mucho amor y dedicación me
          explicó lo que no entendía. La abracé y le dije – ves lulú, que bueno
          que no te fuiste a casa así decepcionada porque no se hubiese resuelto
          tu problema. Así que, salió de la escuela muy contenta, saltaba y
          bailaba de alegría, pues aprendió que por muy difícil que sean las
          cosas solo con nuestro deseo, esfuerzo y voluntad podemos alcanzar
          nuestros propósitos. Y como dice mi maestra –colorín colorado este
          cuento se ha terminado!
        </p>
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

export default View9;
