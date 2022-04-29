import React from 'react';
import GlobalStyle from './GlobalStyle';
import { Global } from '@emotion/react';

function App() {
  return (
    <>
      <Global styles={GlobalStyle} />
    </>
  );
}

export default App;
