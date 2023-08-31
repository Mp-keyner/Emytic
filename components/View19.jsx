import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentyOne = document.getElementById("TwentyOne");
    const mapa = document.getElementById("mapa");

    mapa.src = "/img/map/1.2.svg";
    mapa.classList.add("mi-animacion-2");

    // Realizar el desplazamiento al siguiente elemento
    TwentyOne.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "23%";
    row.style.left = "90%";
    row.style.width = "200px";
    row.style.opacity = 1;
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div className="relative border-1 border-solid bg-blue-600 h-screen">
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
          className="border-2 w-[44pc] text-lg px-4 py-1 z-40 absolute right-[11pc] top-[5%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Me acerque a mi amiga Lulú y le pregunte: -¿Qué te pasa lulú? Y ella
            encogió sus hombros y me respondió –estoy muy decepcionada, porque
            perdí el examen de matemáticas, continuo llorando y me dijo -¿Qué le
            diré a mama? Yo le respondí -pues siempre la verdad, ¿estudiaste?
            Si, me esfuerzo, pero llega un momento en que no entiendo nada, dice
            Lulú. Yo Soso el oso anteojos me sentí triste por ella, pero me
            acorde que la maestra dice cuando las cosas están difíciles, con
            ella podemos contar, así que le dije – Lulú yo también me he sentido
            como tú, también he llorado cuando pierdo un examen, pero me acuerdo
            que la maestra un día me dijo, con tu esfuerzo y mi ayuda lo puedes
            lograr! (secándole las lagrimas) Para mi sorpresa, en recreo
            mientras comía una achupalla, vi a Lulú hablando con la maestra y
            luego corrió hacia mi y me abrazo de felicidad y me dijo –Soso
            gracias! la maestra me dijo que era una niña muy inteligente y con
            mucho amor y dedicación me explicó lo que no entendía. La abracé y
            le dije – ves lulú, que bueno que no te fuiste a casa así
            decepcionada porque no se hubiese resuelto tu problema. Así que,
            salió de la escuela muy contenta, saltaba y bailaba de alegría, pues
            aprendió que por muy difícil que sean las cosas solo con nuestro
            deseo, esfuerzo y voluntad podemos alcanzar nuestros propósitos. Y
            como dice mi maestra –colorín colorado este cuento se ha terminado!
          </p>
        </div>
        <div
          className="border-2  w-[20pc] text-lg px-4 py-1 z-40 absolute  left-[2%] bottom-[34%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            ¿Quieres que te cuente lo que paso en la escuela en el día de hoy?
          </p>
        </div>
        <Image
          className="w-[11pc]  absolute left-[0pc] bottom-[0pc]"
          data-aos="fade-left" // Definición única de data-aos
          data-aos-out="fade-left"
          src="/img/pantaParamos.png"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default View11;

//     top: 91pc;
// left: 49pc;
