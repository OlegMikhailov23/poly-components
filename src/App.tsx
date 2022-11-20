import React from 'react';
import { Text } from './components/Text';

function App() {
  return (
    <div className="App">
      <Text as={'h1'}>Hello World</Text>
      <Text as={'h2'}>This is a h2 text</Text>
      <Text as={'button'}>This is a button text</Text>
    </div>
  );
}

export default App;
