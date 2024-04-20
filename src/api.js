import axios from "axios";

const apiKey =
  "uzqzCV0OaR8IQR7UXErSXf++hcUKyQRCS2CT6q/LrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w==";

// 해수욕장 정보
const instanc = axios.create({
  baseURL: "http://apis.data.go.kr/1192000/service/OceansBeachInfoService1/",
  params: {
    serviceKey: apiKey,
    pageNo: 1,
    numOfRows: 10,
    resultType: `JSON`,
  },
});

export const getBeachI = ({ queryKey }) => {
  const [getOceansBeachInfo1, sido] = queryKey;
  return instanc
    .get(`${getOceansBeachInfo1}?SIDO_NM=${sido}`)
    .then((res) => res.data);
};

const instance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: "0af75d82b0b88142962d8c05d18e665f",
    units: "metric",
    lang: "kr",
  },
});

export const getWeather = ({ queryKey }) => {
  // const lat = 35.10414541245795;
  // const lon = 129.08234252256935;
  const [weather, lat, lon] = queryKey;

  console.log(queryKey);
  return instance
    .get(`${weather}?lat=${lat}&lon=${lon}`)
    .then((res) => res.data);
};


