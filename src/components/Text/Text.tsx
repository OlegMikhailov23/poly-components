import React, { FC } from 'react';
import { echo } from '../../utils/echo';

interface TextProps {
  as?: any;
  children: React.ReactNode;
}

export const Text: FC<TextProps> = ({ as, children }) => {
  const Component = as || 'span';
  return <Component>{children}</Component>
}