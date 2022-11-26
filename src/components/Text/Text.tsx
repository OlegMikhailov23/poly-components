import React from 'react';

type Rainbow = 'red' | 'green' | 'yellow' | 'blue' | 'orange' | 'indigo' | 'violet';

type TextProps <C extends React.ElementType> = {
  as?: C;
  color?: Rainbow | 'black';  
}

type Props<C extends React.ElementType> = React.PropsWithChildren<
  TextProps<C>
> & Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>

export const Text = <C extends React.ElementType = 'span' >({ 
  as, 
  color,
  children,
  style,
  ...props 
}: Props<C>) => {
  const Component = as || 'span';

  const internalStyles = color ? {style: {...style, color}} : {}

  return <Component { ...props } { ...internalStyles }>{children}</Component>
}
