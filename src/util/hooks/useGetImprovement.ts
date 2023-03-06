import { useQuery, useQueryClient } from "react-query";
import { getImprovement } from "../services/certificateService";

export const useGetImprovement = (certificateId?: number, comparisonId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(
    ["useGetImprovement", certificateId, comparisonId],
    () => getImprovement(certificateId as number, comparisonId as number),
    {
      cacheTime: 1000 * 60 * 5,
      enabled: comparisonId !== -1,
      refetchOnWindowFocus: "always",
    }
  );

  const invalidateImprovement = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetImprovement" });

  return { improvement: data ?? null, invalidateImprovement, isFetching };
};
