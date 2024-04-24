import { Link } from "react-router-dom";
import { IMG_URL } from "../components/url";
import styled from "styled-components";

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 10px;
  
  margin-bottom: ${(props) => props.$Up};
`;

const Cont = styled.div``;
const Con = styled.div``;
const Bg = styled.div`
  height: 180px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Item = styled.div`
  h3 {
    font-size: 14px;
    font-weight: 400;
    color: #1d1d1d;
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
`;
const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const Search = ({ searchdata, sido, up }) => {
  return (
    <>
      {sido ? <Text>"{sido}"의 검색 결과</Text> : ""}
      {searchdata && (
        <ConWrap $Up={up}>
          {searchdata.map((data) => (
            <Cont key={data.sta_nm}>
              <Link to={`detail/${data.sido_nm}/${data.num}`}>
                <Con>
                  <Bg>
                    <img src={IMG_URL[data.num - 1].url} alt="이미지" />
                  </Bg>
                  <Item>
                    <h3>{data.gugun_nm}</h3>
                    <p>{`${data.sta_nm}해수욕장`}</p>
                  </Item>
                </Con>
              </Link>
            </Cont>
          ))}
        </ConWrap>
      )}
    </>
  );
};
