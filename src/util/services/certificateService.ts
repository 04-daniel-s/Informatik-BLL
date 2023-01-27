import axios from "axios";
import { Certificate } from "../interfaces/StudentResponse";

export const getCertificate = (certificateId: number): Promise<Certificate> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
