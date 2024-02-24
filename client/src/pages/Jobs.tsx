import { BsFilter } from 'react-icons/bs';
import styled from 'styled-components';

// components
import JobCard from '../components/JobCard';
import Select from '../components/Select';

// extras
import { categoryOptions, dummy_jobs, sortOptions } from '../utils/constants';

type Props = {};

function Jobs({}: Props) {
  return (
    <Wrapper>
      <section className='filters'>
        <div className='filters__header'>
          <BsFilter />
          <p>Filter Jobs</p>
        </div>
        <div className='filters__content'>
          {/* job category filter */}
          <div className='filters__content-catgory'>
            <h3>Job Category</h3>
            <Select name='category' values={categoryOptions} />
          </div>
          {/* job type filter */}
          <div className='filters__content-type'>
            <h3>Job Type</h3>
            <div>
              <input type='checkbox' name='fullTime' id='fullTime' />
              <label htmlFor='fullTime'>Full Time</label>
            </div>
            <div>
              <input type='checkbox' name='partTime' id='partTime' />
              <label htmlFor='partTime'>Part Time</label>
            </div>
            <div>
              <input type='checkbox' name='remote' id='remote' />
              <label htmlFor='remote'>Remote</label>
            </div>
            <div>
              <input type='checkbox' name='freelance' id='freelance' />
              <label htmlFor='freelance'>Freelance</label>
            </div>
          </div>
        </div>
      </section>
      <section className='jobs'>
        <div className='jobs__header'>
          <p>39, 782 Jobs found</p>
          <div className='jobs__sort'>
            <div className='jobs__sort-text'>
              <h6>Sort by</h6>
            </div>
            <Select name='sort' values={sortOptions} />
          </div>
        </div>
        <div className='jobs__content'>
          {dummy_jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </Wrapper>
  );
}

export default Jobs;

const Wrapper = styled.div`
  margin-top: 4rem;
  max-width: 1320px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  .filters {
    margin-bottom: 2rem;
  }
  .filters__header {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    margin-bottom: 2rem;
    svg {
      width: 35px;
      height: 35px;
      color: var(--green);
    }
    p {
      font-size: 1.5rem;
      letter-spacing: var(--letter-spacing);
    }
  }
  .filters__content {
    border: 1px solid var(--grey-200);
    padding: 1.25rem;
    border-radius: var(--border-radius);
    background-color: var(--white);
  }
  .filters__content-catgory {
    margin-bottom: 1.5rem;
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
  .filters__content-type {
    h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    input {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
      cursor: pointer;
    }
    label {
      font-size: 1.25rem;
      letter-spacing: var(--letter-spacing);
    }
  }
  .jobs__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .jobs__sort {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
  }
  .jobs__sort-text {
    width: 80px;
    h6 {
      font-size: 0.9rem;
      font-weight: 600;
    }
  }
  .jobs__content {
    background-color: var(--white);
    padding: 1.25rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--grey-200);
  }
  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
    column-gap: 2rem;
  }
`;
