import styled from 'styled-components';
import { dummy_jobs } from '../utils/constants';
import JobCard from '../components/JobCard';

type Props = {};

function Jobs({}: Props) {
  return (
    <Wrapper>
      <section className='filters'>job filters</section>
      <section className='jobs'>
        <div className='jobs__header'>
          <p>39, 782 Jobs found</p>
          <div className='jobs__sort'>Sort by</div>
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
  .jobs__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 300px 1fr;
    column-gap: 2rem;
  }
`;
