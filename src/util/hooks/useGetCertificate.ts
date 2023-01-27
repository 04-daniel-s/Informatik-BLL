import { useQuery, useQueryClient } from "react-query";
import { getCertificate } from "../services/certificateService";

export const useGetCertificate = (certificateId?: number) => {
  const client = useQueryClient();
  const { data, isFetching } = useQuery(["useGetCertificates", certificateId], () => getCertificate(certificateId as number), {
    cacheTime: 1000 * 60 * 5,
    enabled: certificateId !== undefined,
    refetchOnWindowFocus: "always",
  });

  const invalidateCertificate = () => client.invalidateQueries({ predicate: (q) => q.queryKey[0] === "useGetCertificates" });

  return { certificate: data ?? null, invalidateCertificate, isFetching };
};
