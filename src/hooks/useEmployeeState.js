import { useState } from "react";
import { mockEmployees } from "../utils/data/mockEmployees";

export default function useEmployeeState() {
  const [employees, setEmployees] = useState(mockEmployees);
  const [currentId, setCurrentId] = useState(employees.length + 1);

  const addEmployee = (employee) => {
    setCurrentId(currentId + 1);
    setEmployees([...employees, { ...employee, id: currentId }]);
  };

  return { employees, addEmployee };
}
