import styled from 'styled-components';

// extras
import { Service } from '../utils/types';

type Props = {
  service: Service;
};

function ServiceCard({ service }: Props) {
  const { icon: Icon, title, text } = service;
  return (
    <Wrapper>
      <div className='service__icon'>
        <Icon />
      </div>
      <h3 className='service__title'>{title}</h3>
      <p className='service__text'>{text}</p>
    </Wrapper>
  );
}

export default ServiceCard;

const Wrapper = styled.article`
  .service__icon {
    margin-bottom: 0.5rem;
    svg {
      width: 50px;
      height: 50px;
    }
  }
  .service__title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  .service__text {
    line-height: 2rem;
    color: var(--grey-400);
  }
  @media (min-width: 1024px) {
    padding: 0rem;
  }
`;
