import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import Image from "next/image";

const Emytic = () => {
  const { pageNumber, emyticClass } = useContext(AppContext);
  const [opacity, setOpacity] = useState(false);
  console.log(pageNumber);
  useEffect(() => {
    console.log("SE monto", emyticClass);
    //Actualiar el valor de
    if (pageNumber === 8 || pageNumber === 9) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  }, [pageNumber]);
  console.log(opacity);
  return (
    <>
      <Image
        src="/img/1.svg"
        width={300}
        height={500}
        className={emyticClass}
        style={{
          border: "1px solid red",
          transition: "all 1s ease-in-out",
          opacity: `${opacity ? 0 : 1}`,
          display: `${opacity ? "none" : "block"}`,
        }}
        id="row"
        title="EMYT"
      />
    </>
  );
};

export default Emytic;
