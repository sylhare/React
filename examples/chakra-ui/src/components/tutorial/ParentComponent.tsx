import React, { useState } from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const [parentInput, setParentInput] = useState('');

  return (
    <div>
      <input
        value={parentInput}
        onChange={(e) => setParentInput(e.target.value)}
        placeholder="Type something..."
      />
      <ChildComponent parentInput={parentInput}/>
    </div>
  );
};