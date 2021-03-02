const DrumPad = ({ name }) => {
  const playAudio = () => {
    // insert audio playing function here
  };

  return (
    <button
      className='drum-pad'
      onClick={() => {
        playAudio();
      }}
    >
      <h2>{name}</h2>
      <audio src='#' className='clip' id={name}></audio>
    </button>
  );
};

export default DrumPad;
