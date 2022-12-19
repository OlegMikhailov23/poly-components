import React, { ReactNode, useRef } from 'react';
import { Border, Text } from './components';

const Emphasis = ({children} : {children: React.ReactText}) => {
  return <em style={{backgroundColor: 'yellow', color: 'black', fontSize: '5rem'}}>{children}</em>
}

function App() {
  const ref = useRef<HTMLAnchorElement>(null);
  const ref2 = useRef<HTMLHeadingElement>(null);

  return (
    <div className="App">
      <Text>This is a text node with no as</Text>
      <Text as={'h1'} color={'violet'} style={{ backgroundColor: 'red' }} ref={ref2}>Hello World</Text>
      <Text as={'h2'}>This is a h2 text</Text>
      <Text as={'a'} ref={ref} href={'http://google.com'} target="_blank">This is a anchor text</Text>
      <Text>This is a text node with no as</Text>
      <br/>

      <Text as={Emphasis}>This is Emphasis</Text>

      <Border as="div" color="blue" width={4} variant="solid">
        Hello World Div
      </Border>

      <Border as="blockquote" color="red" width={4} variant="solid">
        Hello World Div
      </Border>

      <Border as={'a'} href={'http://google.com'} color="red" width={4} variant="solid">
        Hello World Div
      </Border>
    </div>
  );
}

export default App;
