import Image from "next/image";
import React from "react";

const View11 = () => {
    const AddAnimation = () => {
        const row = document.getElementById("row");
        const ThirtyFive = document.getElementById("ThirtyFive");

        // Realizar el desplazamiento al siguiente elemento
        ThirtyFive.scrollIntoView({
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
                    className="z-40 absolute top-[11%] left-[50%]"
                    style={{ transform: "translate(-50%, -50%)" }}
                >
                    <div className="bocadillo-cuadrado5" style={{ width: '60pc', fontSize: '1pc' }}>
                        <p>
                            Si,  Emytic, quiero contarte que desde hace días me di cuenta que muchas personas no cuidan su hogar, la tierra que tenemos… En el bosque donde vivo con mi familia, la tala y quema de arboles esta debilitando mi casa, las especies de animales se están extinguiendo y no hacemos nada por salvarlos… me da tristeza que desaparezca lo que somos… Colombia es una tierra hermosa, con parques naturales que debemos preservar,  como por ejemplo:
                        </p>
                    </div>
                </div>

                <Image
                    className="w-[17pc]  z-40  absolute left-[0pc] top-[1%]"
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
                <div className="absolute z-50 w-[100%] gap-[1pc] top-[60%]  girdS left-[50%]"
                    style={{ transform: "translate(-50%, -50%)" }}>

                    <div className="text-center bg-white border-[2px] rounded-md p-[1pc] border-black D3">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F1Fo.png?alt=media&token=003cc69d-bdca-458c-bec9-3618084e2390'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                        />
                        <p>El parque de macuira en la costa caribe, es la casa de felix el tigrillo</p>

                    </div>
                    <div className="text-center bg-white border-[2px] rounded-md p-[1pc] border-black D3">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F2Fo.png?alt=media&token=3f2a4803-58ff-4412-a322-df39443f6858'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                        />
                        <p>En el  parque nacional de Gorgona en el pacifico vive Bely la ballena</p>

                    </div>
                    <div className="text-center bg-white border-[2px] rounded-md p-[1pc] border-black D3">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F3Fo.png?alt=media&token=8cf1dfdc-0680-4daf-976d-98bb0ec3de9e'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                        />
                        <p>En el Tuparro en la Orinoquia, esta el hogar de Nelson la nutria</p>

                    </div>
                    <div className="text-center ">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F4.png?alt=media&token=bba09b8f-3bf9-4782-9af8-c2a4a142c3fa'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                            style={{
                                opacity: 0
                            }}
                        />

                    </div>
                    <div className="text-center bg-white border-[2px] rounded-md p-[1pc] border-black D3">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F4.png?alt=media&token=bba09b8f-3bf9-4782-9af8-c2a4a142c3fa'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                        />
                        <p>Chingaza en los andes esta mi amiga Dani la danta</p>

                    </div>
                    <div className="text-center bg-white border-[2px] rounded-md p-[1pc] border-black D3">
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2Ffo%2F5Fo.png?alt=media&token=32c4b6c9-7983-4cfe-8c59-d9ad993ce212'
                            a width={500}
                            height={500}
                            className="w-[20pc]"
                            alt=""
                        />
                        <p>Y En el parque Amacayacu, mi casa en la amazonia</p>

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
