import styled from 'styled-components';
import { useGetAllJobsQuery } from '../slices/jobsApiSlice';

// components
import JobCard from '../components/JobCard';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Spinner from '../components/Spinner';

// extras
import { categoryOptions, limitOptions, sortOptions } from '../utils/constants';
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
        <Select label='Category' name='jobType' values={categoryOptions} />
        <div className='filters__jobType'>
          <h3 className='filters__jobType-title'>Job Type</h3>
          <Checkbox label='Freelancer' name='freelancer' />
          <Checkbox label='Full Time' name='fullTime' />
          <Checkbox label='Part Time' name='partTime' />
          <Checkbox label='Temporary' name='temporary' />
        </div>
      </div>
      {/* jobs */}
      <section className='jobs'>
        <div className='jobs__header'>
          <p className='jobs__header-title'>
            Show <span>{data?.totalJobs || 0}</span> jobs
          </p>
          <div className='jobs__sort'>
            <Select
              name='sort'
              values={sortOptions}
              defaultText='Sort by (default)'
            />
            <Select name='limit' values={limitOptions} defaultText='All' />
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
  .filters__jobType {
    margin: 1rem 0;
  }
  .filters__jobType-title {
    display: block;
    text-transform: capitalize;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: var(--letter-spacing);
  }
  .jobs__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  .jobs__header-title {
    font-size: 0.85rem;
    span {
      font-weight: 700;
    }
  }
  .jobs__sort {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    width: 350px;
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
