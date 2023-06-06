import React from 'react'
import styled from 'styled-components';

const Address = () => {
  return (
    <div id='address'>
     <Container>I reside at the Western part of Nigeria</Container>
    </div>
  )
}

export default Address
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
width: 100%;
height: 100vh;
background: #0cd50c;
font-weight: 900;
font-size: 30px;
`;