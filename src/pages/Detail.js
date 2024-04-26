import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBeachI } from "../api";
import { Weather } from "../components/Weather";
import styled from "styled-components";
import { IMG_URL } from "../components/url";
import PageTop from "../components/PageTop";

const Con = styled.div`
  margin: 0 auto;
  max-width: 450px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: white;
  padding: 20px;
  h3 {
    font-size: 18px;
    font-weight: 400;
    color: #1d1d1d;
    opacity: 0.7;
    margin-top: 10px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 25px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    font-weight: 600;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
const Bg = styled.div`
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

export const Detail = () => {
  const { sido_nm, num } = useParams();
  console.log(sido_nm);
  console.log(num);
  const index = num - 1;
  const beach = useQuery({
    queryKey: ["getOceansBeachInfo1", sido_nm],
    queryFn: getBeachI,
  });
  const bData = beach?.data?.getOceansBeachInfo?.item[index];
  console.log(bData);

  return (
    <>
      <PageTop />
      {bData && (
        <Con>
          <Bg>
            <img src={IMG_URL[0].url} alt="이미지" />
          </Bg>
          <h3>{bData.gugun_nm}</h3>
          <h2>{`${bData.sta_nm}해수욕장`}</h2>
          {bData.beach_knd === null ? "" : <p>{`해변 : ${bData.beach_knd}`}</p>}
          <Weather lat={bData.lat} lon={bData.lon} />
        </Con>
      )}
    </>
  );
};
