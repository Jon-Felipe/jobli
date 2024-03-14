import { BsFilter } from 'react-icons/bs';
import styled from 'styled-components';
import { useGetAllJobsQuery } from '../slices/jobsApiSlice';

// components
import JobCard from '../components/JobCard';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Spinner from '../components/Spinner';

// extras
import { categoryOptions, sortOptions } from '../utils/constants';
import { Job } from '../utils/types';

type Props = {};

function Jobs({}: Props) {
  const { data, isLoading } = useGetAllJobsQuery({});

  return (
    <Wrapper>
      {/* job filters */}
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
            <Checkbox label='Full Time' name='fullTime' />
            <Checkbox label='Part Time' name='partTime' />
            <Checkbox name='remote' />
            <Checkbox name='freelance' />
          </div>
        </div>
      </section>
      {/* jobs */}
      <section className='jobs'>
        <div className='jobs__header'>
          <p>{data?.totalJobs || 0} Jobs found</p>
          <div className='jobs__sort'>
            <div className='jobs__sort-text'>
              <h6>Sort by</h6>
            </div>
            <Select name='sort' values={sortOptions} />
          </div>
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='jobs__content'>
            {data?.jobs?.map((job: Job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
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
      margin-bottom: 1.25rem;
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
    display: grid;
    row-gap: 1rem;
    padding: 1.25rem;
    border-radius: var(--border-radius);
    border: 1px solid var(--grey-200);
    background-color: var(--white);
  }
  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
    column-gap: 2rem;
  }
`;
