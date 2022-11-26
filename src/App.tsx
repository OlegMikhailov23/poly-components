import React from 'react';
import { Text } from './components/Text';

const Emphasis = ({children} : {children: React.ReactText}) => {
  return <em style={{backgroundColor: 'yellow', color: 'black', fontSize: '5rem'}}>{children}</em>
}


function App() {
  return (
    <div className="App">
      <Text>This is a text node with no as</Text>
      <Text as={'h1'} color={'green'} style={{backgroundColor: '#000'}}>Hello World</Text>
      <Text as={'h2'}>This is a h2 text</Text>
      <Text as={'a'} href={'http://google.com'} target="_blank">This is a anchor text</Text>
      <Text>This is a text node with no as</Text>
      <br/>

      <Text as={Emphasis}>This is Emphasis</Text>
    </div>
  );
}

export default App;
