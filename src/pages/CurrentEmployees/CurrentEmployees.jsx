import React, { useState, useEffect, useContext } from "react";
import { Content, SearchWrapper, Table, TheadButton, TheadTr, TheadTh, TbodyTr, TbodyTd } from "./Style";
import EmployeeContext from "../../utils/context/EmployeeContext";
import useSort from "../../hooks/useSort";
import PageTemplate from "../../components/PageTemplate";
import Title from "../../components/Title";

function CurrentEmployees() {
  const { employees } = useContext(EmployeeContext);
  const [currentEmployees, setCurrentEmployees] = useState(employees);
  const { sortKey, headers, handleSort } = useSort();
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    setCurrentEmployees(employees);
  }, [employees]);

  // Sort the employees array based on the sort class and the sort key
  let sortedEmployees = [...currentEmployees];
  const sortHeader = headers.find((header) => header.value === sortKey);
  if (sortHeader && sortHeader.sortClass !== "none") {
    sortedEmployees.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return sortHeader.sortClass === "ascending" ? -1 : 1;
      }
      if (a[sortKey] > b[sortKey]) {
        return sortHeader.sortClass === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

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
                {headers.map((header) => (
                  <TheadTh key={header.value}>
                    <TheadButton className={header.sortClass} type="button" onClick={() => handleSort(header.value)}>
                      {header.name}
                    </TheadButton>
                  </TheadTh>
                ))}
              </TheadTr>
            </thead>
            <tbody>
              {sortedEmployees.map((employee) => (
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
