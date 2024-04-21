import styled from "styled-components";
import { getWeather } from "./api";
import { useQuery } from "@tanstack/react-query";

const Container = styled.div``;
const ConWrap = styled.div``;
const Con = styled.div``;

export const Weather = ({ lat, lon }) => {

  const { weatherdata } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });
  return (
    <>
      {weatherdata === undefined ? (
        "d"
      ) : (
        <Container>

          <ConWrap>
            <Con>
              <h3>체감 온도</h3>
              <p>{Math.round(weatherdata?.main?.feels_like)}°</p>
            </Con>
            <Con>
              <h3>최고 온도</h3>
              <p>{Math.round(weatherdata?.main?.temp_max)}°</p>
            </Con>
            <Con>
              <h3>최저 온도</h3>
              <p>{Math.round(weatherdata?.main?.temp_min)}°</p>
            </Con>
          </ConWrap>
        </Container>
      )}
    </>
  );
};
