import React, { useState } from "react";
import styled from "styled-components/macro";
import PageTemplate from "../components/PageTemplate";
import Title from "../components/Title";
import colors from "../utils/style/colors";
import { employees } from "../utils/data/mockEmployees";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  border-radius: 7px;
  padding: 3rem 4rem;
  min-height: 50vh;
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;

  form {
    width: fit-content;
    color: ${colors.grey};
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TheadButton = styled.button`
  border: 0;
  font-weight: 700;
  font-size: 16px;
  padding: 2rem 1rem;
  background-color: ${colors.lightgrey};

  &.ascending::after {
    content: "▼";
    display: inline-block;
  }

  &.descending::after {
    content: "▲";
    display: inline-block;
  }
`;

const TheadTr = styled.tr`
  background-color: ${colors.lightgrey};
`;

const TheadTh = styled.th`
  background-color: ${colors.lightgrey};
`;

const TbodyTr = styled.tr`
  &:hover {
    background-color: ${colors.lightgrey};
  }
`;

const TbodyTd = styled.td`
  padding: 2rem 1rem;
  border-bottom: 1px solid ${colors.grey};
`;

function CurrentEmployees() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <PageTemplate>
      <Title title="Current Employees" />
      <Content>
        <SearchWrapper>
          <form>
            <label htmlFor="search">Search : </label>
            <input id="search" name="search" type="search" value={query} onChange={handleChange} />
          </form>
        </SearchWrapper>
        <div className="Table">
          <Table>
            <thead>
              <TheadTr>
                <TheadTh>
                  <TheadButton type="button">First Name</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Last Name</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Start Day</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Department</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Date of Birth</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Street</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">City</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">State</TheadButton>
                </TheadTh>
                <TheadTh>
                  <TheadButton type="button">Zip Code</TheadButton>
                </TheadTh>
              </TheadTr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <TbodyTr key={employee.id}>
                  <TbodyTd>{employee.firstName}</TbodyTd>
                  <TbodyTd>{employee.lastName}</TbodyTd>
                  <TbodyTd>{employee.startDate}</TbodyTd>
                  <TbodyTd>{employee.department}</TbodyTd>
                  <TbodyTd>{employee.birthDate}</TbodyTd>
                  <TbodyTd>{employee.street}</TbodyTd>
                  <TbodyTd>{employee.city}</TbodyTd>
                  <TbodyTd>{employee.selectState}</TbodyTd>
                  <TbodyTd>{employee.zipcode}</TbodyTd>
                </TbodyTr>
              ))}
            </tbody>
          </Table>
        </div>
      </Content>
    </PageTemplate>
  );
}

export default CurrentEmployees;
