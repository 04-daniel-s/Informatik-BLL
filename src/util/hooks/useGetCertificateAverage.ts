import { useQuery, useQueryClient } from "react-query";
import { getCertificateAverage } from "../services/certificateService";

export const useGetCertificateAverage = (certificateId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(["useGetCertificateAverage", certificateId], () => getCertificateAverage(certificateId as number), {
    cacheTime: 1000 * 60 * 5,
    enabled: certificateId !== undefined,
    refetchOnWindowFocus: "always",
  });

  const invalidateCertificateAverage = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetCertificateAverage" });

  return { certificateAverage: data ?? null, invalidateCertificateAverage, isFetching };
};
