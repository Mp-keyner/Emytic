import Image from "next/image";
import React, { useState } from "react";

const MyComponent = () => {
  const [inputValues, setInputValues] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
    input5: "",
    input6: "",
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

  return (
    <div className="flex items-center justify-center flex-col gap-[1pc] h-[100vh]">
      <div
        className="w-[23pc] bocadillo-cuadrado5 sm:w-[52pc] h-[12pc] sm:h-[15pc] border-2 text-lg px-4 py-1 z-40 text-[0.6pc]"
        data-aos="fade-right" // Definición única de data-aos
        data-aos-out="fade-left"
      >
        <table class="styled-table text-[0.4pc] sm:text-[1pc]">
          <thead>
            <tr>
              <th>Alegria</th>
              <th>Enojo</th>
              <th>Tristeza</th>
              <th>Miedo</th>
              <th>Sorpresa</th>
              <th>Desagrado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F1.png?alt=media&token=8fe4a84f-0e14-4a78-86ba-026d0f88c24c"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] alegria"
                  title="alegria"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                1
              </td>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F2.png?alt=media&token=c69d47eb-46d2-40f8-baa8-6375aa606731"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] Enojo"
                  title="Enojo"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                2
              </td>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F3.png?alt=media&token=5388ab3d-868a-402c-bf05-9a230380e5c8"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] Tristeza"
                  title="Tristeza"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                3
              </td>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F4.png?alt=media&token=aa83b80b-06b6-41a9-85ec-ce85d6074041"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] Miedo"
                  title="Miedo"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                4
              </td>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F5.png?alt=media&token=0c9373cc-abf3-47c4-a795-1b884645a8a9"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] Sorpresa"
                  title="Sorpresa"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                5
              </td>
              <td>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/documentos%2FcarasBlancas%2F6.png?alt=media&token=dd373c4e-041d-499a-91cf-2a89b9c327e2"
                  width={100}
                  height={100}
                  className="w-[2pc] sm:w-[7pc] Desagrado"
                  title="Desagrado"
                  onDragStart={(e) =>
                    e.dataTransfer.setData("text/plain", e.target.title)
                  }
                />
                6
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <section className="flex gap-[1pc] flex-wrap items-center justify-center text-center">
        <div
          className={`w-[25%] text-center p-4 border bg-white border-black rounded-md`}
        >
          <p>Ganar un examen con excelente nota</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input1")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input1}
            onChange={(e) => handleInputChange(e, "input1")}
          />
        </div>
        <div className="w-[25%] text-center p-4 border border-black bg-white rounded-md ">
          <p>Quedarme solo en la oscuridad</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input2")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input2}
            onChange={(e) => handleInputChange(e, "input2")}
          />
        </div>
        <div className="w-[25%] text-center p-4 border border-black bg-white rounded-md ">
          <p>Recibir una fiesta sorpresa</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input3")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input3}
            onChange={(e) => handleInputChange(e, "input3")}
          />
        </div>
        <div className="w-[25%] text-center p-4 border border-black bg-white rounded-md ">
          <p>Perder a un ser querido</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input4")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input4}
            onChange={(e) => handleInputChange(e, "input4")}
          />
        </div>
        <div className="w-[25%] text-center p-4 border border-black bg-white rounded-md ">
          <p>Probar un alimento que no me gusta</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input5")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input5}
            onChange={(e) => handleInputChange(e, "input5")}
          />
        </div>
        <div className="w-[25%] text-center p-4 border border-black bg-white rounded-md ">
          <p>No conseguir mi juguete favorito</p>
          <input
            className="border border-black px-[0.8pc] w-[7pc] text-center bg-transparent"
            type="text"
            placeholder="Arrastra una imagen aquí"
            onDrop={(e) => handleImageDrag(e, "input6")}
            onDragOver={(e) => e.preventDefault()}
            value={inputValues.input6}
            onChange={(e) => handleInputChange(e, "input6")}
          />
        </div>
      </section>
    </div>
  );
};

export default MyComponent;
