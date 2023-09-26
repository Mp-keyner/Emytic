"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const NO = () => {
    const SalirFull = () => {
        if (document.documentElement.exitFullscreen) {
            document.documentElement.exitFullscreen();
        }
    }
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
                <Image
                    className="w-[17pc]  z-40  absolute right-[0pc] top-[1%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F33.png?alt=media&token=adf31456-021a-4f5e-834a-2d1587b2e1ec"
                    width={500}
                    height={500}
                    alt=""
                />
                <Image
                    className="w-[17pc]  z-40  absolute right-[0pc] bottom-[1%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
                    width={500}
                    height={500}
                    alt=""
                />
                <div className="absolute z-50 w-[20pc] flex gap-[1pc] top-[2%] left-[50%]" data-aos="fade-left">
                    <a href="https://emytic.vercel.app/" className="border border-white px-[1pc] py-[0.6pc] rounded-md">Reiniciar</a>
                    {/* <button className="border border-white px-[1pc] py-[0.6pc] rounded-md" onClick={SalirFull}>Salir</button> */}
                </div>
                <div
                    data-aos="fade-left"
                    className="z-40 absolute sm:right-[24%] sm:top-[27%] right-[2%] top-[14%] xl:top-[35%] xl:rigth-[16%]"
                >
                    <div className="bocadillo-cuadrado3">
                        <p>
                            Muchas gracias por hacer parte de esta increible aventura nos vemos en otra ocacion¡¡
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NO;
