import { BsFilter } from 'react-icons/bs';
import styled from 'styled-components';
import { useGetAllJobsQuery } from '../slices/jobsApiSlice';

// components
import JobCard from '../components/JobCard';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Spinner from '../components/Spinner';

// extras
import {
  categoryOptions,
  jobCategories,
  sortOptions,
} from '../utils/constants';
import { Job } from '../utils/types';
import FormRowInput from '../components/FormRowInput';

type Props = {};

function Jobs({}: Props) {
  const { data, isLoading } = useGetAllJobsQuery({});

  return (
    <Wrapper>
      {/* filters */}
      <div className='filters'>
        <FormRowInput
          type='text'
          label='Search by Keywords'
          name='search'
          value=''
          onChange={() => console.log('search')}
          placeholder='Job tile, keywords, or company'
        />
        <FormRowInput
          type='text'
          label='Location'
          name='city'
          value=''
          onChange={() => console.log('city')}
          placeholder='City or postcode'
        />
        <Select label='Category' name='jobType' values={jobCategories} />
      </div>
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
    display: none;
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
  }
  @media (min-width: 1024px) {
    grid-template-columns: 350px 1fr;
    column-gap: 2rem;
    .filters {
      display: block;
      background-color: rgba(243, 199, 252, 0.1);
      padding: 2rem;
      border-radius: var(--border-radius-2);
    }
  }
`;
