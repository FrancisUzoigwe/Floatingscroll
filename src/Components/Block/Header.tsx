import styled from "styled-components";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div id="header">
      <Container>
        <Main>
          <Logo to="header" duration={600} smooth={true}>Francis Uzoigwe</Logo>
          <NavHolder>
            <Navs to="header" duration={700} smooth={true}>
              Name
            </Navs>
            <Navs to="age" duration={700} smooth={true}>
              Age
            </Navs>
            <Navs to="address" duration={700} smooth={true}>
              Address
            </Navs>
            <Navs to="phone" duration={700} smooth={true}>
              Phone
            </Navs>
            <Navs to="nation" duration={700} smooth={true}>
              Nation
            </Navs>
          </NavHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Header;

const Navs = styled(Link)`
  font-weight: 600;
  font-size: 17px;
  cursor: pointer;
  transition: all 450ms;

  :hover {
    color: blue;
  }
`;

const NavHolder = styled.div`
  width: 26%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 25px;
  font-weight: 600;
  transition: all 450ms;

  :hover {
    cursor: pointer;
    color: blue;
  }
`;

const Main = styled.div`
  width: 90%;
  height: 60px;
  background: white;
  justify-content: space-between;
  align-items: center;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;
