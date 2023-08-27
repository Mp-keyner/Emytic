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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Fscreen from "@/components/Fscreen";

export default function Home() {
  const [Show, setShow] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {Show ? (
        <Fscreen key={setShow} />
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
        </>
      )}
    </>
  );
}

// <View />
