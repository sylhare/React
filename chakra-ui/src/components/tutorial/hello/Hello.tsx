import React from 'react';
import { HelloProps } from './types';

export const Hello: React.FC<HelloProps> = ({ name }): React.JSX.Element => {
  return <div>Hello {name}</div>;
}