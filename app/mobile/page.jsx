"use client";

import React, { useEffect } from "react";
import { AppContext, AppProvider } from "./components/Context";
import Image from "next/image";
import MainView from "./components/MainView";
import View1 from "./components/Loro/View1";
import View2 from "./components/Loro/View2";
import View3 from "./components/Loro/View3";
import View4 from "./components/Loro/View4";
import View5 from "./components/Loro/View5";
import View6 from "./components/Loro/View6";
import View7 from "./components/Tortuga/View7";
import View8 from "./components/Tortuga/View8";
import View9 from "./components/Tortuga/View9";
import View10 from "./components/Tortuga/View10";
import View11 from "./components/Tortuga/View11";
import View12 from "./components/Tortuga/View12";
import View18 from "./components/Oso/View18";
import View19 from "./components/Oso/View19";
import View20 from "./components/Oso/View20";
import View21 from "./components/Oso/View21";
import View22 from "./components/Oso/View22";
import View23 from "./components/Oso/View23";
import Letras from "./components/Loro/Letras";
import Situaciones from "./components/Loro/Situaciones";
import Emytic from "./components/Emytic";
import ComoSientes from "./components/ComoSientes";
import LetrasOrden from "./components/Mono/LetrasOrden";
import Regalo from "./components/Mono/Regalo";
import SopaLetras from "./components/Jaguarr/SopaLetras";
import Memorias from "./components/Jaguarr/Memorias";
import View24 from "./components/Jaguarr/View24";
import View25 from "./components/Jaguarr/View25";
import View26 from "./components/Jaguarr/View26";
import View27 from "./components/Jaguarr/View27";
import View28 from "./components/Jaguarr/View28";
import View29 from "./components/Mono/View29";
import View30 from "./components/Mono/View30";
import View31 from "./components/Mono/View31";

const PageMobile = () => {
  useEffect(() => {
    console.log("aPpp montada");
  }, []);
  return (
    <div className="relative">
      <AppProvider>
        <Emytic />
        <div id="Loro">
          <MainView />
          <View1 />
          <View2 />
          <View3 />
          <View4 />
          <View5 />
          <View6 />
          <Situaciones />
          <ComoSientes to={10} />
        </div>
        <div id="Tortuga">
          <View7 />
          <View8 />
          <View9 />
          <View10 />
          <View11 />
          <View12 />
          <Letras />
          <ComoSientes to={18} />
        </div>
        <div id="Oso">
          <View18 />
          <View19 />
          <View20 />
          <View21 />
          <View22 />
          <View23 />
          <LetrasOrden />
          <ComoSientes to={18} />
        </div>
        <div id="Jaguar">
          <View24 />
          <View25 />
          <View26 />
          <View27 />
          <SopaLetras />
          <View28 />
          <Regalo />
          <ComoSientes to={18} />
        </div>
        <div id="Mono">
          <View29 />
          <View30 />
          <View31 />
        </div>
      </AppProvider>
    </div>
  );
};

export default PageMobile;

{
  /*
   
        <Emytic />
        <div id="Loro">
          <MainView />
          <View1 />
          <View2 />
          <View3 />
          <View4 />
          <View5 />
          <View6 />
          <Situaciones />
          <ComoSientes to={10} />
        </div>
        <div id="Tortuga">
          <View7 />
          <View8 />
          <View9 />
          <View10 />
          <View11 />
          <View12 />
          <Letras />
          <ComoSientes to={18} />
        </div>
        <div>
          <View18 />
          <View19 />
          <View20 />
          <View21 />
          <View22 />
          <View23 />
        </div>
*/
}
