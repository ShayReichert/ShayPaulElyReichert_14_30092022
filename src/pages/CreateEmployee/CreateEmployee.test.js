import { MemoryRouter } from "react-router-dom";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import EmployeeContext from "../../utils/context/EmployeeContext";
import CreateEmployee from "./CreateEmployee";
import { mockEmployeeData } from "../../utils/data/__mocks__";

const renderCreateEmployee = (mockData) => {
  return render(
    <MemoryRouter>
      <EmployeeContext.Provider value={mockData}>
        <CreateEmployee />
      </EmployeeContext.Provider>
    </MemoryRouter>
  );
};

test("CreateEmployee page is rendered correctly, with the exact title 'Create Employee'", () => {
  const { getByText } = renderCreateEmployee(mockEmployeeData());
  const createEmployeeText = getByText(/create employee/i, { selector: ".Title__TitleWrapper-sc-1igjzww-0" });
  expect(createEmployeeText).toBeInTheDocument();
});

test("Form validation works correctly", () => {
  const { getByLabelText, getByText } = renderCreateEmployee(mockEmployeeData());
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const birthDateInput = document.querySelector(".birth-date-input input");
  const startDateInput = document.querySelector(".start-date-input input");
  // const departmentLabel = getByText(/department/i);
  const streetInput = getByLabelText(/street/i);
  const cityInput = getByLabelText(/city/i);
  // const stateInput = getByLabelText(/state/i);
  const zipCodeInput = getByLabelText(/zip code/i);
  const submitButton = getByText(/save/i);

  fireEvent.change(firstNameInput, { target: { value: "Jack" } });
  fireEvent.change(lastNameInput, { target: { value: "Dot" } });
  fireEvent.change(birthDateInput, { target: { value: "1990-10-23" } });
  fireEvent.change(startDateInput, { target: { value: "2022-01-01" } });
  // fireEvent.change(departmentText, { target: { value: "Marketing" } });
  fireEvent.change(streetInput, { target: { value: "12 rue JackDot" } });
  fireEvent.change(cityInput, { target: { value: "DotCity" } });
  // fireEvent.change(stateInput, { target: { value: "Kentucky" } });
  fireEvent.change(zipCodeInput, { target: { value: "12000" } });

  fireEvent.click(submitButton);

  expect(firstNameInput.value).toBe("Jack");
  expect(lastNameInput.value).toBe("Dot");
  expect(birthDateInput.value).toBe("1990-10-23");
  expect(startDateInput.value).toBe("2022-01-01");
  // expect(departmentText.value).toBe("Marketing");
  expect(streetInput.value).toBe("12 rue JackDot");
  expect(cityInput.value).toBe("DotCity");
  // expect(stateInput.value).toBe("Kentucky");
  expect(zipCodeInput.value).toBe("12000");
});

test("Form errors work if inputs are empty on form submission", () => {
  const { getByLabelText, getByText } = renderCreateEmployee(mockEmployeeData());
  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const streetInput = getByLabelText(/street/i);
  const cityInput = getByLabelText(/city/i);
  const zipCodeInput = getByLabelText(/zip code/i);
  const submitButton = getByText(/save/i);

  fireEvent.change(firstNameInput, { target: { value: "" } });
  fireEvent.change(lastNameInput, { target: { value: "" } });
  fireEvent.change(streetInput, { target: { value: "" } });
  fireEvent.change(cityInput, { target: { value: "" } });
  fireEvent.change(zipCodeInput, { target: { value: "" } });

  fireEvent.click(submitButton);

  const firstNameError = getByText(/First name is required/i);
  expect(firstNameError).toBeInTheDocument();
  const lastNameError = getByText(/Last name is required/i);
  expect(lastNameError).toBeInTheDocument();
  const birthDateError = getByText(/Birth date is required/i);
  expect(birthDateError).toBeInTheDocument();
  const startDateError = getByText(/Start date is required/i);
  expect(startDateError).toBeInTheDocument();
  const departmentError = getByText(/Department is required/i);
  expect(departmentError).toBeInTheDocument();
  const streetError = getByText(/Street is required/i);
  expect(streetError).toBeInTheDocument();
  const cityError = getByText(/City is required/i);
  expect(cityError).toBeInTheDocument();
  const stateError = getByText(/State is required/i);
  expect(stateError).toBeInTheDocument();
  const zipCodeError = getByText(/Zipcode is required/i);
  expect(zipCodeError).toBeInTheDocument();
});
