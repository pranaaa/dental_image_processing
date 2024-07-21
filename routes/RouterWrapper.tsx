import React from 'react';
import { useGlobalState } from '../context/GlobalState';

const RouterWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { image, predictions } = useGlobalState();

  return React.cloneElement(children as React.ReactElement, { image, predictions });
};

export default RouterWrapper;
export {};