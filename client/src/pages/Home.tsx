import styled from 'styled-components';

// extras
import heroImg from '../assets/images/hero_img.svg';

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
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 2rem;
  .hero {
    display: block;
    margin-top: 5rem;
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
    grid-template-columns: 2fr 1fr;
    column-gap: 2rem;
    button {
      padding: 1rem;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
  .hero__image {
    display: none;
  }
  @media (min-width: 1024px) {
    .hero {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 4rem;
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
