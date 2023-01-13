export interface StudentResponse {
  name: string;
  username: string;
  certificates: Certificate[];
}

export interface Certificate {
  id: number;
  student: number;
  subjects: Subject[];
  name: string;
}

export interface Subject {
  id: number;
  certificate: number;
  name: string;
  grades: Grade[];
}

export interface Grade {
  id: number;
  subject: number;
  title: string;
  date: string;
  grade: number;
}
