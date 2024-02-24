import styled from 'styled-components';
import { BsHeart } from 'react-icons/bs';

// extras
import { Job } from '../utils/types';

type Props = {
  job: Job;
};

function JobCard({ job }: Props) {
  const { title, location, company, jobNature } = job;
  return (
    <Wrapper>
      <div className='job__content'>
        <header className='job__header'>
          <h3 className='job__header-title'>{title}</h3>
          <p className='job__header-nature'>{jobNature}</p>
        </header>
        <div className='job__info'>
          <p>{company}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className='job__btns'>
        <button className='job__btns-favourite'>
          <BsHeart />
        </button>
        <button className='btn'>View Job</button>
      </div>
    </Wrapper>
  );
}

export default JobCard;

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid var(--red-light);
  margin: 0 auto 1rem;
  padding: 0 0 1rem;
  text-align: left;
  .job__content {
    margin-bottom: 1rem;
  }
  .job__header {
    display: flex;
    align-items: end;
    column-gap: 1rem;
    margin-bottom: 1rem;
  }
  .job__header-title {
    font-size: 2rem;
  }
  .job__header-nature {
    border: 1px solid var(--grey-200);
    padding: 5px 10px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
  .job__info {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    p {
      color: var(--grey-500);
      font-size: 1.15rem;
    }
  }
  .job__btns {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .job__btns-favourite {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    height: 50px;
    width: 50px;
    border-radius: 50px;
    cursor: pointer;
    svg {
      color: var(--red-dark);
      height: 20px;
      width: 20px;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;
