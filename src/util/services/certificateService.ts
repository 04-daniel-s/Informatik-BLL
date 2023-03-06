import axios from "axios";
import { Certificate } from "../interfaces/StudentResponse";
import { SubjectAverageResponse } from "../interfaces/SubjectAverageResponse";

export const createCertificate = (certificateName: string): Promise<Certificate> => {
  return new Promise((res, rej) => {
    axios
      .post(`/api/certificate/new`, { certificateName })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

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

export const getOrderedSubjects = (certificateId: number): Promise<SubjectAverageResponse[]> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}/orderedSubjects`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const getCertificateAverage = (certificateId: number): Promise<number> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}/average`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const getImprovement = (certificateId: number, comparisonId: number): Promise<number> => {
  return new Promise((res, rej) => {
    axios
      .get(`/api/certificate/${certificateId}/compare?id=${comparisonId}`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const deleteCertificateList = (certificateIdList: number[]): Promise<String> => {
  return new Promise((res, rej) => {
    axios
      .delete(`/api/certificate/deleteList?ids=${certificateIdList.join(",")}`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const editCertificateName = (certificateId: number, name: string): Promise<Certificate> => {
  return new Promise((res, rej) => {
    axios
      .put(`/api/certificate/edit/${certificateId}`, { name })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
