import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  max-width: 450px;
  width: 100%;
`;

const Logo = styled.div`
font-size: 30px;
font-weight: 700;
`;
const Homes = styled.div`
font-size: 19px;
font-weight: 600;
`;

export const Header = () => {
  return (
    <SHeader>
      <Link to={"/"}>
        <Logo>LOGO</Logo>
      </Link>
      <Link to={"/"}>
        <Homes>Home</Homes>
      </Link>
    </SHeader>
  );
};
