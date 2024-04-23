import styled from "styled-components";
import { IMG_URL } from "../../components/url";

const ItemWrap = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Item = styled.div`
  width: 48%;
  height: 50%;
`;
const Bg = styled.div`
  width: 100%;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Items = ({ data }) => {
  console.log(data);
  return (
    <ItemWrap>
      <Item>
        <Bg>
          <img src={IMG_URL[0].url} alt="이미지" />
        </Bg>
        <h2>{data[1]?.gugun_nm}</h2>
        <p>{data[1]?.sta_nm}</p>
      </Item>
      <Item>
        <Bg>
          <img src={IMG_URL[3].url} alt="이미지" />
        </Bg>
        <h2>{data[3]?.gugun_nm}</h2>
        <p>{data[3]?.sta_nm}</p>
      </Item>
      <Item>
        <Bg>
          <img src={IMG_URL[5].url} alt="이미지" />
        </Bg>
        <h2>{data[5]?.gugun_nm}</h2>
        <p>{data[5]?.sta_nm}</p>
      </Item>
      <Item>
        <Bg>
          <img src={IMG_URL[2].url} alt="이미지" />
        </Bg>
        <h2>{data[2]?.gugun_nm}</h2>
        <p>{data[2]?.sta_nm}</p>
      </Item>
    </ItemWrap>
  );
};
