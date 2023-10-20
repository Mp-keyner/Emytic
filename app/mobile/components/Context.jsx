import React, { createContext, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [emyticClass, setEmyticClass] = useState(
    "fixed z-50 bottom-72 left-16 w-[10pc] duration-500"
  );
  const [pageNumber, setPageNumber] = useState(1);
  const handleClick = (number) => {
    setPageNumber(number);
    switch (pageNumber) {
      case 1:
        setEmyticClass(
          "fixed z-50 bottom-20 left-5 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 2:
        setEmyticClass(
          "fixed z-50 bottom-48 right-10 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 3:
        setEmyticClass(
          "fixed z-50 bottom-48 right-10 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 4:
        setEmyticClass(
          "fixed z-50 bottom-44 right-1 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 5:
        setEmyticClass(
          "fixed z-50 bottom-44 right-1 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 6:
        setEmyticClass(
          "fixed z-50 bottom-48 right-1 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 7:
        setEmyticClass(
          "fixed z-50 bottom-48 right-1 w-[10pc] opacity-100 duration-500 opacity-0"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 8:
        setEmyticClass(
          "fixed z-50 bottom-44 right-1 w-[10pc] opacity-100 duration-500 opacity-0"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 9:
        setEmyticClass("fixed z-50 bottom-20 left-5 w-[10pc] duration-500");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 10:
        setEmyticClass(
          "fixed z-50 bottom-32 right-10 w-[10pc] opacity-100 duration-500"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 11:
        setEmyticClass(
          "fixed z-50 bottom-0 right-10 w-[10pc] opacity-100 duration-500 opacity-0"
        );
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        console.log("sisa");
        break;
    }
  };
  return (
    <AppContext.Provider value={{ handleClick, emyticClass }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
