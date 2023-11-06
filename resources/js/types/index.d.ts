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
