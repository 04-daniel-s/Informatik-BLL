import axios from "axios";

export const addGrade = (subjectId: number, classTest: boolean): Promise<string> => {
  return new Promise((res, rej) => {
    axios
      .post("/api/grade/new", { subjectId, classTest })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
