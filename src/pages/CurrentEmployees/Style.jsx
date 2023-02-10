import styled from "styled-components/macro";
import colors from "../../utils/style/colors";
import { headersData } from "../../utils/data/headers";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  border-radius: 7px;
  padding: 3rem 4rem;
  min-height: 50vh;

  @media (max-width: 920px) {
    border: none;
    padding: 3rem 0;

    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid ${colors.grey};
      border-radius: 7px;
      margin-bottom: 3rem;
    }

    td {
      /* Like a "row" */
      border: none;
      position: relative;
      padding-left: 50%;

      &:nth-child(odd) {
        background-color: ${colors.primary};
      }
    }

    td:before {
      /* Like a table header */
      position: absolute;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: bold;
      text-align: left;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: "${headersData[0].name}";
    }
    td:nth-of-type(2):before {
      content: "${headersData[1].name}";
    }
    td:nth-of-type(3):before {
      content: "${headersData[2].name}";
    }
    td:nth-of-type(4):before {
      content: "${headersData[3].name}";
    }
    td:nth-of-type(5):before {
      content: "${headersData[4].name}";
    }
    td:nth-of-type(6):before {
      content: "${headersData[5].name}";
    }
    td:nth-of-type(7):before {
      content: "${headersData[6].name}";
    }
    td:nth-of-type(8):before {
      content: "${headersData[7].name}";
    }
    td:nth-of-type(9):before {
      content: "${headersData[8].name}";
    }
  }
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;

  @media (max-width: 920px) {
    justify-content: flex-start;
  }

  form {
    width: fit-content;
    color: ${colors.dark};
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
  background-color: ${colors.primary};
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
  background-color: ${colors.primary};
`;

export const TheadTh = styled.th`
  background-color: ${colors.primary};
`;

export const TbodyTr = styled.tr`
  &:hover {
    background-color: ${colors.lightgrey};
  }
`;

export const TbodyTd = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${colors.grey};
`;

export const SelectEntries = styled.div`
  display: flex;
  padding: 1rem 0;

  select {
    margin: 0 0.5rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0 0;
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;

  button {
    background-color: ${colors.lightgrey};
    border-style: none;
    padding: 0.3rem 0.7rem;
    border-radius: 3px;
    font-size: 17px;
    cursor: pointer;
  }

  .current-page {
    padding: 0 0.5rem;
  }
`;
