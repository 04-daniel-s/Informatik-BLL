import axios from "axios";
import { Subject } from "../interfaces/StudentResponse";

export const createSubject = (certificateId: number): Promise<Subject> => {
  return new Promise((res, rej) => {
    axios
      .post("/api/subject/new", certificateId, {
        headers: { "Content-Type": "application/json" },
      })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const deleteSubject = (subjectId: number): Promise<Subject> => {
  return new Promise((res, rej) => {
    axios
      .delete(`/api/subject/${subjectId}`)
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
