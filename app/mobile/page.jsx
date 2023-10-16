"use client";

import React from "react";
import { AppContext, AppProvider } from "./components/Context";
import Image from "next/image";
import MainView from "./components/MainView";
import View1 from "./components/View1";
import View2 from "./components/View2";
import View3 from "./components/View3";
import View4 from "./components/View4";
import View5 from "./components/View5";
import View6 from "./components/View6";
import Letras from "./components/Letras";

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
        <MainView />
        <View1 />
        <View2 />
        <View3 />
        <View4 />
        <View5 />
        <View6 />
        <Letras />
      </AppProvider>
    </div>
  );
};

export default PageMobile;
