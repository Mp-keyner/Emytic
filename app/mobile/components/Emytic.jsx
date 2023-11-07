import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./Context";
import Image from "next/image";

const Emytic = () => {
  const { pageNumber, emyticClass } = useContext(AppContext);
  const [opacity, setOpacity] = useState(false);
  useEffect(() => {
    //Actualiar el valor de
    if (
      pageNumber === 1 ||
      pageNumber === 9 ||
      pageNumber === 10 ||
      pageNumber === 17 ||
      pageNumber === 18 ||
      pageNumber === 25 ||
      pageNumber === 26 ||
      pageNumber === 31 ||
      pageNumber === 33 ||
      pageNumber === 34 ||
      pageNumber === 37 ||
      pageNumber === 39 ||
      pageNumber === 40
    ) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  }, [pageNumber]);
  return (
    <>
      <Image
        src="/img/1.svg"
        width={300}
        height={500}
        className={emyticClass}
        style={{
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
