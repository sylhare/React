import React, { useEffect, useMemo, useState } from 'react';


interface ChildComponentProps {
  parentInput: string;
  onReset: () => void;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ parentInput, onReset }) => {
  const [childInput, setChildInput] = useState(parentInput);
  const memoInput = useMemo(() => parentInput, [parentInput]);

  useEffect(() => {
    setChildInput(parentInput);
  }, [parentInput]);

  return (
    <div>
      <p>UseState: {childInput}</p>
      <p>UseMemo: {memoInput}</p>
      <button onClick={onReset}
              style={{
                marginTop: '10px',
                padding: '5px 15px',
                textAlign: 'center',
                border: '1px solid grey',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
      >
        Reset
      </button>
    </div>
  );
};

