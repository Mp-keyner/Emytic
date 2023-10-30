import Modal from "@/components/Modal";
import Image from "next/image";
import React, { useState } from "react";

const Regalo = () => {
  const [closeModal, setCloseModal] = useState(false);
  const [mensaje, setMensaje] = useState("keyner de la hoz");
  return (
    <>
      <div className="h-screen relative fondo2">
        {closeModal && <Modal mensaje={mensaje} />}{" "}
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F38.png?alt=media&token=183919e7-9b95-4529-9ee3-4a5bdd5f6ef9"
          data-aos="fade-right"
          width={200}
          height={200}
          className="z-40 absolute top-8 -left-7"
          title="Pepe el loro..."
          alt=""
        />
        <div>
          <Image src="/img/regaloT.svg" alt="Regalo" width={400} height={400} />
          <Image src="/img/regaloT.svg" alt="Regalo" width={400} height={400} />
          <Image src="/img/regaloT.svg" alt="Regalo" width={400} height={400} />
          <Image src="/img/regaloT.svg" alt="Regalo" width={400} height={400} />
        </div>
      </div>
    </>
  );
};

export default Regalo;
