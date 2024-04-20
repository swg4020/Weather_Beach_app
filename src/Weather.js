
import styled from "styled-components";


const Layout = styled.div``;
const Area = styled.div``;
const ItemWrap = styled.div``;
const Con = styled.div``;

export const Weather = ({ weatherData }) => {
  
  return (
    <Layout>
      <Area>
        <h1>{Math.round(weatherData?.main?.temp)}°</h1>
        <h1>{weatherData?.name}</h1>
      </Area>
      <ItemWrap>
        <Con>
          <h3>체감 온도</h3>
          <p>{Math.round(weatherData?.main?.feels_like)}°</p>
        </Con>
        <Con>
          <h3>최고 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_max)}°</p>
        </Con>
        <Con>
          <h3>최저 온도</h3>
          <p>{Math.round(weatherData?.main?.temp_min)}°</p>
        </Con>
      </ItemWrap>
    </Layout>
  );
};
