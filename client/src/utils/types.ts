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

export type Job = {
  id: number;
  title: string;
  jobDescription: string;
  location: string;
  jobNature: JobNature;
  company: string;
};
