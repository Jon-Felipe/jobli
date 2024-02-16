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
    text: 'The automated process starts as soon as your clothes go into',
  },
  {
    id: 2,
    icon: BsCodeSlash,
    title: 'Finance',
    text: 'The automated process starts as soon as your clothes go into',
  },
  {
    id: 3,
    icon: BsDropbox,
    title: 'Marketing',
    text: 'The automated process starts as soon as your clothes go into',
  },
  {
    id: 4,
    icon: BsMegaphone,
    title: 'Health/Medical',
    text: 'The automated process starts as soon as your clothes go into',
  },
  {
    id: 5,
    icon: BsBarChartLine,
    title: 'Corporate',
    text: 'The automated process starts as soon as your clothes go into',
  },
  {
    id: 6,
    icon: BsFileEarmarkText,
    title: 'Copywriting',
    text: 'The automated process starts as soon as your clothes go into',
  },
];
