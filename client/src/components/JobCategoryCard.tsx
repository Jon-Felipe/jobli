import styled from 'styled-components';

// extras
import { JobCategoryCardType } from '../utils/types';

type Props = {
  jobCategory: JobCategoryCardType;
};

const JobCategoryCard = ({ jobCategory }: Props) => {
  const { icon: Icon, title, text } = jobCategory;
  return (
    <Wrapper>
      <div className='job-category__icon'>
        <Icon />
      </div>
      <h3 className='job-category__title'>{title}</h3>
      <p className='job-category__text'>{text}</p>
    </Wrapper>
  );
};

export default JobCategoryCard;

const Wrapper = styled.article`
  padding: 2rem;
  border: 1px solid var(--grey-200);
  border-radius: var(--border-radius);
  text-align: center;
  &:hover {
    box-shadow: 0px 15px 60px rgba(54, 127, 255, 0.1);
    transition: var(--transition);
  }
  .job-category__icon {
    width: 80px;
    height: 80px;
    background-color: var(--grey-50);
    border-radius: 50px;
    display: inline-block;
    box-shadow: 0px 15px 60px rgba(172, 53, 251, 0.122);
    line-height: 80px;
    text-align: center;
    margin-bottom: 2rem;
    svg {
      vertical-align: middle;
      border-style: none;
      width: 35px;
      height: 35px;
      color: var(--primary-300);
    }
  }
  .job-category__title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .job-category__text {
    line-height: 20px;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-400);
  }
`;
