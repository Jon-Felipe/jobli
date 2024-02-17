import { Job, JobCategory, Service } from './types';
import {
  BsBoxes,
  BsCodeSlash,
  BsDropbox,
  BsMegaphone,
  BsBarChartLine,
  BsFileEarmarkText,
  BsPersonVcard,
  BsPeople,
  BsGraphUpArrow,
  BsAward,
} from 'react-icons/bs';

export const jobCategories: JobCategory[] = [
  {
    id: 1,
    icon: BsBoxes,
    title: 'Design & Creatives',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: BsCodeSlash,
    title: 'Finance',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: BsDropbox,
    title: 'Marketing',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    icon: BsMegaphone,
    title: 'Health/Medical',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 5,
    icon: BsBarChartLine,
    title: 'Corporate',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 6,
    icon: BsFileEarmarkText,
    title: 'Copywriting',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    icon: BsPersonVcard,
    title: 'Search Millions of Jobs',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 2,
    icon: BsPeople,
    title: 'Easy To Manage Jobs',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    icon: BsGraphUpArrow,
    title: 'Top Careers',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 4,
    icon: BsAward,
    title: 'Search Expert Candidates',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

export const dummy_jobs: Job[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
  {
    id: 3,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
  {
    id: 4,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
  {
    id: 5,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
  {
    id: 6,
    title: 'Frontend Developer',
    jobDescription:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab delectus impedit laboriosam, temporibus aut eius aliquid, incidunt ad, saepe praesentium deserunt veniam! Repellat fuga numquam in commodi, corporis accusamus explicabo libero quam tempore obcaecati! Facilis, placeat mollitia dolorem voluptatem quae, quo error ut rerum libero, asperiores voluptates repudiandae beatae quod!',
    location: 'Amsterdam, Netherlands',
    jobNature: 'full-time',
    company: 'Facebook',
  },
];
