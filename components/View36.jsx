import Image from 'next/image'
import React from 'react'

const View36 = () => {
  return (
    <div className="relative border-1 border-solid  fondo8 h-[100vh]">


                <div
                  className="bocadillo-cuadrado1 absolute z-50 left-[33%] top-[58%]"
                  data-aos="fade-right" // Definición única de data-aos
                  data-aos-out="fade-left"
                  id="mensaje"
                  style={{ transform: "translate(-50%, -50%)" }}
                >
                  <p>
                    Eres único, se vale sentir tus emociones, pero debes expresarlas con responsabilidad, comparte, sonríe y disfruta de la compañía de los demás. Recuerda que pequeñas acciones nos llevan a grandes cambios, y que juntos podemos construir un mundo mejor
                  </p>
                </div>

                <Image
                  src="/img/1.svg"
                  width={300}
                  height={500}
                  className="absolute top-[30%] left-[10%] transform z-40 w-[10pc] sm:w-[16pc]"
                  style={{ transform: "translate(-50%, -50%)" }}
                  data-aos="fade-down"
                  title="EMYT"
                  alt=""
                />
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F35.png?alt=media&token=a3dec0a5-7875-48ce-a6c9-07f14b4eeb60"
                  width={300}
                  height={500}
                  className="absolute top-[30%] right-[6%] transform z-40 w-[10pc] sm:w-[16pc]"
                  style={{ transform: "translate(-50%, -50%)" }}
                  data-aos="fade-down"
                  title="Soso"
                  alt=""
                />
                <h1
                  className="text-[4pc] sm:text-[8pc] font-bold z-40 absolute left-[16pc] top-[2%]"
                  data-aos="fade-up"
                  id="titulo"
                >
                  EMYTIC
                </h1>
                <Image
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F36.png?alt=media&token=b1e9ba48-6f49-4587-a356-b9a3d3dc6568"
                  width={300}
                  height={500}
                  className="absolute bottom-[10%] right-[6%] transform z-40 w-[10pc] sm:w-[16pc]"
                  data-aos="fade-down"
                  alt=""
                />
                <Image
                  className="w-[17pc]  z-40  absolute left-[0pc] bottom-[-1%]"
                  data-aos="fade-left" // Definición única de data-aos
                  data-aos-out="fade-left"
                  src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/moko%2F34.png?alt=media&token=09cf0f4f-3902-4992-a21e-89b3d3b32d91"
                  width={500}
                  height={500}
                  alt=""
                />
                <Image
                  className="w-[18pc] z-0  absolute left-[0%] top-[0%]"
                  data-aos="fade-left" // Definición única de data-aos
                  data-aos-out="fade-left"
                  src="/img/selva1.svg"
                  width={500}
                  height={500}
                  alt=""
                />
                <Image
                  className="w-[18pc] z-0  absolute right-[0%] top-[0%]"
                  data-aos="fade-left" // Definición única de data-aos
                  data-aos-out="fade-left"
                  src="/img/selva2.svg"
                  width={500}
                  height={500}
                  alt=""
                />
                <div className="flex absolute bottom-0">
                  <Image
                    className="w-[20pc]  "
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva3.svg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    className="w-[20pc]  "
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva3.svg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    className="w-[20pc]  "
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva3.svg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    className="w-[20pc]  "
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva3.svg"
                    width={500}
                    height={500}
                    alt=""
                  />
                  <Image
                    className="w-[20pc]  "
                    data-aos="fade-left" // Definición única de data-aos
                    data-aos-out="fade-left"
                    src="/img/selva3.svg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </div>
              </div>
  )
}

export default View36