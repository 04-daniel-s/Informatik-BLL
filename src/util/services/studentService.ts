import axios from "axios";
import { StudentResponse } from "../interfaces/StudentResponse";

export const login = (username: string, password: string): Promise<string> => {
  return new Promise((res, rej) => {
    axios
      .post("/api/login", { username, password })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const register = (name: string, username: string, password: string): Promise<string> => {
  return new Promise((res, rej) => {
    axios
      .post("/api/register", { name, username, password })
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};

export const auth = (): Promise<StudentResponse> => {
  return new Promise((res, rej) => {
    axios
      .get("/api/auth")
      .then((r) => res(r.data))
      .catch((e) => rej(e));
  });
};
