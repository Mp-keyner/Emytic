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
    switch (true) {
      case screen.width >= 1200 && screen.width <= 1600:
        row.style.top = "67%";
        row.style.left = "92%";
        row.style.width = "13pc";
        console.log(screen.width, "number Uno");
        break;
      case screen.width >= 393 && screen.width <= 450:
        row.style.top = "88%";
        row.style.left = "26%";
        row.style.width = "10pc";
        console.log(screen.width, "number Dos");
        break;
      default:
        break;
    }

    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 52) {
      const Five = document.getElementById("Five");

      Five.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";

      switch (true) {
        case screen.width >= 1200 && screen.width <= 1600:
          row.style.top = "67%";
          row.style.left = "92%";
          row.style.width = "13pc";
          console.log(screen.width, "number Uno");
          break;
        case screen.width >= 393 && screen.width <= 450:
          row.style.top = "88%";
          row.style.left = "26%";
          row.style.width = "10pc";
          console.log(screen.width, "number Dos");
          break;
        default:
          break;
      }
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div
        id="secon"
        className="relative border-1 border-solid fondo4 h-screen"
      >
        <div className="absolute top-[2pc] z-50 left-[0pc] w-[10pc] flex flex-col items-center text-center "
          data-aos-delay="1500"
          data-aos="fade-up-left">
          <h2>Presiona para continuar con la historia de pepe</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
            className="flecha"
            alt=''
          />
        </div>

        <div className="z-40 absolute left-[38%] sm:left-[15pc] top-[81%] sm:top-[23pc]"
          data-aos="fade-right">
          <div className="bocadillo-cuadrado1" style={{ minHeight: "67px" }}>
            <p>!...¡</p>
          </div>
        </div>
        <Image
          src="/img/5.1.svg"
          priority={true} // {false} | {true}
          width={400}
          height={600}
          className="sm:w-[36pc] w-[14pc] z-10 position: absolute top-[0pc] right-[0pc]"
          data-aos="fade-right"
          alt=''
        />
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F39.png?alt=media&token=5b155cb2-6871-47a5-8735-5bdbb3c639e8"
          data-aos="fade-right"
          width={500}
          height={500}
          alt=''
          className="w-[9pc] sm:w-[18pc] z-30 position: absolute top-[6%] sm:top-[10pc] right-[0pc]"
        />

        <div className="z-40 absolute  top-[23%] right-[4%] sm:right-[22%] sm:top-[3pc] w-[40pc]"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <div className="bocadillo-cuadrado4" style={{ width: "40pc" }}>
            <p>
              Esta mañana camino a la escuela, me tropecé con una piedra y ajá,
              caí sobre un charco de barro… me ensucie todo!, mi mamá me había
              bañado muy bien y por distraído me paso esto, me puse muy triste,
              tenia el genio bajito… y cuando estoy triste mi cuerpo se siente
              sin energía, y mi pecho me duele, Todos lo pelaos en la calle se
              rieron de mi…y aunque en mi mente me decía-cógela suave, de un
              momento a otro sentía tronco e calor, y respiraba como si echara
              chispitas, estaba tan enojado y no sabia que hacer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default View1;
