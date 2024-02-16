import { JobCategory } from './types';
import {
  BsBoxes,
  BsCodeSlash,
  BsDropbox,
  BsMegaphone,
  BsBarChartLine,
  BsFileEarmarkText,
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
