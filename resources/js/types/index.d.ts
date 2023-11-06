export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
}

export type PageProps<
  T extends Record<string, unknown> = Record<string, unknown>
> = T & {
  auth: {
    user: User;
  };
};

export type Company = {
  id: string;
  name: string;
};

export type CompanyReturnType = {
  id: string;
  name: string;
  jobs: Job[];
};

export type Job = {
  id: string;
  role: string;
  min_salary: number;
  max_salary: number;
  location: string;
  descriptions: string;
  remote: boolean;
  company_id: string;
};

type JobReturnedType = {
  id: string;
  role: string;
  min_salary: number;
  max_salary: number;
  location: string;
  descriptions: string;
  remote: boolean;
  company: {
    id: number | string;
    name: string;
  };
};
