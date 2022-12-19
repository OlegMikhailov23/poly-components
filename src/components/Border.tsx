import React from 'react';
import { Rainbow } from '../types/colors';
import { PolymorphicComponentPropsWithRef, PolymprphicRef, Props } from '../types/common';

type BorderProps = {
  color?: Rainbow | 'black';
  width?: number;
  variant?: 'solid' | 'dotted';
}

type BorderComponent = <C extends React.ElementType>(props: PolymorphicComponentPropsWithRef<C, BorderProps>) => React.ReactElement | null

export const Border: BorderComponent = React.forwardRef(<C extends React.ElementType = 'div'>({
  as,
  color = 'black',
  width = 1,
  children,
  variant='solid',
  style,
  ...props
}: Props<C, BorderProps>, ref?: PolymprphicRef<C>) => {
  const Component = as || 'div';

  const internalStyles = { style: { border: `${width}px ${variant} ${color}`, width: 'fit-content', padding: '1rem', ...style }}

  return (
    <Component ref={ref} {...props} {...internalStyles}>
      {children}
    </Component>
  );
});
