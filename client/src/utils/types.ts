import { IconType } from 'react-icons/lib';

export type JobCategory = {
  id: number;
  icon: IconType;
  title: string;
  text: string;
};

export type Service = {
  id: number;
  icon: IconType;
  title: string;
  text: string;
};

type JobNature = 'internship' | 'part-time' | 'full-time';

export type SelectOptions = {
  id: number;
  value: string | number;
};

export type Job = {
  _id: string;
  jobTitle: string;
  jobDescription: string;
  companyName: string;
  location: string;
  salary: number;
  jobNature: JobNature;
};

export type SortOptions = {
  id: number;
  value: string | number;
};

export type CategoryOptions = {
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

export type UserPayload = {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
};
