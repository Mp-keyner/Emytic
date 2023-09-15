import React, { useState } from "react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audioElement = document.getElementById("music");

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="">
      <button onClick={toggleAudio}>
        {isPlaying ? "Pausar música" : "Reproducir música"}
      </button>
      <audio id="music" autoPlay controls>
        <source
          src="https://firebasestorage.googleapis.com/v0/b/fb-picporter.appspot.com/o/msu.mp3?alt=media&token=a854db54-bc91-4f4d-a10d-df17c7a45113" // Reemplaza con la URL de tu archivo de música
          type="audio/mpeg"
        />
        Tu navegador no admite la reproducción de audio.
      </audio>
    </div>
  );
};

export default MusicPlayer;
