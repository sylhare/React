import React, { useState, useEffect, useMemo } from 'react';

interface ChildComponentProps {
  parentInput: string;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ parentInput }) => {
  const [childInput, setChildInput] = useState(parentInput);
  const memoInput = useMemo(() => parentInput, [parentInput]);

  useEffect(() => {
    setChildInput(parentInput);
  }, [parentInput]);

  return (
    <div>
      <p>UseState: {childInput}</p>
      <p>UseMemo: {memoInput}</p>
    </div>
  );
};

