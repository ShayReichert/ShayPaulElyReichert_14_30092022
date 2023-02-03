import { useEffect, useState } from "react";
import { employeeDataExamples } from "../utils/data/__mocks__";

const useEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [currentId, setCurrentId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Retrieve all employees from the local storage if exists
  useEffect(() => {
    if (localStorage.getItem("employees") === null) {
      localStorage.setItem("employees", JSON.stringify(employeeDataExamples()));
      setIsLoaded(true);
    } else {
      setEmployees(JSON.parse(localStorage.getItem("employees")));
      setIsLoaded(true);
    }
  }, [isLoaded]);

  // Set the largest ID (the last one added)
  useEffect(() => {
    if (employees.length) setCurrentId(Math.max(...employees.map((e) => e.id)));
  }, [employees]);

  // Add a new employee to the "employees" with an new ID
  const addEmployee = (employee) => {
    const newEmployees = [...employees, { ...employee, id: currentId + 1 }];
    setEmployees(newEmployees);
    setCurrentId(currentId + 1);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
    setIsModalOpen(true);
  };

  return { employees, addEmployee, isModalOpen, setIsModalOpen };
};

export default useEmployee;
