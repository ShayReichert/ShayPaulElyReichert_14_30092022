import React, { useState, useEffect, useContext } from "react";
import { Content, SearchWrapper, Table, TheadButton, TheadTr, TheadTh, TbodyTr, TbodyTd, SelectEntries, Pagination, Navigation } from "./Style";
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
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const totalPages = Math.ceil(currentEmployees.length / dataPerPage);

  useEffect(() => {
    setCurrentEmployees(employees);
  }, [employees]);

  // Get current employees based on pagination
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  // Change page (pagination)
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Change employees per page
  const handleDataPerPageChange = (e) => {
    setDataPerPage(e.target.value);
    setCurrentPage(1);
  };

  // Sort the employees array based on the sort class and the sort key
  const sortedEmployees = [...currentEmployees].slice(indexOfFirstData, indexOfLastData);
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
        <SelectEntries>
          Show
          <select value={dataPerPage} onChange={handleDataPerPageChange}>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          entries
        </SelectEntries>
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
          <Pagination>
            <div>
              {indexOfFirstData + 1} - {indexOfLastData} of {currentEmployees.length} entries
            </div>
            <Navigation>
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </button>
              <div className="current-page">{currentPage}</div>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </button>
            </Navigation>
          </Pagination>
        </div>
      </Content>
      <Modal message="Employee created !" isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </PageTemplate>
  );
}

export default CurrentEmployees;
