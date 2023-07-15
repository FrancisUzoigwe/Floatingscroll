import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";
import {Link} from "react-scroll"

const Name = () => {
  return (
    <div id="header">
      <Container>
        <Real>My Name is Francis Kossyrisochukwu Uzoigwe (Therapist)</Real>
        <Main id="header" to="header" duration={600} smooth={true}>
          <Icon />
        </Main>
      </Container>
    </div>
  );
};

export default Name;
const Icon = styled(AiOutlineArrowUp)`
  font-size: 30px;
  font-weight: 900;
  color: black;
`;

const Main = styled(Link)`
  width: 50px;
  height: 50px;
  background: green;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1250px;
  margin-bottom: -500px;
  position: fixed;
  color: white;
  background-color: orange;
  transition: all 450ms;

  :hover {
    background-color: grey;
    cursor: pointer;
    transform: translate(0px, -15px);
  }
`;

const Real = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: aqua;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 30px;
  flex-direction: column;
`;
