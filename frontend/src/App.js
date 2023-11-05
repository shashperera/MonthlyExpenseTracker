import React, { useState, useMemo } from 'react'
import styled from "styled-components";
import bg from './img/bg.png'
import { MainLayout } from './styles/layout'
import Orb from './Components/Orb/Orb'
import Navigation from './Components/Navigation/Navigation'


function App() {

  const [active, setActive] = useState(1);//id starts from 1

  //useMemo hook to keep that in memory without re-rendering
  const orbMemo = useMemo(() => {
    return <Orb/>

  },[])

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <h1>Hi</h1>
        <Navigation active={active} setActive={setActive}/>
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
