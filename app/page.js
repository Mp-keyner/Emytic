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

export default function Home() {
  const [Show, setShow] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {Show ? (
        <Fscreen setShowFunction={setShow} />
      ) : (
        <>
          < NO />
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
          <div id="Nine">
            <View8 />
          </div>
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
            <View15 />
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
        </>
      )}
    </>
  );
}

// <View />
