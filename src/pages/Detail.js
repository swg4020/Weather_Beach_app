import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getBeachI } from "../api";
import { Weather } from "../components/Weather";
import styled from "styled-components";

const Con = styled.div``;
const Bg = styled.div``;

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
    <Con>
      <Bg></Bg>
      <h3>{bData.gugun_nm}</h3>
      <p>{`${bData.sta_nm}해수욕장`}</p>
      {bData.beach_knd === null ? "" : <p>{`해변 : ${bData.beach_knd}`}</p>}
      <Weather lat={bData.lat} lon={bData.lon} />
    </Con>
  );
};
