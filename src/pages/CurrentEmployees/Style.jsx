import styled from "styled-components/macro";
import colors from "../../utils/style/colors";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  border-radius: 7px;
  padding: 3rem 4rem;
  min-height: 50vh;
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;

  form {
    width: fit-content;
    color: ${colors.grey};
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TheadButton = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  font-weight: 700;
  font-size: 16px;
  padding: 2rem 1rem;
  background-color: ${colors.lightgrey};
  cursor: pointer;

  &.ascending::after {
    content: "▼";
    display: inline-block;
  }

  &.descending::after {
    content: "▲";
    display: inline-block;
  }
`;

export const TheadTr = styled.tr`
  background-color: ${colors.lightgrey};
`;

export const TheadTh = styled.th`
  background-color: ${colors.lightgrey};
`;

export const TbodyTr = styled.tr`
  &:hover {
    background-color: ${colors.lightgrey};
  }
`;

export const TbodyTd = styled.td`
  padding: 2rem 1rem;
  border-bottom: 1px solid ${colors.grey};
`;
