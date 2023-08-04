import Image from "next/image";
import { TiArrowRightThick } from "react-icons/ti";

export default function Home() {
  const go = () => {
    console.log("ghjkl");
  };
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;300;400;600&display=swap"
        rel="stylesheet"
      />
      <main>
        <div className="border-1 border-solid border-red-500 bg-customColor h-screen text-white">
          <h1 className="text-center">EMYTIC</h1>
          <div className="flex justify-between items-center h-[96%] relative">
            <div className="w-[50%] pl-[1.5pc]">
              <Image
                src="/img/Rocking Horse.svg"
                width={400}
                height={600}
                className="w-[100%] position: absolute top-[-42.6pc] right-[7pc]"
              />
            </div>
            <div className="w-[50%] flex justify-end">
              <Image
                src="/img/1.svg"
                width={300}
                height={500}
                className="absolute top-[12pc] left-[34%]"
              />
              <Image
                src="/img/6.svg"
                width={300}
                height={500}
                className="absolute top-[21pc] left-[-1pc]"
              />
              <div className="w-[27%]">
                <h2>Presiona para empezar</h2>
                <a href="#secon">
                  <TiArrowRightThick className="w-[8pc] text-[8pc]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="secon"
          className="border-1 border-solid border-red-500 bg-red-400 h-screen"
        >
          Contenido aquí
        </div>
        <div
          id="secon"
          className="border-1 border-solid border-blue-500 bg-blue-400 h-screen"
        >
          Contenido aquí
        </div>
        <div
          id="secon"
          className="border-1 border-solid border-red-500 bg-yellow-400 h-screen"
        >
          Contenido aquí
        </div>
      </main>
    </>
  );
}
