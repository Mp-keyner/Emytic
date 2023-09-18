import { useState } from "react";
import useSound from "use-sound";

const Playo = ({ setVolumen, volumen }) => {
  const fanfareSfx =
    "https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113";
  const [play, { stop }] = useSound(fanfareSfx, { volume: 0.25 });

  const Music = () => {
    setVolumen(!volumen);
  };
  volumen ? stop() : play();
  return (
    <div className="fixed blu p-[0pc 1pc] text-[2.5pc] z-50 no-select right-0 top-0">
      <p onClick={Music} title={volumen ? "Stop" : "Play"}>
        {volumen ? "🔇" : "🔊"}
      </p>
    </div>
  );
};

export default Playo;
