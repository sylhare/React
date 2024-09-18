import React, { useState } from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const [parentInput, setParentInput] = useState('');

  const resetInput = () => {
    setParentInput('');
  };

  return (
    <div>
      <h5>Parent Component</h5>
      <input
        value={parentInput}
        onChange={(e) => setParentInput(e.target.value)}
        placeholder="Type something..."
      />
      <div style={{ marginTop: '10px' }}>
        <ChildComponent parentInput={parentInput} onReset={resetInput}/>
      </div>
    </div>
  );
};