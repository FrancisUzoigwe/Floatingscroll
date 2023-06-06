import React from 'react'
import styled from 'styled-components';

const Phone = () => {
  return (
    <div id='phone'>
    <Container>I could be reached on +2347047474886 || +2348026439967<br />
    kossyuzoigwe@gmail.com</Container>
    </div>
  )
}

export default Phone
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background: orange;
font-weight: 900;
font-size: 30px;
color: white;
`;