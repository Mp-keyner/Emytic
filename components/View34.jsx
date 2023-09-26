import Image from "next/image";
import React from "react";

const View11 = () => {
    const AddAnimation = () => {
        const row = document.getElementById("row");
        const ThirtyNine = document.getElementById("ThirtyNine");

        // Realizar el desplazamiento al siguiente elemento
        ThirtyNine.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });

        row.style.transition = "all 1s";
        row.style.top = "60%";
        row.style.left = "7%";
        row.style.width = "200px";
        row.style.transform = "translate(0)";
        console.log("objectsdftgyhuji");
    };
    const handleKeyDown = (e) => {
        if (e.keyCode === 86) {
            const ThirtyFourt = document.getElementById("ThirtyFourt");

            ThirtyFourt.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });

            row.style.transition = "all 1s";
            row.style.top = "60%";
            row.style.left = "7%";
            row.style.width = "200px";
            row.style.transform = "translate(0)";
            console.log("objectsdftgyhuji");
            console.log("Tecla pre");
        }
    };
    window.addEventListener("keydown", handleKeyDown);
    return (
        <>
            <div className="relative border-1 border-solid  fondo8 h-screen">
                <div className="absolute bottom-[4pc] right-[0pc] w-[10pc] flex flex-col items-center z-50">
                    <h2>Presiona para continuar</h2>
                    <Image
                        onClick={AddAnimation}
                        src="/img/row.svg"
                        width={100}
                        height={100}
                        alt=""
                    />
                </div>

                <a
                    className="bocadillo-cuadrado5 absolute left-[49%] top-[25%] z-50"
                    data-aos="fade-right" // Definición única de data-aos
                    data-aos-out="fade-left"
                    id="mensaje"
                    href="https://sopa-six.vercel.app/Memorias.html"
                    target="_blank"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    Juego de Memoria con tus amigos
                </a>
                <div
                    className="bocadillo-cuadrado1 absolute left-[33%] top-[58%] z-50"
                    data-aos="fade-right" // Definición única de data-aos
                    data-aos-out="fade-left"
                    id="mensaje"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <p>
                        Antes de terminar esta fantastica aventura supera el juego.
                    </p>
                </div>

                <Image
                    className="w-[17pc]  z-40  absolute left-[0pc] bottom-[-1%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
                    width={500}
                    height={500}
                    alt=""
                />
                <Image
                    className="w-[18pc] z-0  absolute left-[0%] top-[0%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva1.svg"
                    width={500}
                    height={500}
                    alt=""
                />
                <Image
                    className="w-[18pc] z-0  absolute right-[0%] top-[0%]"
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva2.svg"
                    width={500}
                    height={500}
                    alt=""
                />
                <div className="flex absolute bottom-0">
                    <Image
                        className="w-[20pc]  "
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva3.svg"
                        width={500}
                        height={500}
                        alt=""
                    />
                    <Image
                        className="w-[20pc]  "
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva3.svg"
                        width={500}
                        height={500}
                        alt=""
                    />
                    <Image
                        className="w-[20pc]  "
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva3.svg"
                        width={500}
                        height={500}
                        alt=""
                    />
                    <Image
                        className="w-[20pc]  "
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva3.svg"
                        width={500}
                        height={500}
                        alt=""
                    />
                    <Image
                        className="w-[20pc]  "
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva3.svg"
                        width={500}
                        height={500}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default View11;
