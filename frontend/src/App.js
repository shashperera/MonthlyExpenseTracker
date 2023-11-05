import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/layout'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'
function App() {
  return (
    <AppStyled bg={bg} className="App">
      <Orb />
      <MainLayout>
        <h1>Hi</h1>
        <Navigation />
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;

`;

export default App;
