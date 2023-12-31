import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View3 = () => {
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
        style={{ backgroundColor: "#51e843" }}
      >
        <p className="h-full pb-4">
          Esta mañana camino a la escuela, me tropecé con una piedra y ajá, caí
          sobre un charco de barro… me ensucie todo!, mi mamá me había bañado
          muy bien y por distraído me paso esto, me puse muy triste, tenia el
          genio bajito… y cuando estoy triste mi cuerpo se siente sin energía, y
          mi pecho me duele, Todos lo pelaos en la calle se rieron de mi…y
          aunque en mi mente me decía-cógela suave, de un momento a otro sentía
          tronco e calor, y respiraba como si echara chispitas, estaba tan
          enojado y no sabia que hacer.
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
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
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

export default View3;
