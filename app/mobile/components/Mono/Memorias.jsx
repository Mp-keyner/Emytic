import React from "react";

const Memorias = () => {
    const url = 'https://sopa-six.vercel.app/Memorias.html'
  return (
    <div>
      <iframe
        title="Página Web"
        src={url}
        width="100%"
        height="500px"
        frameBorder="0"
        style={{
            width: '100%',
    height: '100vh',
    transform: 'scale(1)',
        }}
      />
    </div>
  );
};

export default Memorias;
