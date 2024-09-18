import { useState } from 'react';

function useBoolean(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const setTrue: () => void = () => setValue(true);
  const setFalse: () => void = () => setValue(false);

  return { value, setTrue, setFalse };
}

export default useBoolean;