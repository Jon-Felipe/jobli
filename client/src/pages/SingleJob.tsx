import styled from 'styled-components';
import { FaRegBuilding, FaMapMarkerAlt } from 'react-icons/fa';

type Props = {};

function SingleJob({}: Props) {
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
              <h3 className='job__company-title'>Digital Marketer</h3>
              <div className='job__company-details'>
                <p>Creative Agency</p>
                <p>
                  <FaMapMarkerAlt /> Athens, Greece{' '}
                </p>
                <p>$3500 - $4000</p>
              </div>
            </div>
          </header>
          {/* job body */}
          <div className='job__description'>
            <h5 className='job__description--title'>Job Description</h5>
            <p className='job__description--text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              atque magni numquam laborum repellendus mollitia dolorum
              laboriosam quasi ducimus dolor excepturi eos ad soluta molestiae
              cumque suscipit labore optio quas, fugiat vitae deleniti pariatur
              veritatis perferendis est. Amet provident perferendis ipsa quia
              cupiditate distinctio doloremque a, illum quaerat rerum delectus!
            </p>
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
  .job__description {
    max-width: 800px;
  }
  .job__description--title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .job__description--text {
    word-spacing: 3px;
    letter-spacing: 1px;
    line-height: 30px;
  }
  .overview {
    border: 1px solid var(--grey-300);
    border-radius: var(--border-radius);
    padding: 1.5rem;
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
