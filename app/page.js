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
import Playo from "@/components/Play";
import Ras from "@/components/Ras";
import Slo from "@/components/Slo";
import Drop from "@/components/Mapa";

export default function Home() {
  const audioSource =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113";

  const [Show, setShow] = useState(true);
  const [volumen, setVolumen] = useState(true);
  const [tal, setTal] = useState(0);
  useEffect(() => {
    AOS.init();
    var isMobile = window.innerWidth <= 768;
    setTal(isMobile);
  }, []);
  console.log(tal);
  return (
    <>
      <Drop />
    </>
  );
}

// <View />
//
