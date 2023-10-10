import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const View1 = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
    input7: "",
    input8: "",
    input9: "",
    input10: "",
    input11: "",
    input12: "",
    input13: "",
    input14: "",
    input15: "",
    input16: "",
    input17: "",
    input18: "",
    input19: "",
    input20: "",
    input21: "",
    input22: "",
    input23: "",
    input24: "",
    input25: "",
    input26: "",
    input27: "",
    input28: "",
    input29: "",
    input30: "",
    input31: "",
    input32: "",
    input33: "",
    input34: "",
    input35: "",
    input36: "",
    input37: "",
    input38: "",
    input39: "",
    input40: "",
  });
  // Manejar el evento de arrastre de la imagen
  const handleImageDrag = (e, inputName) => {
    e.preventDefault();

    const imageSrc = e.dataTransfer.getData("text/plain");

    // Actualizar el valor del input correspondiente
    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: imageSrc,
    }));

    console.log(`Src de la imagen ${inputName}:`, imageSrc);
  };
  // Manejar el evento de cambio del input
  const handleInputChange = (e, inputName) => {
    const newValue = e.target.value;

    setInputValues((prevValues) => ({
      ...prevValues,
      [inputName]: newValue,
    }));
  };
  const AddAnimation = () => {
    const row = document.getElementById("row");
    const Seventeen = document.getElementById("Seventeen");

    Seventeen.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    // row.style.transition = "all 1s";
    // row.style.top = "169pc";
    // row.style.left = "66pc";
    // row.style.width = "13pc";
    console.log("objectsdftgyhuji");
  };
  const handleKeyDown = (e) => {
    if (e.keyCode === 89) {
      const Seventeen = document.getElementById("Seventeen");

      Seventeen.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });

      row.style.transition = "all 1s";
      row.style.opacity = 0;
      console.log("objectsdftgyhuji");
      console.log("Tecla pre");
    }
  };
  window.addEventListener("keydown", handleKeyDown);
  return (
    <>
      <div className="relative border-1 border-solid fondo6 h-screen p-[1pc]">
        <h1 className="text-[2pc] font-semibold">Descubre el mensaje oculto</h1>
        <br />
        <div className="absolute top-[15%] right-[0pc] w-[10pc] flex flex-col items-center text-center z-[1]">
          <h2>Presiona para empezar</h2>
          <Image
            onClick={AddAnimation}
            src="/img/row.svg"
            width={100}
            height={100}
          />
        </div>
        <div className="p-[1pc]  bg-white  border-[3px] border-black w-[21pc] text-center">
          <div className="flex items-center gap-[1pc]">
            <label>
              <img
                src="/img/Animal/4.svg"
                alt=""
                className="w-[3pc] zon"
                title="A"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Aa</p>
            </label>
            <label>
              <img
                src="/img/Animal/5.svg"
                alt=""
                className="w-[3pc] zon"
                title="B"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Bb</p>
            </label>
            <label>
              <img
                src="/img/Animal/6.svg"
                alt=""
                className="w-[3pc] zon"
                title="C"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Cc</p>
            </label>
            <label>
              <img
                src="/img/Animal/7.svg"
                alt=""
                className="w-[3pc] zon"
                title="D"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Dd</p>
            </label>
            <label>
              <img
                src="/img/Animal/8.svg"
                alt=""
                className="w-[3pc] zon"
                title="E"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ee</p>
            </label>
            <label>
              <img
                src="/img/Animal/9.svg"
                alt=""
                className="w-[3pc] zon"
                title="F"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ff</p>
            </label>
          </div>
          <div className="flex items-center gap-[1pc]">
            <label>
              <img
                src="/img/Animal/10.svg"
                alt=""
                className="w-[3pc] zon"
                title="G"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Gg</p>
            </label>
            <label>
              <img
                src="/img/Animal/11.svg"
                alt=""
                className="w-[3pc] zon"
                title="H"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Hh</p>
            </label>
            <label>
              <img
                src="/img/Animal/12.svg"
                alt=""
                className="w-[3pc] zon"
                title="I"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ii</p>
            </label>
            <label>
              <img
                src="/img/Animal/13.svg"
                alt=""
                className="w-[3pc] zon"
                title="J"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Jj</p>
            </label>
            <label>
              <img
                src="/img/Animal/14.svg"
                alt=""
                className="w-[3pc] zon"
                title="K"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Kk</p>
            </label>
            <label>
              <img
                src="/img/Animal/15.svg"
                alt=""
                className="w-[3pc] zon"
                title="L"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ll</p>
            </label>
          </div>
          <div className="flex items-center gap-[1pc]">
            <label>
              <img
                src="/img/Animal/16.svg"
                alt=""
                className="w-[3pc] zon"
                title="M"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Mm</p>
            </label>
            <label>
              <img
                src="/img/Animal/17.svg"
                alt=""
                className="w-[3pc] zon"
                title="N"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Nn</p>
            </label>
            <label>
              <img
                src="/img/Animal/18.svg"
                alt=""
                className="w-[3pc] zon"
                title="O"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Oo</p>
            </label>
            <label>
              <img
                src="/img/Animal/19.svg"
                alt=""
                className="w-[3pc] zon"
                title="P"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Pp</p>
            </label>
            <label>
              <img
                src="/img/Animal/20.svg"
                alt=""
                className="w-[3pc] zon"
                title="Q"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Qq</p>
            </label>
            <label>
              <img
                src="/img/Animal/21.svg"
                alt=""
                className="w-[3pc] zon"
                title="R"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Rr</p>
            </label>
          </div>
          <div className="flex items-center gap-[1pc]">
            <label>
              <img
                src="/img/Animal/22.svg"
                alt=""
                className="w-[3pc] zon"
                title="S"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ss</p>
            </label>
            <label>
              <img
                src="/img/Animal/23.svg"
                alt=""
                className="w-[3pc] zon"
                title="T"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Tt</p>
            </label>
            <label>
              <img
                src="/img/Animal/24.svg"
                alt=""
                className="w-[3pc] zon"
                title="U"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Uu</p>
            </label>
            <label>
              <img
                src="/img/Animal/25.svg"
                alt=""
                className="w-[3pc] zon"
                title="V"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Vv</p>
            </label>
            <label>
              <img
                src="/img/Animal/26.svg"
                alt=""
                className="w-[3pc] zon"
                title="W"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Ww</p>
            </label>
            <label>
              <img
                src="/img/Animal/27.svg"
                alt=""
                className="w-[3pc] zon"
                title="X"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Xx</p>
            </label>
          </div>
          <div className="flex items-center gap-[1pc] justify-center">
            <label>
              <img
                src="/img/Animal/28.svg"
                alt=""
                className="w-[2.5pc] zon"
                title="Y"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Yy</p>
            </label>
            <label>
              <img
                src="/img/Animal/29.svg"
                alt=""
                className="w-[2.5pc] zon"
                title="Z"
                onDragStart={(e) =>
                  e.dataTransfer.setData("text/plain", e.target.title)
                }
              />
              <p>Zz</p>
            </label>
          </div>
        </div>
        <div className="bg-white p-[1pc] border-[3px] border-black absolute top-[4pc] right-[1pc] contaAni gap-[1pc] w-[54pc]">
          <div className="p-[1pc] border-b  border-black border-solid tat">
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/13.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc] zon" />
          </div>
          <div className="p-[1pc] border-b border-black border-solid tat w-[11pc]">
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc] zon" />
          </div>
          <div
            className="p-[1pc] border-b border-black border-solid w-[29pc] tat ml-[7pc]"
            style={{ gridColumn: "1/3" }}
          >
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/16.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/6.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc] zon" />
          </div>

          <div className="p-[1pc] border-b border-black border-solid tat justify-end w-[5pc] ml-[16pc]">
            <img src="/img/Animal/28.svg" alt="nn" className="w-[22pc] zon" />
          </div>

          <div className="p-[1pc] border-b border-black border-solid tat w-[17pc]">
            <br />
            <img src="/img/Animal/23.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/10.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc] zon" />
          </div>
          <div className="p-[1pc] border-b border-black border-solid tat">
            <img src="/img/Animal/5.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/24.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc] zon" />
          </div>
          <div className="p-[1pc] border-b border-black border-solid tat">
            <img src="/img/Animal/21.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/15.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/4.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/6.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/12.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/18.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/17.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/8.svg" alt="nn" className="w-[22pc] zon" />
            <img src="/img/Animal/22.svg" alt="nn" className="w-[22pc] zon" />
          </div>
        </div>

        <div className="flex gap-[2pc] absolute bottom-[6pc] justify-center w-[97%]">
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input1")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input1}
              onChange={(e) => handleInputChange(e, "input1")}
              disabled
              className="bg-white text-black text-center w-[2pc] "
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input2")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input2}
              onChange={(e) => handleInputChange(e, "input2")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input3")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input3}
              onChange={(e) => handleInputChange(e, "input3")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input4")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input4}
              onChange={(e) => handleInputChange(e, "input4")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input5")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input5}
              onChange={(e) => handleInputChange(e, "input5")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input6")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input6}
              onChange={(e) => handleInputChange(e, "input6")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input7")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input7}
              onChange={(e) => handleInputChange(e, "input7")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input8")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input8}
              onChange={(e) => handleInputChange(e, "input8")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input9")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input9}
              onChange={(e) => handleInputChange(e, "input9")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input10")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input10}
              onChange={(e) => handleInputChange(e, "input10")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input11")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input11}
              onChange={(e) => handleInputChange(e, "input11")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input12")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input12}
              onChange={(e) => handleInputChange(e, "input12")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input13")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input13}
              onChange={(e) => handleInputChange(e, "input13")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input14")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input14}
              onChange={(e) => handleInputChange(e, "input14")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input15")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input15}
              onChange={(e) => handleInputChange(e, "input15")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input16")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input16}
              onChange={(e) => handleInputChange(e, "input16")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input17")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input17}
              onChange={(e) => handleInputChange(e, "input17")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input18")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input18}
              onChange={(e) => handleInputChange(e, "input18")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input19")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input19}
              onChange={(e) => handleInputChange(e, "input19")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input20")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input20}
              onChange={(e) => handleInputChange(e, "input20")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input21")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input21}
              onChange={(e) => handleInputChange(e, "input21")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input22")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input22}
              onChange={(e) => handleInputChange(e, "input22")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input23")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input23}
              onChange={(e) => handleInputChange(e, "input23")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input24")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input24}
              onChange={(e) => handleInputChange(e, "input24")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
        </div>
        <div className="flex gap-[2pc] bottom-[3pc] absolute justify-center w-[97%]">
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input25")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input25}
              onChange={(e) => handleInputChange(e, "input25")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input26")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input26}
              onChange={(e) => handleInputChange(e, "input26")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input27")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input27}
              onChange={(e) => handleInputChange(e, "input27")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input28")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input28}
              onChange={(e) => handleInputChange(e, "input28")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input29")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input29}
              onChange={(e) => handleInputChange(e, "input29")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input30")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input30}
              onChange={(e) => handleInputChange(e, "input30")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
          <div className="flex gap-[0.6pc] ">
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input31")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input31}
              onChange={(e) => handleInputChange(e, "input31")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input32")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input32}
              onChange={(e) => handleInputChange(e, "input32")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input33")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input33}
              onChange={(e) => handleInputChange(e, "input33")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input34")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input34}
              onChange={(e) => handleInputChange(e, "input34")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input35")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input35}
              onChange={(e) => handleInputChange(e, "input35")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input36")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input36}
              onChange={(e) => handleInputChange(e, "input36")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input37")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input37}
              onChange={(e) => handleInputChange(e, "input37")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input38")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input38}
              onChange={(e) => handleInputChange(e, "input38")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input39")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input39}
              onChange={(e) => handleInputChange(e, "input39")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
            <input
              type="text"
              onDrop={(e) => handleImageDrag(e, "input40")}
              onDragOver={(e) => e.preventDefault()}
              value={inputValues.input40}
              onChange={(e) => handleInputChange(e, "input40")}
              disabled
              className="bg-white text-black text-center w-[2pc]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default View1;
