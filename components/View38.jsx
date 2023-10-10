import Image from "next/image";
import React from "react";

const View11 = () => {
    const AddAnimation = () => {
        const row = document.getElementById("row");
        const ThirtySix = document.getElementById("ThirtySix");

        // Realizar el desplazamiento al siguiente elemento
        ThirtySix.scrollIntoView({
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

                <div
                    data-aos="fade-right"
                    className="z-40 absolute top-[50%] right-[5%]"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <div className="bocadillo-cuadrado5" style={{ width: '21pc', fontSize: '1pc' }}>
                        <p>
                            Claro que sí, mira yo tengo una amiga llamada Milu, ella  vivía con sus padres en un pequeño pueblo y notaba que todos los días cuando iba para el colegio,  las calles estaban llenas de basura. Con los días la gente empezó  a enfermarse por  los insectos que se juntaban en esas basuras.
                            Preocupada por lo que estaba pasando, le preguntó a su profesora como podía ayudar, y
                            la maestra le dijo  - Milu seria fantástico que todos aprendiéramos a cuidar nuestro entorno, con pequeñas acciones, como una campaña entre los vecinos para reciclar la basura por bolsas de colores y no volver arrojarla al piso.
                            Milu entendió que el cambio empezaba por las acciones de ella, para luego contagiar de buenas acciones a los demás.
                            Así como hizo mi amiga, te invito a que tomes la iniciativa en tu escuela, en tu casa para realizar pequeñas acciones que nos llevan a grandes soluciones
                            ¿Te gustaría ayudar?
                        </p>
                    </div>
                </div>

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

                <div
                    data-aos="fade-right" // Definición única de data-aos
                    data-aos-out="fade-left"
                    className="z-40 absolute left-[3%] sm:left-[22%] top-[21pc]"
                >
                    <div className="bocadillo-cuadrado1">
                        <p>Se que te sientes triste, pero busquemos la forma de aprender a cuidar nuestro entorno, quizás si le hablamos a los demás de que debemos cuidar nuestra casa, también nos ayudaran a buscar una solución pues solo así tendremos un hogar donde estar.</p>
                    </div>
                </div>
                <div className="flex items-center absolute z-50 w-[100%] justify-center gap-[1pc] top-[30%] ">

                </div>
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
