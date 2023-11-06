import Image from "next/image";
import React, { useContext } from "react";
import { AppContext } from "../Context";

const SopaLetras = () => {
  const { handleClick } = useContext(AppContext);
  const url = "https://sopa-six.vercel.app/mobil.html";
  return (
    <div className="relative">
      <iframe
        title="Página Web"
        src={url}
        width="100%"
        height="500px"
        frameBorder="0"
        style={{
          width: "100%",
          height: "100vh",
          transform: "scale(1)",
        }}
      />
      <div className="absolute bottom-0 flex justify-center items-center text-center font-bold w-[100%]">
        <h2>Presiona para continuar con esta aventura</h2>
        <Image
          onClick={() => handleClick(32)}
          src="/img/row.svg"
          width={100}
          height={100}
          className="cursor-pointer flecha"
          alt=""
        />
      </div>
    </div>
  );
};

export default SopaLetras;
