import axios from "axios";
import { Certificate } from "../interfaces/StudentResponse";
import { SubjectAverageResponse } from "../interfaces/SubjectAverageResponse";

export const getCertificate = (certificateId: number): Promise<Certificate> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const getWorstSubject = (certificateId: number): Promise<SubjectAverageResponse> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}/worstSubject`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const getBestSubject = (certificateId: number): Promise<SubjectAverageResponse> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}/bestSubject`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
