import styled from "styled-components/macro";
import colors from "../../utils/style/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  padding: 1.5rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ColLeft = styled.div`
  margin-right: 5rem;
`;

export const ColRight = styled.div``;

export const FormWrapper = styled.div`
  background-color: #f3f8f2;
  margin-bottom: 3rem;
  padding: 1.5rem;

  .line {
    display: flex;
    justify-content: space-between;

    > * {
      width: 45%;
    }
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  &.error {
    button {
      border: 1px solid red;
    }
  }
`;

export const Label = styled.label`
  color: ${colors.grey};
  font-size: 14px;
  margin-bottom: 0.7rem;
`;

export const Input = styled.input`
  font-size: 17px;
  border-radius: 7px;
  border: none;
  padding: 12px 11px;

  &:focus-visible {
    outline: 1px solid ${colors.secondary};
  }

  &.error {
    border: 1px solid red;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;

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
