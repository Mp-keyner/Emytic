import React from "react";
import useSound from "use-sound";

const MusicPlayer = ({ setShowFunction, Show }) => {
  const [play] = useSound(
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113"
  );
  function requestFullScreen() {
    console.log("dia dia ");
    // Verificar si el navegador admite el modo de pantalla completa
    if (document.documentElement.requestFullscreen) {
      // Solicitar entrar en modo de pantalla completa en respuesta a un clic
      document.documentElement.requestFullscreen();
      setShowFunction(!Show);
      console.log(Show);
    }
  }
  const active = () => {
    play();
    requestFullScreen();
    console.log("Active");
  };
  return (
    <button
      className="border border-solid border-white w-[7pc] h-[3pc] rounded-lg z-40 text-white flecha"
      onClick={active}
    >
      Comenzar
    </button>
  );
};

export default MusicPlayer;
