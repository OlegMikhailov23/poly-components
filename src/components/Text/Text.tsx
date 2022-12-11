import React from 'react';

type Rainbow = 'red' | 'green' | 'yellow' | 'blue' | 'orange' | 'indigo' | 'violet';

type AsProp<C extends React.ElementType = 'span'> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type TextProps = {
  color?: Rainbow | 'black';  
}

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>

type PolymprphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

export const Text = React.forwardRef(<C extends React.ElementType = 'span' >({ 
  as, 
  color,
  children,
  style,
  ...props 
}: Props<C, TextProps>, ref?: PolymprphicRef<C>) => {
  const Component = as || 'span';

  const internalStyles = color ? {style: {...style, color}} : {}

  return <Component { ...props } { ...internalStyles }>{children}</Component>
})
