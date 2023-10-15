"use client";

import Situaciones from "@/components/Situaciones";
import Letras from "@/components/Letras";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

export default function Home() {
  const audioSource =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113";

  const [Show, setShow] = useState(true);
  const [volumen, setVolumen] = useState(true);
  const [tal, setTal] = useState(0);
  useEffect(() => {
    AOS.init();
    var isMobile = window.innerWidth <= 768;
    setTal(isMobile);
  }, []);
  return (
    <>
      <Letras />
    </>
  );
}
