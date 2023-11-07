import React, { useContext } from "react";
import { AppContext } from "../Context";
import Image from "next/image";

const View32 = () => {
  const { handleClick } = useContext(AppContext);

  return (
    <div className="h-screen fondo1 relative">
      <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold">
        <h2>Presiona para continuar con la actividad</h2>
        <Image
          onClick={() => handleClick(39)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-40 top-10 h-64 overflow-scroll"
        style={{ position: "absolute", backgroundColor: "#51e843" }}
        data-aos="fade-right"
        data-aos-delay="500"
      >
        <p className="h-full pb-4">
          Claro que sí, mira yo tengo una amiga llamada Milu, ella vivía con sus
          padres en un pequeño pueblo y notaba que todos los días cuando iba
          para el colegio, las calles estaban llenas de basura. Con los días la
          gente empezó a enfermarse por los insectos que se juntaban en esas
          basuras. Preocupada por lo que estaba pasando, le preguntó a su
          profesora como podía ayudar, y la maestra le dijo - Milu seria
          fantástico que todos aprendiéramos a cuidar nuestro entorno, con
          pequeñas acciones, como una campaña entre los vecinos para reciclar la
          basura por bolsas de colores y no volver arrojarla al piso. Milu
          entendió que el cambio empezaba por las acciones de ella, para luego
          contagiar de buenas acciones a los demás. Así como hizo mi amiga, te
          invito a que tomes la iniciativa en tu escuela, en tu casa para
          realizar pequeñas acciones que nos llevan a grandes soluciones ¿Te
          gustaría ayudar?
        </p>
      </div>
      <div
        className="bocadillo-cuadrado-mobile3 fixed z-50 left-[12%] top-[37%] overflow-scroll"
        data-aos="fade-right"
        data-aos-delay="500"
        style={{
          width: "300px",
        }}
      >
        <p className="">
          Se que te sientes triste, pero busquemos la forma de aprender a cuidar
          nuestro entorno, quizás si le hablamos a los demás de que debemos
          cuidar nuestra casa, también nos ayudaran a buscar una solución pues
          solo así tendremos un hogar donde estar.
        </p>
      </div>

      <Image
        src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
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

export default View32;
