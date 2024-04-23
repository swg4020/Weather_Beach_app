import styled from "styled-components";
import { IMG_URL } from "../../components/url";
import { Link } from "react-router-dom";

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
      <Link to={`detail/${data[0].sido_nm}/${data[0].num}`}>
        <Item>
          <Bg>
            <img src={IMG_URL[0].url} alt="이미지" />
          </Bg>
          <h2>{data[0]?.gugun_nm}</h2>
          <p>{data[0]?.sta_nm}</p>
        </Item>
      </Link>
      <Link to={`detail/${data[1].sido_nm}/${data[1].num}`}>
        <Item>
          <Bg>
            <img src={IMG_URL[3].url} alt="이미지" />
          </Bg>
          <h2>{data[1]?.gugun_nm}</h2>
          <p>{data[1]?.sta_nm}</p>
        </Item>
      </Link>
      <Link to={`detail/${data[2].sido_nm}/${data[2].num}`}>
        <Item>
          <Bg>
            <img src={IMG_URL[5].url} alt="이미지" />
          </Bg>
          <h2>{data[2]?.gugun_nm}</h2>
          <p>{data[2]?.sta_nm}</p>
        </Item>
      </Link>
      <Link to={`detail/${data[3].sido_nm}/${data[3].num}`}>
        <Item>
          <Bg>
            <img src={IMG_URL[2].url} alt="이미지" />
          </Bg>
          <h2>{data[3]?.gugun_nm}</h2>
          <p>{data[3]?.sta_nm}</p>
        </Item>
      </Link>
    </ItemWrap>
  );
};
