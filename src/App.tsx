import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/Homepage/index';

function App() {
  return (
    <div className="App">
      <AppContainer>
        <HomePage />
      </AppContainer>
    </div>
  );
}

export default App;


const AppContainer = styled.div`
${tw`
w-full
h-full
flex
flex-col
`}
`