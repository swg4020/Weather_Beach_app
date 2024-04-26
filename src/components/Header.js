import { Link } from "react-router-dom";
import styled from "styled-components";
import { TiWaves } from "react-icons/ti";
const SHeader = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  background-color: white;
`;

const Logo = styled.div`
font-size: 30px;
font-weight: 700;
svg{
  font-size: 30px;
  color: skyblue;
}
`;

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/"}>
        <Logo><TiWaves />SeaStory</Logo>
      </Link>
    </SHeader>
  );
};
