import styled from "styled-components";

import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { Loading } from "./Loading";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const ConWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Con = styled.div`
  text-align: center;
  width: 20%;
`;

export const Weather = ({ lat, lon }) => {
  const data = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  const getweatherdata = data?.data;
  console.log(data?.data?.weather[0].description);
  return (
    <>
      {getweatherdata === undefined ? (
        <Loading />
      ) : (
        <Container>
          <ConWrap>
            <Con>
              <h3>날씨</h3>
              <p>{getweatherdata?.weather[0].description}</p>
            </Con>
            <Con>
              <h3>체감 온도</h3>
              <p>{Math.round(Number(getweatherdata?.main?.feels_like))}°</p>
            </Con>
            <Con>
              <h3>최고 온도</h3>
              <p>{Math.round(Number(getweatherdata?.main?.temp_max))}°</p>
            </Con>
            <Con>
              <h3>최저 온도</h3>
              <p>{Math.round(Number(getweatherdata?.main?.temp_min))}°</p>
            </Con>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
