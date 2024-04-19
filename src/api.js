import axios from "axios";

const apiKey =
  "uzqzCV0OaR8IQR7UXErSXf++hcUKyQRCS2CT6q/LrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w==";

const instance = axios.create({
  baseURL: "https://apis.data.go.kr/1360000/BeachInfoservice/",
  params: {
    serviceKey: apiKey,
    dataType: `JSON`,
    beach_num: 1,
    base_date: 20240419,
    numOfRows: 1,
    pageNo: 1,
  },
});

export const getBeachW = () => {
  return instance.get(`getTideInfoBeach`).then((res) => res.data);
};

//https://apis.data.go.kr/1360000/BeachInfoservice/
// getTwBuoyBeach?serviceKey=uzqzCV0OaR8IQR7UXErSXf%252B%252BhcUKyQRCS2CT6q%252FLrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w%253D%253D
// &dataType=string&beach_num=1&searchTime=202404191621

// https://apis.data.go.kr/1360000/BeachInfoservice/getTideInfoBeach?serviceKey=uzqzCV0OaR8IQR7UXErSXf%2B%2BhcUKyQRCS2CT6q%2FLrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w%3D%3D&dataType=JSON&beach_num=1&base_date=20240419


// https://apis.data.go.kr/1360000/BeachInfoservice/getTideInfoBeach?serviceKey=uzqzCV0OaR8IQR7UXErSXf%2B%2BhcUKyQRCS2CT6q%2FLrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w%3D%3D&dataType=JSON&beach_num=1&base_date=20240419&numOfRows=1&pageNo=1

// https://apis.data.go.kr/1360000/BeachInfoservice/getTideInfoBeach?serviceKey=uzqzCV0OaR8IQR7UXErSXf%2B%2BhcUKyQRCS2CT6q%2FLrQdoMNHPHkm3UtU5godlE8EyQMoTu5sY1nkbJKMWOouO6w%3D%3D&numOfRows=1&pageNo=1&dataType=JSON&base_date=20240419&beach_num=1
