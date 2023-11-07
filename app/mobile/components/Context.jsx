import React, { createContext, useEffect, useState } from "react";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [emyticClass, setEmyticClass] = useState(
    "fixed z-50 bottom-[40%] right-[30%] w-[10pc]"
  );
  const [pageNumber, setPageNumber] = useState(1);
  const [tuto, setTuto] = useState(false);

  useEffect(() => {
    console.log(pageNumber);
    switch (pageNumber) {
      case 1:
        setEmyticClass("fixed z-50 bottom-[35%] right-[55%] w-[10pc] ");
        scrollToSection(1);
        console.log("Caso 1");
        break;
      case 2:
        setEmyticClass("fixed z-50 bottom-[35%] right-[55%] w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(2);
        console.log("Caso 2");
        break;
      case 3:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(3);
        console.log("Caso 3");
        break;
      case 4:
        setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");

        scrollToSection(4);
        break;
      case 5:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        // setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        scrollToSection(5);
        break;
      case 6:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc]  ");
        scrollToSection(6);
        break;
      case 7:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc] ");
        scrollToSection(7);
        break;
      case 8:
        setEmyticClass("fixed z-50 bottom-44 right-1 w-[10pc] ");
        scrollToSection(8);
        break;
      case 9:
        scrollToSection(9);
        break;
      case 10:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(10);
        break;
      case 11:
        // setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(11);
        break;
      case 12:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(12);
        break;
      case 13:
        // setEmyticClass("fixed z-50 bottom-[4%] right-11 w-[10pc]");
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(13);
        break;
      case 14:
        setEmyticClass("fixed z-50 bottom-[4%] right-11 w-[10pc]");
        // setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(14);
        break;
      case 15:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(15);
        break;
      case 16:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(16);
        break;
      case 17:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(17);
        break;
      case 18:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(18);
        console.log("Caso 18");
        break;
      case 19:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");
        scrollToSection(19);
        console.log("Caso 19");
        break;
      case 20:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        scrollToSection(20);
        break;
      case 21:
        setEmyticClass("fixed z-50 bottom-[12%] right-[10%] w-[10pc]  ");
        scrollToSection(21);
        break;
      case 22:
        setEmyticClass("fixed z-50 bottom-[12%] right-[10%] w-[10pc]  ");
        // setEmyticClass("fixed z-50 bottom-48 right-5 w-[10pc]  ");
        scrollToSection(22);
        break;
      case 23:
        setEmyticClass("fixed z-50 bottom-48 right-5 w-[10pc]  ");
        // setEmyticClass("fixed z-50 top-12 right-5 w-[10pc] ");
        scrollToSection(23);
        break;
      case 24:
        setEmyticClass("fixed z-50 top-12 right-5 w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-[35%] right-[55%] w-[10pc] ");
        scrollToSection(24);
        console.log("Caso 24");
        break;
      case 25:
        setEmyticClass("fixed z-50 bottom-[35%] right-[55%] w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(25);
        console.log("Caso 25");
        break;
      case 26:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(26);
        console.log("Caso 26");
        break;
      case 27:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");
        scrollToSection(27);
        break;
      case 28:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        // setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        scrollToSection(28);
        break;
      case 29:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc]  ");
        scrollToSection(29);
        break;
      case 30:
        setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc] ");
        scrollToSection(30);
        break;
      case 31:
        setEmyticClass("fixed z-50 bottom-44 right-1 w-[10pc] ");
        scrollToSection(31);
        break;
      case 32:
        scrollToSection(32);
        break;
      case 33:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(33);
        break;
      case 34:
        // setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(34);
        break;
      case 35:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(35);
        break;
      case 36:
        // setEmyticClass("fixed z-50 bottom-[4%] right-11 w-[10pc]");
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(36);
        break;
      case 37:
        setEmyticClass("fixed z-50 bottom-[4%] right-11 w-[10pc]");
        // setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(37);
        break;
      case 38:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(38);
        break;
      case 39:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(39);
        break;
      case 40:
        setEmyticClass("fixed z-50 bottom-[20%] right-10 w-[10pc]");
        scrollToSection(40);
        break;
      case 41:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        scrollToSection(41);
        console.log("Caso 41");
        break;
      case 42:
        setEmyticClass("fixed z-50 bottom-[10%] right-[55%] w-[10pc] ");
        // setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");
        scrollToSection(42);
        console.log("Caso 42");
        break;
      case 43:
        setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
        scrollToSection(43);
        break;
      case 44:
        setEmyticClass("fixed z-50 bottom-[12%] right-[10%] w-[10pc]  ");
        scrollToSection(44);
        break;
      case 45:
        setEmyticClass("fixed z-50 bottom-[12%] right-[10%] w-[10pc]  ");
        // setEmyticClass("fixed z-50 bottom-48 right-5 w-[10pc]  ");
        scrollToSection(45);
        break;
      case 46:
        setEmyticClass("fixed z-50 bottom-48 right-5 w-[10pc]  ");
        // setEmyticClass("fixed z-50 top-12 right-5 w-[10pc] ");
        scrollToSection(46);
        break;
        setEmyticClass("fixed z-50 bottom-[35%] right-[55%] w-[10pc] ");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pageNumber]);

  console.log(pageNumber);

  const scrollToSection = (sectionNumber) => {
    const sectionTop = (sectionNumber - 1) * innerHeight;
    window.scrollTo({ top: sectionTop, behavior: "smooth" });
  };

  const handleClick = (number) => {
    setPageNumber(number);
    console.log("handleClick called", number);
  };

  return (
    <AppContext.Provider
      value={{ handleClick, emyticClass, pageNumber, tuto, setTuto }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

// style={{ backgroundColor: "#51e843" }}
// import React, { createContext, useEffect, useState } from "react";
// const AppContext = createContext();

// const AppProvider = ({ children }) => {
//   const [emyticClass, setEmyticClass] = useState(
//     "fixed z-50 bottom-[40%] right-[30%] w-[10pc]"
//   );
//   const [pageNumber, setPageNumber] = useState(1);

//   useEffect(() => {
//     console.log(pageNumber);
//     switch (pageNumber) {
//       case 1:
//         setEmyticClass("fixed z-50 bottom-1/2 right-[55%] w-[10pc] ");
//         window.scrollTo({ top: 0, behavior: "smooth" });
//         console.log("Caso 1");
//         break;
//       case 2:
//         setEmyticClass("fixed z-50 bottom-48 right-10 w-[10pc]  ");
//         window.scrollTo({ top: innerHeight, behavior: "smooth" });
//         console.log("Caso 2");
//         break;
//       case 3:
//         setEmyticClass("fixed z-50 bottom-48 right-[10%] w-[10pc]  ");
//         window.scrollTo({
//           top: innerHeight * pageNumber,
//           behavior: "smooth",
//         });
//         console.log("Caso 3");
//         break;
//       case 4:
//         setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 5:
//         setEmyticClass("fixed z-50 bottom-44 right-[10%] w-[10pc]  ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 6:
//         setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc]  ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 7:
//         setEmyticClass("fixed z-50 bottom-48 right-1 w-[10pc] ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 8:
//         setEmyticClass("fixed z-50 bottom-44 right-1 w-[10pc] ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 9:
//         setEmyticClass("fixed z-50 bottom-20 left-5 w-[10pc] ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 10:
//         setEmyticClass("fixed z-50 bottom-32 right-10 w-[10pc]  ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       case 11:
//         setEmyticClass("fixed z-50 bottom-0 right-10 w-[10pc]   ");
//         window.scrollTo({ top: innerHeight * pageNumber, behavior: "smooth" });
//         break;
//       default:
//         setEmyticClass("fixed z-50 bottom-[40%] right-[30%] w-[10pc]");
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   }, [pageNumber]);
//   console.log(pageNumber);
//   const handleClick = (number) => {
//     setPageNumber(number);
//     console.log("handleClick called", number);
//     // window.scrollTo({ top: innerHeight * number, behavior: "smooth" });
//   };
//   return (
//     <AppContext.Provider value={{ handleClick, emyticClass, pageNumber }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppProvider, AppContext };
// "O - I - D - A - S - A - L - D - I - R - D ",
{
  /*
situacion: {
      marginLeft: "1pc",
      fontSize: "1.2pc",
      width: "100%",
      fontWeight: "bold",
      margin: "0pc",
      textAlign: "center",
    },
*/
}
