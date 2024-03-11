import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useGetAllJobsQuery } from '../slices/jobsApiSlice';

// components
import JobCategoryCard from '../components/JobCategoryCard';
import ServiceCard from '../components/ServiceCard';
import JobCard from '../components/JobCard';
import Spinner from '../components/Spinner';

// extras
import heroImg from '../assets/images/hero_img.svg';
import { jobCategories, services } from '../utils/constants';
import { Job } from '../utils/types';

type Props = {};

function Home({}: Props) {
  const { data, isLoading } = useGetAllJobsQuery({});

  const recentlyAddedJobs = data?.jobs?.slice(0, 6);
  return (
    <Wrapper>
      {/* hero section */}
      <section className='hero'>
        <div className='hero-actions'>
          <h5>Easiest way to find a perfect job</h5>
          <h1>Find Your Next Dream Job</h1>
          <div className='hero__btns'>
            <Link to='/jobs' className='btn'>
              Looking For A Job?
            </Link>
            <button type='button' className='btn'>
              Find Talent
            </button>
          </div>
        </div>
        <div className='hero__image'>
          <img src={heroImg} alt='job search image' />
        </div>
      </section>
      {/* job category section */}
      <section className='category'>
        <header>
          <h3 className='category__title'>Browse From Top Categories</h3>
          <p className='category__text'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
            minus repellat velit saepe deserunt autem ad alias perspiciatis vero
            nulla beatae assumenda atque esse quo.
          </p>
        </header>
        <div className='category__cards'>
          {jobCategories.map((jobCategory) => (
            <JobCategoryCard key={jobCategory.id} jobCategory={jobCategory} />
          ))}
        </div>
      </section>
      {/* services section */}
      <section className='services'>
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </section>
      {/* recent jobs */}
      <section className='recent-jobs'>
        <h4 className='recent-jobs__title'>Recently Added Jobs</h4>
        <h1 className='recent-jobs__subtitle'>Featured Jobs</h1>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className='recent-jobs__cards'>
            {recentlyAddedJobs.map((job: Job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}
      </section>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  .hero {
    padding: 2rem;
    display: block;
    max-width: 1320px;
    margin: 80px auto;
  }
  .hero-actions {
    h5 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--grey-400);
    }
    h1 {
      font-weight: 500;
      margin-bottom: 2rem;
    }
  }
  .hero__btns {
    display: grid;
    grid-template-rows: 1fr 1fr;
    row-gap: 1rem;
    button,
    a {
      text-align: center;
      width: 100%;
      padding: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .hero__image {
    display: none;
  }
  .category {
    text-align: center;
    background-color: var(--white);
    padding: 4rem 2rem;
  }
  .category__title {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .category__text {
    max-width: 800px;
    margin: 0 auto;
    letter-spacing: var(--letter-spacing);
    line-height: 25px;
    color: var(--grey-400);
  }
  .category__cards {
    display: grid;
    gap: 2rem;
    max-width: 1320px;
    margin: 80px auto;
  }
  .services {
    display: grid;
    max-width: 1320px;
    margin: 80px auto;
    padding: 2rem;
    gap: 2rem;
  }
  .recent-jobs {
    background-color: var(--white);
    padding: 4rem 2rem;
    text-align: center;
  }
  .recent-jobs__title {
    color: var(--grey-500);
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  .recent-jobs__subtitle {
    font-weight: 600;
    font-size: 2.5rem;
  }
  .recent-jobs__cards {
    display: grid;
    row-gap: 2rem;
    max-width: 1320px;
    margin: 2rem auto;
  }
  @media (min-width: 1024px) {
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
    }
    .hero__btns {
      grid-template-columns: 2fr 1fr;
      grid-template-rows: 0fr 0fr;
      column-gap: 2rem;
      row-gap: 0rem;
    }
    .hero__image {
      display: block;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .category__cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .services {
      grid-template-columns: repeat(4, 1fr);
    }
    .recent-jobs__cards {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;
