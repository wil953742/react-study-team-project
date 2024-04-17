import {useCampingDetailQuery} from "../../hooks/useCampingDetail";

export default function CampingPage() {
  const pageNo = 1;
  const { data } = useCampingDetailQuery(pageNo);

  return <ul style={{ marginTop: '150px' }}>
    {data && data.item.map((value) => <li><a href={`/campings/${value.contentId}?keyword=${value.facltNm}`}>{value.facltNm}</a></li>)}
  </ul>
}