import styled from 'styled-components';
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
import FormRowInput from '../components/FormRowInput';

type Props = {};

function Home({}: Props) {
  const { data, isLoading } = useGetAllJobsQuery({});

  const recentlyAddedJobs = data?.jobs?.slice(0, 6);
  return (
    <Wrapper>
      {/* hero section */}
      <section className='hero'>
        <div className='hero__container'>
          <div className='hero__content'>
            <h2 className='hero__content-title'>
              There Are <span>{data?.jobs?.length || 0}</span> Postings Here For
              You!
            </h2>
            <h6 className='hero__content-subtitle'>
              Find Jobs, Employment & Career Opportunities
            </h6>
            <form className='hero__search'>
              <div className='hero__search-inputs'>
                <FormRowInput
                  type='text'
                  name='search'
                  value=''
                  onChange={() => console.log('search')}
                  placeholder='Job title, keywords or company'
                />
                <FormRowInput
                  type='text'
                  name='city'
                  value=''
                  onChange={() => console.log('city')}
                  placeholder='City or postcode'
                />
              </div>
              <button type='submit' className='btn hero__search-btn'>
                Find Jobs
              </button>
            </form>
          </div>
          <div className='hero__image'>
            <img src={heroImg} alt='job search image' />
          </div>
        </div>
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
      {/* services section */}
      <section className='services'>
        <div className='services-content'>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
      {/* job category section */}
      <section className='category'>
        <div className='category__container'>
          <header>
            <h3 className='category__title'>Popular Job Categories</h3>
            <p className='category__text'>
              We have jobs for all categories. Browse over 1000 jobs now and
              find your dream job today!
            </p>
          </header>
          <div className='category__cards'>
            {jobCategories.map((jobCategory) => (
              <JobCategoryCard key={jobCategory.id} jobCategory={jobCategory} />
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  .hero {
    background-color: #e4f0ed;
    padding: 8rem 2rem;
  }
  .hero__container,
  .category__container {
    display: block;
    max-width: 1320px;
    margin: 0 auto;
  }
  .hero__content-title {
    font-size: 2rem;
    font-weight: 600;
    text-transform: capitalize;
    margin-bottom: 1rem;
    text-transform: capitalize;
    span {
      color: var(--primary-500);
    }
  }
  .hero__content-subtitle {
    font-weight: 400;
    font-size: 0.85rem;
    color: var(--grey-400);
    text-transform: capitalize;
    margin-bottom: 2rem;
  }
  .hero__search-inputs {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .hero__search-btn {
    margin-top: 2rem;
  }
  .hero__image {
    display: none;
  }
  .category {
    text-align: center;
    background-color: var(--white);
    padding: 8rem 2rem;
  }
  .category__title {
    font-weight: 700;
    margin-bottom: 1.2rem;
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
    margin-top: 80px;
  }
  .services {
    background-color: var(--primary-500);
    padding: 4rem 2rem;
  }
  .services-content {
    display: grid;
    gap: 2rem;
    max-width: 1320px;
    margin: 0px auto;
    svg,
    h3,
    p {
      color: var(--white);
    }
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
  @media (min-width: 768px) {
    .category__cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1024px) {
    .hero__container {
      display: grid;
      grid-template-columns: 2fr 500px;
      column-gap: 4rem;
    }
    .hero__content-title {
      font-size: 3rem;
      font-weight: 700;
    }
    .hero__content-subtitle {
      font-size: 1.2rem;
    }
    .hero__search-inputs {
      flex-direction: row;
      column-gap: 1rem;
    }
    .hero__search-btn {
      font-size: 1.2rem;
    }
    .hero__image {
      display: block;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .category__cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .services-content {
      grid-template-columns: repeat(4, 1fr);
    }
    .recent-jobs__cards {
      grid-template-columns: 1fr 1fr;
      column-gap: 2rem;
    }
  }
`;
