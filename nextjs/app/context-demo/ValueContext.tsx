'use client';

import { createContext, useContext, useState } from 'react';

interface ValueContextType {
  value: string;
  setValue: (v: string) => void;
}

const ValueContext = createContext<ValueContextType | null>(null);

export function ValueProvider({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState('');
  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
}

export function useValue(): ValueContextType {
  const ctx = useContext(ValueContext);
  if (!ctx) throw new Error('useValue must be used within a ValueProvider');
  return ctx;
}
