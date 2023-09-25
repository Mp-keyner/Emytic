"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NO = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo(0, 0);
    }, []);



    return (
        <>
            <div className="relative fondo1 h-screen text-white">
                <h1
                    className="text-[4pc] sm:text-[8pc] font-bold z-40 absolute left-[1pc]"
                    data-aos="fade-up"
                    id="titulo"
                >
                    EMYTIC
                </h1>
                <Image
                    src="/img/Arbol.svg"
                    priority={true} // {false} | {true}
                    width={400}
                    height={600}
                    className="w-[100%] position: absolute bottom-[0vh] right-[7pc]"
                    data-aos="fade-right"
                    data-aos-out="fade-left"
                    id="Arbol"
                    alt=""
                />
                <Image
                    className="w-[18pc]  z-0  absolute left-[0%] top-[0%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva1.svg"
                    width={500}
                    height={500}
                    alt=""
                />
                <Image
                    className="w-[18pc]  z-0  absolute right-[0%] top-[0%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva2.svg"
                    width={500}
                    height={500}
                    alt=""
                />
                <Image
                    src="/img/1.svg"
                    width={300}
                    height={500}
                    className="absolute sm:top-[60%] top-[57%] sm:left-[43%] left-[23%] transform z-40 w-[10pc] sm:w-[16pc]"
                    style={{ transform: "translate(-50%, -50%)" }}
                    data-aos="fade-down"
                    title="EMYT"
                    alt=""
                />
                <Image
                    src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F40.png?alt=media&token=ffa78c81-86d9-4519-9567-0c4c72fdeb0b"
                    width={300}
                    height={500}
                    className="absolute top-[74%] sm:top-[35%] left-[-1pc] w-[12pc] sm:w-[19pc]"
                    data-aos="fade-right"
                    id="loro"
                    data-aos-out="fade-left"
                    title="Pepe el loro..."
                    alt=""
                />

                <div
                    data-aos="fade-left"
                    className="z-40 absolute sm:right-[24%] sm:top-[27%] right-[2%] top-[14%] xl:top-[35%] xl:rigth-[16%]"
                >
                    <div className="bocadillo-cuadrado1">
                        <p>
                            Hola soy <b>EMYTIC</b>, juntos realizaremos un divertido viaje por
                            las regiones de Colombia, para conocer nuevos amigos que nos
                            enseñaran sobre tus emociones y nos contaran unas historias muy
                            interesante.
                            <b>Vamos sígueme!</b>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NO;
