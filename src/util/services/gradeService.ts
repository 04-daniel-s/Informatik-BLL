import axios from "axios";
import { Grade } from "../interfaces/StudentResponse";

export const addGrade = (subjectId: number, classTest: boolean): Promise<string> => {
  return new Promise((res, rej) => {
    axios
      .post("/api/grade/new", { subjectId, classTest })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const editGrade = (gradeId: number, title: string, date: string, grade: number): Promise<Grade> => {
  return new Promise((res, rej) => {
    axios
      .put(`/api/grade/edit/${gradeId}`, { title, date, grade })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
