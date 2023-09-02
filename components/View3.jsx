import Image from "next/image";
import Link from "next/link";
import React from "react";

const View1 = () => {
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Five = document.getElementById("Five");

    Five.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    row.style.transition = "all 1s";
    row.style.top = "67%";
    row.style.left = "92%";
    row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid bg-blue-600 h-screen"
      >
        <div className="absolute bottom-[2pc] z-50 right-[0pc] w-[10pc] flex flex-col items-center text-center">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div
          className="w-[5pc] border-2  text-lg px-4 py-1 z-40 absolute left-[38%] sm:left-[15pc] top-[81%] sm:top-[23pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>!...¡</p>
        </div>
        <Image
          src="/img/5.1.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="sm:w-[36pc] w-[14pc] z-10 position: absolute top-[0pc] right-[0pc]"
          data-aos="fade-right"
        />
        <Image
          src="/img/6.1.svg"
          data-aos="fade-right"
          width={100}
          height={100}
          className="w-[9pc] sm:w-[18pc] z-30 position: absolute top-[6%] sm:top-[10pc] right-[0pc]"
        />
        <div
          className="border-2  sm:w-1/2 w-[20pc] text-lg px-4 py-1 z-40 absolute text-[1pc] top-[23%] left-[10%] sm:right-[15pc] sm:top-[3pc]"
          data-aos="fade-right" // Definición única de data-aos
          data-aos-out="fade-left"
          id="mensaje"
        >
          <p>
            Esta mañana camino a la escuela, me tropecé con una piedra y ajá,
            caí sobre un charco de barro… me ensucie todo!, mi mamá me había
            bañado muy bien y por distraído me paso esto, me puse muy triste,
            tenia el genio bajito… y cuando estoy triste mi cuerpo se siente sin
            energía, y mi pecho me duele, Todos lo pelaos en la calle se rieron
            de mi…y aunque en mi mente me decía-cógela suave, de un momento a
            otro sentía tronco e calor, y respiraba como si echara chispitas,
            estaba tan enojado y no sabia que hacer.
          </p>
        </div>
      </div>
    </>
  );
};

export default View1;
