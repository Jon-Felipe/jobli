import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegBuilding, FaMapMarkerAlt } from 'react-icons/fa';
import { useGetSingleJobQuery } from '../slices/jobsApiSlice';

// components
import Spinner from '../components/Spinner';

// extras
import { currencyNumberFormat } from '../utils/helpers';

type Props = {};

function SingleJob({}: Props) {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleJobQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      {/* job */}
      <section>
        <article className='job'>
          {/* job header */}
          <header className='job__header'>
            <div className='job__icon'>
              <FaRegBuilding />
            </div>
            <div className='job__company'>
              <h3 className='job__company-title'>{data?.job?.jobTitle}</h3>
              <div className='job__company-details'>
                <p>{data?.job?.companyName}</p>
                <p>
                  <FaMapMarkerAlt /> {data?.job?.location}{' '}
                </p>
                <p>{currencyNumberFormat(data?.job?.salary)}</p>
              </div>
            </div>
          </header>
          {/* job body */}
          <div className='job__description'>
            <h5 className='job__description--title'>Job Description</h5>
            <p className='job__description--text'>
              {data?.job?.jobDescription}
            </p>
          </div>
        </article>
        <article className='skills'>
          <h3 className='skills--title'>
            Required Knowledge, Skills, and Abilities
          </h3>
          <div className='skills__list'>
            {data?.job?.requiredSkills.map((skill: string, index: number) => {
              return (
                <ul key={index}>
                  <li>{skill}</li>
                </ul>
              );
            })}
          </div>
        </article>
        <article className='experience'>
          <h3 className='experience--title'>Experience</h3>
          <div className='experience__list'>
            {data?.job?.experience.map((experience: string, index: number) => {
              return (
                <ul key={index}>
                  <li>{experience}</li>
                </ul>
              );
            })}
          </div>
        </article>
      </section>
      {/* job summary */}
      <section>
        <article className='overview'>
          <h3 className='overview__title'>Job Overview</h3>
          <p className='overview__text'>
            Posted date: <span>12 Aug 2019</span>
          </p>
          <p className='overview__text'>
            Location: <span>New York</span>
          </p>
          <p className='overview__text'>
            Vacancy: <span>02</span>
          </p>
          <p className='overview__text'>
            Job nature: <span>Full time</span>
          </p>
          <p className='overview__text'>
            Salary: <span>$7,800 yearly</span>
          </p>
          <p className='overview__text'>
            Application date: <span>12 Sep 2020</span>
          </p>
          <button className='btn btn-block'>Apply Now</button>
        </article>
      </section>
    </Wrapper>
  );
}

export default SingleJob;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 350px;
  column-gap: 2rem;
  max-width: 1320px;
  margin: 80px auto;
  padding: 2rem;
  .job__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    column-gap: 2rem;
    margin-bottom: 2rem;
  }
  .job__icon {
    border: 1px solid var(--grey-200);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: var(--white);
  }
  .job__icon svg {
    width: 80px;
    height: 80px;
  }
  .job__company-title {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  .job__company-details {
    display: flex;
    align-items: center;
    column-gap: 1rem;
    p {
      font-size: 0.85rem;
      color: var(--grey-500);
      letter-spacing: 0.5px;
    }
  }
  .job__description,
  .skills,
  .experience {
    max-width: 800px;
    margin-bottom: 2rem;
  }
  .job__description--title,
  .skills--title,
  .experience--title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .job__description--text {
    word-spacing: 3px;
    letter-spacing: var(--letter-spacing);
    line-height: 20px;
  }
  .overview {
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    background-color: var(--white);
  }
  .overview__title {
    font-size: 1.85rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .overview__text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    letter-spacing: var(--letter-spacing);
  }
  .skills__list li,
  .experience__list li {
    list-style: disc;
    margin: 1rem 0;
    letter-spacing: var(--letter-spacing);
  }
  @media (min-width: 1024px) {
    .job__header {
      flex-direction: row;
    }
    .job__icon {
      margin-bottom: unset;
    }
    .job__company-title {
      font-size: 2rem;
    }
    .job__company-details {
      column-gap: 4rem;
      p {
        font-size: 1.15rem;
      }
    }
  }
`;
