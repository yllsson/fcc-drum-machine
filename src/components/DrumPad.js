const DrumPad = ({ pad }) => {
  const playAudio = () => {
    // insert audio playing function here
  };

  console.log(pad.name);

  return (
    <button
      className='drum-pad'
      id={pad.key}
      onClick={() => {
        playAudio();
      }}
    >
      <h2>{pad.name}</h2>
      <audio src={pad.audio} className='clip' id={pad.name}></audio>
    </button>
  );
};

export default DrumPad;
