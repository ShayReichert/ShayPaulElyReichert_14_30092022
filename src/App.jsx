import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee/CreateEmployee";
import CurrentEmployees from "./pages/CurrentEmployees/CurrentEmployees";
import GlobalStyle from "./utils/style/GlobalStyle";
import EmployeeContext from "./utils/context/EmployeeContext";
import useEmployeeState from "./hooks/useEmployeeState";

function App() {
  const employeeState = useEmployeeState();

  return (
    <React.StrictMode>
      <GlobalStyle />
      <EmployeeContext.Provider value={employeeState}>
        <Routes>
          <Route path="/" element={<CreateEmployee />}></Route>
          <Route path="/current-employees" element={<CurrentEmployees />}></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </EmployeeContext.Provider>
    </React.StrictMode>
  );
}

export default App;
