import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMG_URL } from "../components/url";
import { useQuery } from "@tanstack/react-query";
import { getBeachM } from "../api";
import styled from "styled-components";
const ConWarp = styled.div``;
const Con = styled.div``;
const Bg = styled.div``;
const Item = styled.div``;

export const Minislide = () => {
  const params = {
    slidesPerView: 5.2,
    spaceBetween: 20,
    breakpoints: {
      450: {
        slidesPerView: 3.1,
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
                          <p>{`${data.sta_nm}해수욕장`}</p>
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
