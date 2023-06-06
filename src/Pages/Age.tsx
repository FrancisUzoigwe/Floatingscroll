import React from 'react'
import styled from 'styled-components';

const Age = () => {
  return (
    <div id='age'>
      <Container>I'm in my Late 10's</Container>
    </div>
  )
}

export default Age
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background: blue;
font-weight: 900;
font-size: 30px;
color: white;
`;