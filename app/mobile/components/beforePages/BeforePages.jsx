import React, { useContext, useEffect, useRef, useState } from "react";
import "./beforePages.css";
import { AppContext } from "../Context";
export const BeforePages = () => {
  const { handleClick } = useContext(AppContext);
  const listRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [btn, setBtn] = useState(0);
  const data = [
    {
      id: 1,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F1.png?alt=media&token=87f3d571-efa6-4df7-b6ab-f29839e8d969",
    },
    {
      id: 2,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F2.png?alt=media&token=dc63bb4f-f793-4206-8d52-24537770f4db",
    },
    {
      id: 3,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F3.png?alt=media&token=e6eeceeb-8057-4c4a-a531-a796226ed767",
    },
    {
      id: 4,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F4.png?alt=media&token=8a7ff8d0-4e07-4924-a02f-978e2a9d9ddc",
    },
    {
      id: 5,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F5.png?alt=media&token=24574d35-f809-4245-85eb-a22139f13b34",
    },
    {
      id: 6,
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/Emytic%2F6.png?alt=media&token=c2cfc1d7-9020-4978-aec8-fd9cc0f0d983",
    },
  ];
  useEffect(() => {
    const listNode = listRef.current;
    const imgNode = listNode.querySelectorAll("li > img")[currentIndex];

    if (imgNode) {
      imgNode.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  const scrollToImage = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((curr) => {
        const isFirstSlide = currentIndex === 0;
        return isFirstSlide ? 0 : curr - 1;
      });
    } else {
      const isLastSlide = currentIndex === data.length - 1;
      if (!isLastSlide) {
        setCurrentIndex((curr) => curr + 1);
      }
    }
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="h-screen w-[100%] bg-[#79c606]">
      <div className="main-container">
        <div className="slider-container">
          <div className="leftArrow" onClick={() => scrollToImage("prev")}>
            &#10092;
          </div>
          <div
            className="rightArrow"
            onClick={() => {
              scrollToImage("next");
              setBtn(btn + 1);
            }}
          >
            &#10093;
          </div>
          <div className="container-images">
            <ul ref={listRef}>
              {data.map((item) => {
                return (
                  <li key={item.id}>
                    <img src={item.imgUrl} width={500} height={280} />
                    <div className="ContainerBtn">
                      {btn >= 5 && (
                        <button className="btn" onClick={() => handleClick(2)}>
                          Empezar
                        </button>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="dots-container">
            {data.map((_, idx) => (
              <div
                key={idx}
                className={`dot-container-item ${
                  idx === currentIndex ? "active" : ""
                }`}
                onClick={() => goToSlide(idx)}
              >
                &#9865;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
