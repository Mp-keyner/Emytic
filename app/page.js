"use client";

import NO from "../components/NO";
import View1 from "@/components/View1";
import View2 from "@/components/View2";
import View3 from "@/components/View3";
import View4 from "@/components/View4";
import View5 from "@/components/View5";
import View6 from "@/components/View6";
import View7 from "@/components/View7";
import View8 from "@/components/View8";
import View9 from "@/components/View9";
import View10 from "@/components/View10";
import View11 from "@/components/View11";
import View12 from "@/components/View12";
import View13 from "@/components/View13";
import View14 from "@/components/View14";
import View15 from "@/components/View15";
import View16 from "@/components/View16";
import View17 from "@/components/View17";
import View18 from "@/components/View18";
import View19 from "@/components/View19";
import View20 from "@/components/View20";
import View21 from "@/components/View21";
import View22 from "@/components/View22";
import View23 from "@/components/View23";
import View24 from "@/components/View24";
import View25 from "@/components/View25";
import View26 from "@/components/View26";
import View27 from "@/components/View27";
import View28 from "@/components/View28";
import View29 from "@/components/View29";
import View30 from "@/components/View30";
import View31 from "@/components/View31";
import View32 from "@/components/View32";
import View33 from "@/components/View33";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Fscreen from "@/components/Fscreen";
import Sopa from "@/components/Sopa";
import ReproductorAudioInfinito from "@/components/MusicPlayer";
import Mapa from "@/components/mapa";
import Playo from "@/components/Play";
import Ras from "@/components/Ras";
import Dnd from "@/components/Dnd";
import Slo from '@/components/Slo'
import View34 from "@/components/View34";
import View35 from "@/components/View35";
import View36 from "@/components/View36";
import Image from "next/image";
import MobileComponent from "@/components/MobileComponent";
export default function Home() {
  const audioSource =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113";

  const [Show, setShow] = useState(true);
  const [volumen, setVolumen] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);

  const isMobile = window.innerWidth <= 768;
  return (
    <div>
      {isMobile ? <MobileComponent /> : <>
        <Playo volumen={volumen} setVolumen={setVolumen} />
        {Show ? (
          <Fscreen
            setShowFunction={setShow}
            Show={Show}
            volumen={volumen}
            setVolumen={setVolumen}
          />
        ) : (
          <>
            <NO />
            <div id="Secon">
              <View1 />
            </div>
            <div id="Three">
              <View2 />
            </div>
            <div id="Fourth">
              <View3 />
            </div>
            <div id="Five">
              <View4 />
            </div>
            <div id="Six">
              <View5 />
            </div>
            <div id="Seven">
              <View6 />
            </div>
            <div id="Eight">
              <View7 />
            </div>
            {/* <div id="Nine">
            <View8 />
          </div> */}
            <div id="ten">
              <View9 />
            </div>
            <div id="Eleven">
              <View10 />
            </div>
            <div id="Twelve">
              <View11 />
            </div>
            <div id="Thirteen">
              <View12 />
            </div>
            <div id="Fourteen">
              <View13 />
            </div>
            <div id="Fifteen">
              <View14 />
            </div>
            <div id="Sixteen">
              <Slo />
            </div>
            <div id="Seventeen">
              <View16 />
            </div>
            <div id="Eightteen">
              <View17 />
            </div>
            <div id="Nineteen">
              <View18 />
            </div>
            <div id="Twenty">
              <View19 />
            </div>
            <div id="TwentyOne">
              <View20 />
            </div>
            <div id="TwentyTwo">
              <View21 />
            </div>
            <div id="TwentyThree">
              <View22 />
            </div>
            <div id="TwentyFour">
              <View23 />
            </div>
            <div id="TwentyFive">
              <View24 />
            </div>
            <div id="TwentySix">
              <View25 />
            </div>
            <div id="TwentySeven">
              <View26 />
            </div>
            <div id="TwentyEight">
              <View27 />
            </div>
            <div id="TwentyNine">
              <View28 />
            </div>
            <div id="Thirty">
              <View29 />
            </div>
            <div id="ThirtyOne">
              <View30 />
            </div>
            <div id="ThirtyTow">
              <View31 />
            </div>
            <div id="ThirtyThree">
              <View32 />
            </div>
            <div id="ThirtyFourt">
              <View33 />
            </div>
            <div id="ThirtyFive">
              <View34 />
            </div>
            <div id="ThirtySix" className="relative">
              <View35 />
            </div>
            <div id="ThirtySeven">
              <View36 />
            </div>
            <div id="ThirtyEich">
              <div className="relative border-1 border-solid  fondo8 h-screen">


                <div
                  className="bocadillo-cuadrado1 absolute z-50 left-[33%] top-[58%]"
                  data-aos="fade-right" // Definición única de data-aos
                  data-aos-out="fade-left"
                  id="mensaje"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <p>
                    Eres único, se vale sentir tus emociones, pero debes expresarlas con responsabilidad, comparte, sonríe y disfruta de la compañía de los demás. Recuerda que pequeñas acciones nos llevan a grandes cambios, y que juntos podemos construir un mundo mejor
                  </p>
                </div>

                <Image
                  src="/img/1.svg"
                  width={300}
                  height={500}
                  className="absolute top-[30%] left-[10%] transform z-40 w-[10pc] sm:w-[16pc]"
                  style={{ transform: "translate(-50%, -50%)" }}
                  data-aos="fade-down"
                  title="EMYT"
                  alt=""
                />
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
                  width={300}
                  height={500}
                  className="absolute top-[30%] right-[6%] transform z-40 w-[10pc] sm:w-[16pc]"
                  style={{ transform: "translate(-50%, -50%)" }}
                  data-aos="fade-down"
                  title="Soso"
                  alt=""
                />
                <h1
                  className="text-[4pc] sm:text-[8pc] font-bold z-40 absolute left-[16pc] top-[1pc]"
                  data-aos="fade-up"
                  id="titulo"
                >
                  EMYTIC
                  <br />
                  <br />
                  Hasta la proxima
                </h1>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
                  width={300}
                  height={500}
                  className="absolute bottom-[10%] right-[6%] transform z-40 w-[10pc] sm:w-[16pc]"
                  data-aos="fade-down"
                  alt=""
                />
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
            </div>
          </>
        )}
      </>}
    </div>
  );
}

// <View />

