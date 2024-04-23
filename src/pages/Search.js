import { Link } from "react-router-dom";
import { IMG_URL } from "../components/url";
import styled from "styled-components";

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 30px;
  column-gap: 10px;
`;

const Cont =styled.div``;
const Con =styled.div``;
const Bg =styled.div``;
const Item =styled.div``;
const Text =styled.div``;

export const Search = ({ searchdata, sido }) => {
  return (
    <>
      {sido ? <Text>"{sido}"의 검색 결과</Text> : ""}
      {searchdata && (
        <ConWrap>
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
