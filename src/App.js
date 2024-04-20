import { useQuery } from "@tanstack/react-query";
import { getBeachI } from "./api";
import { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div``;
const Form = styled.form``;
const Button = styled.button``;
const ConWarp = styled.div``;

const Con = styled.div``;
const Bg = styled.div``;

function App() {
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

  const bData = beach?.data?.getOceansBeachInfo?.item;

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("search", {
            required: "내용을 입력해주세요.",
          })}
          type="text"
          placeholder="찾으시는 지역(해변) 있으신가요?"
        />
        <Button type="onSubmit">검색</Button>
      </Form>
      <div>{errors?.search?.message}</div>
      <h2>{sido}</h2>

      {bData && (
        <ConWarp>
          {bData.length === 0 ? (
            "없어"
          ) : (
            <>
              {bData?.map((data) => (
                <Con key={data.sta_nm}>
                  <Bg></Bg>
                  <h3>{data.gugun_nm}</h3>
                  <p>{`${data.sta_nm}해수욕장`}</p>
                  {data.beach_knd === null ? (
                    ""
                  ) : (
                    <p>{`해변 : ${data.beach_knd}`}</p>
                  )}
                </Con>
              ))}
            </>
          )}
        </ConWarp>
      )}
    </Container>
  );
}

export default App;
