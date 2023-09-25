import Image from 'next/image'
import React from 'react'

const Modal = ({ closeModal, mensaje }) => {
    return (
        <>
            <div
                style={{ backdropFilter: "blur(10px)" }}

                className=" fixed inset-0 z-50 flex items-center justify-center bg-[#ffffff29]"
            >
                <div className="modal-overlay fixed inset-0"></div>
                <div className="modal-content sorpresa bg-customColor rounded-lg p-4 z-20">
                    <Image
                        onClick={closeModal}
                        src="/img/x.svg"
                        width={50}
                        height={50}
                        className="absolute top-0 right-0 m-2"
                        alt=''
                    />
                    <Image
                        className="w-[18pc]  z-[-1]  absolute left-[0%] top-[0%]"
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva1.svg"
                        width={500}
                        height={500}
                    />
                    <Image
                        className="w-[18pc]  z-[-1]  absolute right-[0%] top-[0%]"
                        data-aos="fade-left" // Definición única de data-aos
                        data-aos-out="fade-left"
                        src="/img/selva2.svg"
                        width={500}
                        height={500}
                    />
                    {/* Contenido del modal */}
                    <h2 className="text-lg font-bold mb-2">Tarea del regalo</h2>
                    <p className='w-[20pc]'>{mensaje}</p>
                </div>
            </div>
        </>
    )
}

export default Modal
