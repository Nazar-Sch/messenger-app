import React from 'react';
import styled from 'styled-components'

import Chats from '../Chats'
import Messages from '../Messages';

function App() {
  const AppWrapper = styled.div`
    display: flex;
    max-width: 1440px;
    width: 100%;
    max-height: 100vh;
    margin: auto;
    font-family: 'PT Sans', sans-serif;
  `;

  return (
    <AppWrapper>
      <Chats />
      <Messages />
    </AppWrapper>
  );
}

export default App;
