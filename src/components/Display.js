const Display = ({ displayText }) => {
  return (
    <div className='display' id='display'>
      <h2 className='visible' id='message'>
        {displayText}
      </h2>
    </div>
  );
};

export default Display;
