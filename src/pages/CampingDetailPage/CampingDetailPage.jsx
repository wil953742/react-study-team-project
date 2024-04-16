import React from 'react'
import "./CampingDetailPage.style.css";
import { useCampingDetailQuery } from "../../hooks/useCampingDetail";
import { useParams } from 'react-router-dom';

const CampingDetailPage = () => {

  const { contentId } = useParams();
  const { data, isLoading, isError, error } = useCampingDetailQuery(contentId);

  console.log("Data", data)

  if (isLoading) {
    return (
      <div>Loading</div>
    );
  }
  if (isError) {
    return <div>{error.message}</div>;
  }
  return (
    <div className='detailpage'>
      DetailPage
    </div>
  )
}

export default CampingDetailPage;
