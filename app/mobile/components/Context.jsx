import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [emyticClass, setEmyticClass] = useState(
    "fixed z-50 bottom-[40%] right-[30%] w-[10pc]"
  );
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log(pageNumber)
    switch (pageNumber) {
      case 1:
        setEmyticClass("fixed z-50 bottom-1/2 right-[55%] w-[10pc] ");
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("Caso 1");
        break;
      case 2:
        setEmyticClass("fixed z-50 bottom-48 right-10 w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        console.log("Caso 2");
        break;
      case 3:
        setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        console.log("Caso 3");
        break;
      case 4:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 5:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 6:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 7:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc] ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 8:
        setEmyticClass("fixed z-50 bottom-44 right-1 w-[10pc] ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 9:
        setEmyticClass("fixed z-50 bottom-20 left-5 w-[10pc] ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 10:
        setEmyticClass("fixed z-50 bottom-32 right-10 w-[10pc]  ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      case 11:
        setEmyticClass("fixed z-50 bottom-0 right-10 w-[10pc]   ");
        window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
        break;
      default: 
      setEmyticClass("fixed z-50 bottom-[40%] right-[30%] w-[10pc]");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pageNumber]);
  console.log(pageNumber);
  const handleClick = (number) => {
    setPageNumber(number);
    console.log("handleClick called", number);
    window.scrollTo({ top: innerHeight * number, behavior: "smooth" });
  };
  return (
    <AppContext.Provider value={{ handleClick, emyticClass, pageNumber }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
