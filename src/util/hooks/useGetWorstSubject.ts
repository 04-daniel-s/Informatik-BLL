import { useQuery, useQueryClient } from "react-query";
import { getBestSubject, getWorstSubject } from "../services/certificateService";

export const useGetWorstSubject = (certificateId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(["useGetWorstSubject", certificateId], () => getWorstSubject(certificateId as number), {
    cacheTime: 1000 * 60 * 5,
    enabled: certificateId !== undefined,
    refetchOnWindowFocus: "always",
  });

  const invalidateWorstSubject = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetWorstSubject" });

  return { worstSubject: data ?? null, invalidateWorstSubject, isFetching };
};
