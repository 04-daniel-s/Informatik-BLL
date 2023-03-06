import { useQuery, useQueryClient } from "react-query";
import { getBestSubject, getOrderedSubjects } from "../services/certificateService";

export const useGetOrderedSubjects = (certificateId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(["useGetOrderedSubjects", certificateId], () => getOrderedSubjects(certificateId as number), {
    cacheTime: 1000 * 60 * 5,
    enabled: certificateId !== undefined,
    refetchOnWindowFocus: "always",
  });

  const invalidateOrderedSubjects = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetOrderedSubjects" });

  return { orderedSubjects: data ?? null, invalidateOrderedSubjects, isFetching };
};
