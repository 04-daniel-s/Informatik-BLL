import axios from "axios";
import { useCookies } from "react-cookie";
import { useQuery, useQueryClient } from "react-query";
import { auth } from "../services/studentService";

export const useGetAuth = () => {
  const [cookies, setCookies, removeCookies] = useCookies(["user"]);
  const client = useQueryClient();

  const { data, refetch, isLoading } = useQuery("useGetAuth", () => auth(), {
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: "always",
    enabled: axios.defaults.headers.common["Authorization"] !== undefined,
    onError: () => {
      logout();
    },
  });

  const logout = () => {
    client.removeQueries("useGetAuth");
    delete axios.defaults.headers.common["Authorization"];
    removeCookies("user");
  };

  return { student: data ?? null, logout, refetchStudent: refetch, isUserLoading: isLoading };
};
