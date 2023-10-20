"use client";

import React from "react";
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
import Letras from "./components/Loro/Letras";
import Situaciones from "./components/Loro/Situaciones";

const PageMobile = () => {
  return (
    <div className="relative">
      <AppProvider>
        <AppContext.Consumer>
          {({ emyticClass }) => {
            // console.log(emyticClass);
            return (
              <Image
                src="/img/1.svg"
                width={300}
                height={500}
                className={emyticClass}
                id="row"
                title="EMYT"
              />
            );
          }}
        </AppContext.Consumer>
        <div id="Loro">
          <MainView />
          <View1 />
          <View2 />
          <View3 />
          <View4 />
          <View5 />
          <View6 />
          <Situaciones />
          <Letras />
        </div>
        <div id="Tortuga">
          <View7 />
          <View8 />
          <View9 />
          <View10 />
          <View11 />
          <View12 />
        </div>
      </AppProvider>
    </div>
  );
};

export default PageMobile;
