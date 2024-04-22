import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { getBeachI } from "../api";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IMG_URL } from "../components/url";

const Container = styled.div`
  padding: 10px 30px 30px 30px;
  max-width: 450px;
  width: 100%;
`;
const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  input {
    all: unset;
    width: 80%;
    height: 35px;
    border-bottom: 1px solid #1d1d1d;
  }
`;
const Button = styled.button`
  width: 20%;
`;
const ConWarp = styled.div``;

const Con = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  border-radius: 15px;
`;

const Item = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 0.7) 53%,
    rgba(0, 0, 0, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 99;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  h3 {
    width: 50%;
    padding: 20px;
    font-size: 23px;
    color: white;
    text-align: center;
    
  }
  p {
    width: 50%;
    padding: 20px;
    font-size: 18px;
    color: white;
    text-align: center;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

function Home() {
  const [sido, setSido] = useState("인천");
  const beach = useQuery({
    queryKey: ["getOceansBeachInfo1", sido],
    queryFn: getBeachI,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { search: keyword } = data;
    setSido(keyword);
    reset();
  };

  console.log(beach);
  const bData = beach?.data?.getOceansBeachInfo?.item;

  const params = {
    slidesPerView: 5.2,
    spaceBetween: 20,
    breakpoints: {
      450: {
        slidesPerView: 1.1,
        spaceBetween: 20,
      },
    },
  };

  console.log(IMG_URL[0].url);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "지역을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 지역(해변) 있으신가요?"
        />
        <Button type="onSubmit">검색</Button>
      </Form>
      <div>{errors?.search?.message}</div>
      <Title>{sido}</Title>
      {bData && (
        <ConWarp>
          {bData.length === 0 ? (
            "없어"
          ) : (
            <>
              <Swiper {...params}>
                {bData?.map((data) => (
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
    </Container>
  );
}

export default Home;
