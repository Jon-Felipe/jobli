import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

type Props = {
  onClose: () => void;
  children: React.ReactElement;
};

const mountElement = document.getElementById('portal')!;

function Modal({ onClose, children }: Props) {
  return (
    <>
      {createPortal(
        <Wrapper>
          <div className='modal__content'>
            <FaTimes className='modal__close-btn' onClick={onClose} />
            {children}
          </div>
        </Wrapper>,
        mountElement
      )}
    </>
  );
}

export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-color: #000000aa;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal__content {
    background-color: var(--white);
    position: relative;
    min-width: 30rem;
    margin: 0 auto;
    padding: 2rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0 1em #000000aa;
  }
  .modal__close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    height: 30px;
    width: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
