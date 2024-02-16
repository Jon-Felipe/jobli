import styled from 'styled-components';

// components
import JobCategory from '../components/JobCategory';

// extras
import heroImg from '../assets/images/hero_img.svg';
import { jobCategories } from '../utils/constants';

type Props = {};

function Home({}: Props) {
  return (
    <Wrapper>
      {/* hero section */}
      <section className='hero'>
        <div className='hero__caption'>
          <h5>Easiest way to find a perfect job</h5>
          <h1>Find Your Next Dream Job</h1>
          <div className='hero__btns'>
            <button className='btn'>Looking For A Job?</button>
            <button className='btn'>Find Talent</button>
          </div>
        </div>
        <div className='hero__image'>
          <img src={heroImg} alt='job search image' />
        </div>
      </section>
      {/* job category section */}
      <section className='categories'>
        <header>
          <h3>Browse From Top Categories</h3>
          <div className='categories__text'>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi,
              minus repellat velit saepe deserunt autem ad alias perspiciatis
              vero nulla beatae assumenda atque esse quo.
            </p>
          </div>
        </header>
        {jobCategories.map((jobCategory) => (
          <JobCategory key={jobCategory.id} {...jobCategory} />
        ))}
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
  .hero__caption {
    h5 {
      font-size: 1.5rem;
      margin-bottom: 2rem;
      color: var(--grey-500);
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
    button {
      width: 100%;
      padding: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .hero__image {
    display: none;
  }
  .categories {
    text-align: center;
    background-color: var(--white);
    padding: 2rem;
    header {
      h3 {
        font-weight: 700;
        margin-bottom: 1.5rem;
      }
      .categories__text {
        max-width: 800px;
        margin: 0 auto;
        p {
          letter-spacing: 1px;
          line-height: 25px;
          color: var(--grey-500);
        }
      }
    }
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
  }
`;
