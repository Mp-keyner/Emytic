import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";
import ModalMobil from "../ModalMobil";

const Regalo = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [mensaje, setMensaje] = useState("keyner de la hoz");
  const HandlesetCloseModal = () => {
    console.log("cerro");
    setCloseModal(false);
  };
  const HandleShowModal = (x) => {
    console.log("oki");
    setCloseModal(true);
    setMensaje(x);
  };
  return (
    <>
      <div
        className="h-screen relative fondo2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {closeModal && (
          <ModalMobil
            mensaje={mensaje}
            HandlesetCloseModal={HandlesetCloseModal}
          />
        )}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
          data-aos="fade-right"
          width={200}
          height={200}
          className="z-40 absolute top-8 -left-7"
          title="Pepe el loro..."
          alt=""
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            justifyItems: "center",
            width: "100%",
            gap: "1pc",
          }}
        >
          <Image
            src="/img/regaloT.svg"
            alt="Regalo"
            width={400}
            height={400}
            style={{
              width: "8pc",
            }}
            onClick={() =>
              HandleShowModal(
                "Haz un dibujo a tu compañero con el que menos hablas y dile que deseas conocerlo mas."
              )
            }
          />
          <Image
            src="/img/regaloT.svg"
            alt="Regalo"
            width={400}
            height={400}
            style={{
              width: "8pc",
            }}
            onClick={() =>
              HandleShowModal(
                "Comparte tu merienda con un compañero que no haya llevado."
              )
            }
          />
          <Image
            src="/img/regaloT.svg"
            alt="Regalo"
            width={400}
            height={400}
            style={{
              width: "8pc",
            }}
            onClick={() =>
              HandleShowModal(
                "Comparte tu merienda con un compañero que no haya llevado."
              )
            }
          />
          <Image
            src="/img/regaloT.svg"
            alt="Regalo"
            width={400}
            height={400}
            style={{
              width: "8pc",
            }}
            onClick={() =>
              HandleShowModal("Regala abrazos a todos tus compañeros")
            }
          />
        </div>
        <div className="absolute bottom-4 flex flex-col justify-center items-center text-center w-52 font-bold left-1">
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
          className="bocadillo-cuadrado-mobile3 fixed left-[40%] top-[5%]"
          data-aos="fade-right"
          data-aos-delay="500"
          style={{
            position: "absolute",
          }}
        >
          <p>Escoge un regalo y descubre la tarea que guarda:</p>
        </div>
      </div>
    </>
  );
};

export default Regalo;
