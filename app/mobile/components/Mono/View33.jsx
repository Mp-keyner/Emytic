import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View33 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(23)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed left-[40%] top-[5%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p>
          <b>
            JUGUEMOS Y AYUDEMOS A MILU A CREAR ESTRATEGIAS PARA MEJORAR NUESTRO
            ENTORNO Y CUIDAR NUESTRA VIDA.
          </b>
        </p>
      </div>

      <div
        className="bocadillo-cuadrado5 fixed left-14 bottom-[-17%] z-50"
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <table>
          <tr>
            <td>Reciclar las basuras</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Tirar la basura al piso</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Hacer campañas de aseo en mi barrio</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>
              Dejar los grifos de agua abiertos para que el agua se desperdie
            </td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Colocar letreros que ensucie las paredes</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Sembrar arboles</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Usar el agua de lo aires para regar las plantas</td>
            <td>keyner</td>
          </tr>
          <tr>
            <td>Apagar las luces cuando no sea necesario utilizarlas</td>
            <td>keyner</td>
          </tr>
        </table>
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

export default View33;
