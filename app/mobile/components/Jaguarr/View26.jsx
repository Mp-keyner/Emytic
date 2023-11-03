import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View26 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo2 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la historia de pepe</h2>
        <Image
          onClick={() => handleClick(5)}
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
          Hace mucho tiempo, cuando estaba mas joven, yo, flaqui el jaguar era
          el más grande y temido de la región, cuando paseaba todos corrían, noo
          te-ni-aa amigos!- y pensar que no me daba cuenta que no los tenia. Una
          mañana como de costumbre en la reserva el Hato la Aurora, mis
          amiguitos que no eran mis amigos salían a saludarme a coro –Hola
          flaqui jaguar ¿Como te sientes hoy? A lo que yo muy presumido
          respondía –único, pooooderoso y magnifico, -¿Qué hiciste ayer?–ayer
          corrí por toda la sabana y de pronto me encontré a Beni el venado, que
          no me había saludado, le dije –corre que te cojo tu castigo será un
          zarpazo, claro, yo, tan ágil y veloz me lo alcance y un zarpazo se
          llevo jajajajaja. Y Así me retire, pues nadie debía de hablarme. Ese
          mismo día a mis espaldas, Beni le dijo a los amigos –algo tenemos que
          hacer, flaqui es muy fuerte y si no hacemos lo que dice, siempre nos
          va a perseguir. Todos estuvieron de acuerdo e hicieron un complot
          contra mi, quien lo iba a creer … Beni Al día siguiente –Buenos día
          mamá, voy a jugar – Con cuidado Flaqui anda con amabilidad, dijo mamá.
          Ese día no me subí al árbol, sino que camine y me subí a una peña, a
          saludar –buenos días Flaqui jaguar ¿Cómo te sientes hoy? Y con todas
          mis fuerzas, tomé aire y respondí –Uuuni…unnni…, no puede terminar
          porque todos hablaban sin parar, que incomodo me sentí, cuando de
          pronto todo quedo en silencio, jejeje claro sí querían escucharme, SOY
          YO, pensé. -¿Qué hiciste ayer? Preguntaron mis amigos de la reserva,
          tomé aire y dije - Ayerrrrrrrr … Ayerrrrrrr… cuando… de repente, todos
          comenzaron a reírse y a silbar, no me dejaron hablar, me enfurecí
          tanto que con un solo suspiro se asustaron
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

export default View26;
