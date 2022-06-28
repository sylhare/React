import React from 'react';

export default function NowYouSeeMe() {
  const [isVisible, setIsVisible] = React.useState(false);
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='App'>
      <div>
        <button onClick={handleClick}>Toggle Image</button>
      </div>

      <br />

      <div style={{ display: isVisible ? 'block' : 'none' }}>
        <p>Look at this pretty cat</p>
        <img src='https://cataas.com/cat' alt='random cat' />
      </div>
    </div>
  );
}
