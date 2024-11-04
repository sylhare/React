import React from 'react';
import { GenericProps } from '@_components/tutorial/hello/types';

export const Example = (): React.JSX.Element => {
  return <></>;
};

export const Other = (): React.JSX.Element => {
  return <></>;
};

export enum Strategy {
  EXAMPLE = 'example',
  OTHER = 'other',
}

export type StrategyType = {
  [key in Strategy]: {
    label: string;
    component: React.JSX.Element;
    onAction: () => void;
  };
};

export const strategyProps: StrategyType = {
  [Strategy.EXAMPLE]: {
    label: 'example',
    component: <Example/>,
    onAction: () => console.log('Example'),
  },
  [Strategy.OTHER]: {
    label: 'other',
    component: <Other/>,
    onAction: () => console.log('Other'),
  },
};

export const Generic: React.FC<GenericProps> = ({ strategy }) => {
  const { label, component, onAction } = strategyProps[strategy];

  return (
    <>
      {component}
      <button onClick={onAction}>{label}</button>
    </>
  );
};