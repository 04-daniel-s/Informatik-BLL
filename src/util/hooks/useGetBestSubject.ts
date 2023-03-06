import { useQuery, useQueryClient } from "react-query";
import { getBestSubject } from "../services/certificateService";

export const useGetBestSubject = (certificateId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(["useGetBestSubject", certificateId], () => getBestSubject(certificateId as number), {
    cacheTime: 1000 * 60 * 5,
    enabled: certificateId !== undefined,
    refetchOnWindowFocus: "always",
  });

  const invalidateBestSubject = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetBestSubject" });

  return { bestSubject: data ?? null, invalidateBestSubject, isFetching };
};
