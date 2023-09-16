import React from "react";
import { useSound } from "use-sound";

function Mapa() {
  const soundUrl = "/sounds/guitar-loop.mp3";

  const [play, { stop, isPlaying }] = useSound(soundUrl, { volume: 0.5 }); // Establece el volumen inicial

  const handlePlay = () => {
    console.log("Play");
    if (!isPlaying) {
      play();
    }
  };

  const handleStop = () => {
    console.log("stop");
    if (isPlaying) {
      stop();
    }
  };

  const handleVolumeDown = () => {
    console.log(vlumen);
    const currentVolume = isPlaying ? 0.1 : 0; // Ajusta el volumen solo si la música está reproduciéndose
    play({ volume: currentVolume });
  };

  return (
    <div className="absolute z-50">
      <button style={{ border: "1px solid red" }} onClick={handlePlay}>
        Reproducir Música
      </button>
      <button onClick={handleStop}>Detener Música</button>
      <button onClick={handleVolumeDown}>Bajar Volumen</button>
    </div>
  );
}

export default Mapa;
