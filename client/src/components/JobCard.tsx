import { Link } from 'react-router-dom';
import {
  MdOutlineLocationOn,
  MdOutlineWorkOutline,
  MdAttachMoney,
  MdFavoriteBorder,
} from 'react-icons/md';
import styled from 'styled-components';

// extras
import { currencyNumberFormat } from '../utils/helpers';
import { JobType } from '../utils/types';

type Props = {
  job: JobType;
};

function JobCard({ job }: Props) {
  const { _id, jobTitle, location, companyName, jobNature, salary } = job;
  return (
    <Wrapper to={`/jobs/${_id}`}>
      <MdOutlineWorkOutline className='job-icon' />
      <div className='job__content'>
        <h3 className='job__content-title'>{jobTitle}</h3>
        <div className='job__content__info'>
          <div className='job__content__info-item'>
            <MdOutlineWorkOutline />
            <p>{companyName}</p>
          </div>
          <div className='job__content__info-item'>
            <MdOutlineLocationOn />
            <p>{location}</p>
          </div>
          <div className='job__content__info-item'>
            <MdAttachMoney />
            <p>{currencyNumberFormat(salary)}</p>
          </div>
        </div>
        <div className='job__content__info-extra'>
          <p>{jobNature}</p>
          <p>Private</p>
          <p>Urgent</p>
        </div>
      </div>
      <MdFavoriteBorder className='job__favourite-btn' />
    </Wrapper>
  );
}

export default JobCard;

const Wrapper = styled(Link)`
  display: flex;
  column-gap: 2rem;
  border: 1px solid var(--grey-200);
  border-radius: var(--border-radius-2);
  padding: 2rem;
  &:hover {
    box-shadow: 0px 5px 15px rgba(198, 54, 255, 0.1);
    transition: var(--transition);
  }
  .job-icon {
    width: 60px;
    height: 60px;
    padding: 0.5rem;
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius-2);
  }
  .job__content {
    text-align: start;
    width: 100%;
  }
  .job__content-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  .job__content__info {
    display: flex;
    align-items: center;
    column-gap: 3rem;
  }
  .job__content__info-item {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    margin-bottom: 1rem;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  .job__content__info-extra {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    p {
      border: 1px solid var(--grey-100);
      padding: 0.5rem 1rem;
      border-radius: 30px;
      font-size: 0.75rem;
      text-transform: capitalize;
    }
  }
  .job__favourite-btn {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;
