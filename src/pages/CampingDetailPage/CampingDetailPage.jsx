import React from "react";
import "./CampingDetailPage.style.css";
import { useCampingDetailQuery } from "../../hooks/useCampingDetail";
import { useParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import { useCampingImagelQuery } from "../../hooks/useCampingImage";

const CampingDetailPage = () => {
  const { contentId } = useParams();
  const { data, isLoading, isError, error } = useCampingDetailQuery(contentId);
  // const { data: campingImg } = useCampingImagelQuery(contentId);

  console.log("Data", data);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="camping-detail-main">
      {/* <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <div
            style={{
              backgroundImage: "url(" + `${data?.[0].firstImageUrl}` + ")",
            }}
            className="img"
          ></div>
        </Grid>
        <Grid xs={12} md={8}>
          <div>주소 : {data?.[0].facltNm}</div>
          <div>문의처 : {data?.[0].tel}</div>
          <div>한줄 설명 : {data?.[0].lineIntro}</div>
          <div>소개 : {data?.[0].intro}</div>
          <div>예약방법 : {data?.[0].resveCl}</div>
          <div>운영기간 : {data?.[0].operPdCl} </div>
          <div>운영일 : {data?.[0].operDeCl}</div>
          <div>화장실 갯수 : {data?.[0].toiletCo}</div>
          <div>샤워실 갯수 : {data?.[0].swrmCo}</div>
          <div>개수대 갯수 : {data?.[0].wtrplCo}</div>
          <div></div>

          <div>
            <h1>{data?.[0].addr1}</h1>
          </div>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default CampingDetailPage;
