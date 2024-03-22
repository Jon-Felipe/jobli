import { IconType } from 'react-icons/lib';

export type JobCategoryCardType = {
  id: number;
  icon: IconType;
  title: string;
  text: string;
};

export type ServiceOfferType = {
  id: number;
  icon: IconType;
  title: string;
  text: string;
};

type JobNatureType = 'internship' | 'part-time' | 'full-time';

export type JobType = {
  _id: string;
  jobTitle: string;
  jobDescription: string;
  requiredSkills: Array<string>;
  experience: Array<string>;
  companyName: string;
  location: string;
  salary: number;
  jobNature: JobNatureType;
};

export type SelectOptionType = {
  id: number;
  value: string | number;
};

export type RegisterUserType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginUserType = {
  email: string;
  password: string;
};

export type UserPayloadType = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};

export type GetAllJobsReturnType = {
  totalJobs: number;
  jobs: Array<JobType>;
};

export type GetJobReturnType = {
  job: JobType;
};

export type GetAllJobsArgType = {
  limit: number;
  sort: string;
};

export type GetJobArgType = {
  id: string | undefined;
};
