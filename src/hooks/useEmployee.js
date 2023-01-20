import { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, addDoc } from "firebase/firestore";

const useEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const employeesCollectionRef = collection(db, "employees");

  // Retrieve all employees in the "employees" firebase collection and update state with this data
  useEffect(() => {
    const getEmployees = async () => {
      const data = await getDocs(employeesCollectionRef);
      setEmployees(data.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    };
    getEmployees();
  }, []);

  // Add a new employee to the "employees" firebase collection and update state with this new data
  const addEmployee = async (employee) => {
    const docRef = await addDoc(employeesCollectionRef, employee);
    const employeeWithId = { id: docRef.id, ...employee };
    setEmployees([...employees, employeeWithId]);
    setIsModalOpen(true);
  };

  return { employees, addEmployee, isModalOpen, setIsModalOpen };
};

export default useEmployee;
