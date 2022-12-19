import React from 'react';
import { Rainbow } from '../types/colors';

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProps<C extends React.ElementType, Props = {}> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>

type TextProps = {
  color?: Rainbow | 'black';  
}

type PolymprphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>

type PolymorphicComponentPropsWithRef<C extends React.ElementType, P> = PolymorphicComponentProps<C, P> & {ref?: PolymprphicRef<C>};

type TextComponent = <C extends React.ElementType>(props: PolymorphicComponentPropsWithRef<C, TextProps>) => React.ReactElement | null

export const Text: TextComponent = React.forwardRef(<C extends React.ElementType = 'span' >({ 
  as, 
  color,
  children,
  style,
  ...props 
}: Props<C, TextProps>, ref?: PolymprphicRef<C>) => {
  const Component = as || 'span';

  const internalStyles = color ? {style: {...style, color}} : {}

  return <Component {...props} {...internalStyles} ref={ref}>{children}</Component>
})
