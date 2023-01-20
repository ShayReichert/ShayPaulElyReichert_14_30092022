import React, { useEffect } from "react";
import colors from "../utils/style/colors";
import styled from "styled-components/macro";

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 3rem 5rem;
  border-radius: 7px;
  box-shadow: 1px 1px 7px 3px #00000029;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;
  margin-top: 2rem;

  button {
    background-color: ${colors.secondary};
    border-style: none;
    padding: 0.7rem 2.6rem;
    border-radius: 50px;
    font-size: 17px;
    color: white;
    cursor: pointer;
    transition: padding 300ms ease;

    &:hover {
      padding: 0.7rem 2.8rem;
    }
  }
`;

const Modal = ({ message, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    isOpen && (
      <ModalWrapper>
        <ModalContent>
          <p>{message}</p>

          <ButtonWrapper>
            <button onClick={() => setIsOpen(false)}>OK</button>
          </ButtonWrapper>
        </ModalContent>
      </ModalWrapper>
    )
  );
};

export default Modal;
