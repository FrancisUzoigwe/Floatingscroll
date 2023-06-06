import React from 'react'
import styled from 'styled-components';

const Nation = () => {
  return (
    <div id='nation'>
     <Container>I'm a Nigerian By Birth</Container>
    </div>
  )
}

export default Nation

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background: aqua;
font-weight: 900;
font-size: 30px;
`;