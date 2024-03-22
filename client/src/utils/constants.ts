import {
  JobCategoryCardType,
  ServiceOfferType,
  SelectOptionType,
} from './types';
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

export const jobCategories: JobCategoryCardType[] = [
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

export const services: ServiceOfferType[] = [
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
    title: 'Search Expert Talent',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];

export const sortOptions: SelectOptionType[] = [
  {
    id: 1,
    value: 'newest',
  },
  {
    id: 2,
    value: 'oldest',
  },
  {
    id: 3,
    value: 'a-z',
  },
  {
    id: 4,
    value: 'z-a',
  },
];

export const limitOptions: SelectOptionType[] = [
  {
    id: 1,
    value: 10,
  },
  {
    id: 2,
    value: 20,
  },
  {
    id: 3,
    value: 30,
  },
];

export const categoryOptions: SelectOptionType[] = [
  {
    id: 1,
    value: 'all',
  },
  {
    id: 2,
    value: 'development',
  },
  {
    id: 3,
    value: 'design',
  },
  {
    id: 4,
    value: 'finance',
  },
];
