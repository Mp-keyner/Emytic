import Image from "next/image";
import React from "react";

const View11 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const TwentySeven = document.getElementById("TwentySeven");

    // Realizar el desplazamiento al siguiente elemento
    TwentySeven.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "36%";
    row.style.left = "85%";
    row.style.width = "12pc";
    row.style.transform = "translate(0)";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 72) {
      const TwentySeven = document.getElementById("TwentySeven");

      TwentySeven.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.top = "36%";
      row.style.left = "85%";
      row.style.width = "12pc";
      row.style.transform = "translate(0)";
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo4 h-screen">
        <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center ">
          <h2>Presiona para continuar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>

        <div
          className="border-2 w-[54pc] blu text-lg px-4 py-1 z-40 absolute left-[52%] top-[50%]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <p>
            Hace mucho tiempo, cuando estaba mas joven, yo, flaqui el jaguar era
            el más grande y temido de la región, cuando paseaba todos corrían,
            noo te-ni-aa amigos!- y pensar que no me daba cuenta que no los
            tenia. Una mañana como de costumbre en la reserva el Hato la Aurora,
            mis amiguitos que no eran mis amigos salían a saludarme a coro –Hola
            flaqui jaguar ¿Como te sientes hoy? A lo que yo muy presumido
            respondía –único, pooooderoso y magnifico, -¿Qué hiciste ayer?–ayer
            corrí por toda la sabana y de pronto me encontré a Beni el venado,
            que no me había saludado, le dije –corre que te cojo tu castigo será
            un zarpazo, claro, yo, tan ágil y veloz me lo alcance y un zarpazo
            se llevo jajajajaja. Y Así me retire, pues nadie debía de hablarme.
            Ese mismo día a mis espaldas, Beni le dijo a los amigos –algo
            tenemos que hacer, flaqui es muy fuerte y si no hacemos lo que dice,
            siempre nos va a perseguir. Todos estuvieron de acuerdo e hicieron
            un complot contra mi, quien lo iba a creer … Beni Al día siguiente
            –Buenos día mamá, voy a jugar – Con cuidado Flaqui anda con
            amabilidad, dijo mamá. Ese día no me subí al árbol, sino que camine
            y me subí a una peña, a saludar –buenos días Flaqui jaguar ¿Cómo te
            sientes hoy? Y con todas mis fuerzas, tomé aire y respondí
            –Uuuni…unnni…, no puede terminar porque todos hablaban sin parar,
            que incomodo me sentí, cuando de pronto todo quedo en silencio,
            jejeje claro sí querían escucharme, SOY YO, pensé. -¿Qué hiciste
            ayer? Preguntaron mis amigos de la reserva, tomé aire y dije -
            Ayerrrrrrrr … Ayerrrrrrr… cuando… de repente, todos comenzaron a
            reírse y a silbar, no me dejaron hablar, me enfurecí tanto que con
            un solo suspiro se asustaron
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
          className="w-[41pc]  absolute left-[-24pc] bottom-[-6.3pc]"
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
