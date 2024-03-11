import { Link } from 'react-router-dom';
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaRegHeart,
} from 'react-icons/fa';
import styled from 'styled-components';

// extras
import { Job } from '../utils/types';

type Props = {
  job: Job;
};

function JobCard({ job }: Props) {
  const { _id, jobTitle, location, companyName, jobNature, salary } = job;
  return (
    <Wrapper to={`/jobs/${_id}`}>
      <FaBriefcase className='job-icon' />
      <div className='job__content'>
        <h3 className='job__content-title'>{jobTitle}</h3>
        <div className='job__content__info'>
          <div className='job__content__info-item'>
            <FaBriefcase />
            <p>{companyName}</p>
          </div>
          <div className='job__content__info-item'>
            <FaMapMarkerAlt />
            <p>{location}</p>
          </div>
          <div className='job__content__info-item'>
            <FaMoneyBillWave />
            <p>${salary}</p>
          </div>
        </div>
        <div className='job__content__info-extra'>
          <p>{jobNature}</p>
          <p>Private</p>
          <p>Urgent</p>
        </div>
      </div>
      <FaRegHeart className='job__favourite-btn' />
    </Wrapper>
  );
}

export default JobCard;

const Wrapper = styled(Link)`
  display: flex;
  column-gap: 2rem;
  border: 1px solid var(--grey-200);
  border-radius: 15px;
  padding: 2rem;
  .job-icon {
    width: 50px;
    height: 50px;
  }
  .job__content {
    text-align: start;
    width: 100%;
  }
  .job__content-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  .job__content__info {
    display: flex;
    align-items: center;
    column-gap: 2rem;
  }
  .job__content__info-item {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    margin-bottom: 1rem;
  }
  .job__content__info-extra {
    display: flex;
    align-items: center;
    column-gap: 2rem;
    p {
      border: 1px solid var(--grey-100);
      padding: 0.5rem 1rem;
      border-radius: 30px;
      font-size: 0.85rem;
      text-transform: capitalize;
    }
  }
  .job__favourite-btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
