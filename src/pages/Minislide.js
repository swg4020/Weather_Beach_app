import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../components/url";
import { useQuery } from "@tanstack/react-query";
import { getBeachM } from "../api";
import styled from "styled-components";
const ConWarp = styled.div`
  height: 150px;
  align-items: center;
  margin-bottom: 150px;
`;
const Con = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
`;
const Bg = styled.div`
  height: 100px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const Item = styled.div`
  width: 100%;
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

export const Minislide = () => {
  const params = {
    slidesPerView: 2.4,
    spaceBetween: 20,
    breakpoints: {
      450: {
        slidesPerView: 2.4,
        spaceBetween: 20,
      },
    },
  };
  const msido = "제주";
  const beachM = useQuery({
    queryKey: ["getOceansBeachInfo1", msido],
    queryFn: getBeachM,
  });
  const sData = beachM?.data?.getOceansBeachInfo?.item;
  return (
    <>
      {sData && (
        <ConWarp>
          {sData.length === 0 ? (
            "없어"
          ) : (
            <>
              <Swiper {...params}>
                {sData?.map((data) => (
                  <SwiperSlide key={data.sta_nm}>
                    <Link to={`detail/${data.sido_nm}/${data.num}`}>
                      <Con>
                        <Bg>
                          <img src={IMG_URL[data.num - 1].url} alt="이미지" />
                        </Bg>
                        <Item>
                          <h3>{data.gugun_nm}</h3>
                          <p>{`${data.sta_nm}해변`}</p>
                        </Item>
                      </Con>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </ConWarp>
      )}
    </>
  );
};
