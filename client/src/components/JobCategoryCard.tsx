import styled from 'styled-components';

// extras
import { JobCategory } from '../utils/types';

type Props = {
  jobCategory: JobCategory;
};

const JobCategoryCard = ({ jobCategory }: Props) => {
  const { icon: Icon, title, text } = jobCategory;
  return (
    <Wrapper>
      <div className='job__icon'>
        <Icon />
      </div>
      <h3 className='job__title'>{title}</h3>
      <p className='job__text'>{text}</p>
      <button className='job__btn'>Browse Jobs</button>
    </Wrapper>
  );
};

export default JobCategoryCard;

const Wrapper = styled.article`
  padding: 2rem;
  border-radius: var(--border-radius);
  text-align: left;
  &:hover {
    box-shadow: 0px 15px 60px rgba(54, 127, 255, 0.1);
    transition: var(--transition);
  }
  .job__icon {
    width: 80px;
    height: 80px;
    background-color: var(--white);
    border-radius: 50px;
    display: inline-block;
    box-shadow: 0px 15px 60px rgba(54, 127, 255, 0.1);
    line-height: 80px;
    text-align: center;
    margin-bottom: 2rem;
    svg {
      vertical-align: middle;
      border-style: none;
      width: 35px;
      height: 35px;
      color: var(--green);
    }
  }
  .job__title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  .job__text {
    line-height: 30px;
    letter-spacing: var(--letter-spacing);
    color: var(--grey-500);
    margin-bottom: 1rem;
  }
  .job__btn {
    background-color: transparent;
    border: none;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1rem;
    color: var(--primary-500);
    cursor: pointer;
  }
`;
