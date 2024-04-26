import { Link } from "react-router-dom";
import { TiWaves } from "react-icons/ti";
import styled from "styled-components";
const SFooter = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: white;
  margin: 0 auto;
  padding: 50px;
  text-align: center;
  p {
    font-size: 14px;
    font-weight: 400;
    color: #1d1d1d;
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 5px;
  }
`;

const Logo = styled.div`
  font-size: 25px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  svg {
    font-size: 30px;
    color: skyblue;
  }
`;

export const Footer = () => {
  return (
    <SFooter>
      <Link to={"/"}>
        <Logo>
          <TiWaves />
          SeaStory
        </Logo>
        <p>GitHub: https://github.com/swg4020</p>
      </Link>
    </SFooter>
  );
};
