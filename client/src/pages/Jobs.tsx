import { BsFilter } from 'react-icons/bs';
import styled from 'styled-components';

// components
import JobCard from '../components/JobCard';
import Select from '../components/Select';

// extras
import { dummy_jobs } from '../utils/constants';

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
          <Select />
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
            <p>Sort by</p>
            <select name='sort' id='sort'>
              <option value='newest'>Newest</option>
              <option value='oldest'>Oldest</option>
              <option value='a-z'>A-Z</option>
              <option value='z-a'>Z-A</option>
            </select>
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
      width: 30px;
      height: 30px;
      color: var(--green);
    }
    p {
      font-size: 1.25rem;
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
    select {
      width: 100%;
      padding: 0.5rem 1rem;
      border: 1px solid var(--grey-200);
      cursor: pointer;
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
    select {
      padding: 0.25rem 0.75rem;
      border: 1px solid var(--grey-200);
      border-radius: var(--border-radius);
      cursor: pointer;
    }
  }
  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
    column-gap: 2rem;
  }
`;
