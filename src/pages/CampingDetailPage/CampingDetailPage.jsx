import React from "react";
import "./CampingDetailPage.style.css";
import { useCampingKeywordQuery} from "../../hooks/useCampingDetail";
import { useSearchParams } from "react-router-dom";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

const CampingDetailPage = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  const { data = [], isLoading } = useCampingKeywordQuery(keyword);
  const campingDetail = data[0];

  if(isLoading) {
    return (<div className="loading_wrap"><CircularProgress /></div>)
  }

  return (
    <div className="camping-detail-main">
      {campingDetail ?
        <div>
          <Grid container spacing={2}>
            <Grid xs={12} md={4}>
              <div
                style={{
                  backgroundImage: "url(" + `${campingDetail.firstImageUrl}` + ")",
                }}
                className="img"
              ></div>
            </Grid>
            <Grid xs={12} md={8}>
              <div>주소 : {campingDetail.facltNm}</div>
              <div>문의처 : {campingDetail.tel}</div>
              <div>한줄 설명 : {campingDetail.lineIntro}</div>
              <div>소개 : {campingDetail.intro}</div>
              <div>예약방법 : {campingDetail.resveCl}</div>
              <div>운영기간 : {campingDetail.operPdCl} </div>
              <div>운영일 : {campingDetail.operDeCl}</div>
              <div>화장실 갯수 : {campingDetail.toiletCo}</div>
              <div>샤워실 갯수 : {campingDetail.swrmCo}</div>
              <div>개수대 갯수 : {campingDetail.wtrplCo}</div>
              <div></div>

              <div>
                <h1>{campingDetail.addr1}</h1>
              </div>
            </Grid>
          </Grid>
        </div> : <div>존재하지 않는 캠핑장입니다.</div>}
    </div>
  );
};

export default CampingDetailPage;
