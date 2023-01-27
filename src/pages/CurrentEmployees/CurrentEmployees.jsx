import React, { useState, useEffect, useContext } from "react";
import { Content, SearchWrapper, Table, TheadButton, TheadTr, TheadTh, TbodyTr, TbodyTd } from "./Style";
import EmployeeContext from "../../utils/context/EmployeeContext";
import useSort from "../../hooks/useSort";
import PageTemplate from "../../components/PageTemplate";
import Title from "../../components/Title";
import Modal from "../../components/Modal";

function CurrentEmployees() {
  const { employees, isModalOpen, setIsModalOpen } = useContext(EmployeeContext);
  const [currentEmployees, setCurrentEmployees] = useState(employees);
  const { sortKey, headers, handleSort } = useSort();
  const [query, setQuery] = useState("");

  useEffect(() => {
    setCurrentEmployees(employees);
  }, [employees]);

  // Sort the employees array based on the sort class and the sort key
  let sortedEmployees = [...currentEmployees];
  const sortHeader = headers.find((header) => header.value === sortKey);

  if (sortHeader && sortHeader.sortClass !== "none") {
    sortedEmployees.sort((a, b) => {
      let valueA = "";
      let valueB = "";

      if (sortHeader.value === "birthDate" || sortHeader.value === "startDate") {
        // Format date value in a sortable format
        valueA = Date.parse(a[sortKey].split("/").reverse().join("/"));
        valueB = Date.parse(b[sortKey].split("/").reverse().join("/"));
      } else {
        valueA = a[sortKey];
        valueB = b[sortKey];
      }

      if (valueA < valueB) {
        return sortHeader.sortClass === "ascending" ? -1 : 1;
      }
      if (valueA > valueB) {
        return sortHeader.sortClass === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  // Handle search from search input
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  // Filter employees based on query value from search input
  useEffect(() => {
    setCurrentEmployees(
      employees.filter((employee) =>
        // Object.values() : create an array containing all the values ​​of the "employee" object
        Object.values(employee).some((val) => typeof val === "string" && val.toLowerCase().includes(query.toLowerCase()))
      )
    );
  }, [employees, query]);

  return (
    <PageTemplate>
      <Title title="Current Employees" />
      <Content>
        <SearchWrapper>
          <form>
            <label htmlFor="search">Search : </label>
            <input id="search" name="search" type="search" value={query} onChange={handleSearch} />
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
      <Modal message="Employee created !" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PageTemplate>
  );
}

export default CurrentEmployees;
