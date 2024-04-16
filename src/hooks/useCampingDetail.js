import { useQuery } from "@tanstack/react-query";
import apiGocamping from "../utils/apiGocamping";

const API_KEY = process.env.REACT_APP_KEY_ENCODING_SA;
const PARAMS = process.env.REACT_APP_PARAMS_DEFAULT;

const fetchCampingDetail = (contentId) => {
  return apiGocamping.get(
    `basedList?serviceKey=${API_KEY}&${PARAMS}&pageNo=1&numOfRows=20/`
  );
};

export const useCampingDetailQuery = (contentId) => {
  return useQuery({
    queryKey: ["camping_detail", contentId],
    queryFn: () => fetchCampingDetail(contentId),
    select: (result) => result.data.response.body.items
  });
};
