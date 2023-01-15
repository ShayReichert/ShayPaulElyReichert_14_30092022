import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Content, Form, ColLeft, ColRight, FormWrapper, InputsWrapper, FormField, Label, Input, ButtonWrapper } from "./Style";
import EmployeeContext from "../../utils/context/EmployeeContext";
import useErrors from "../../hooks/useErrors";
import PageTemplate from "../../components/PageTemplate";
import Title from "../../components/Title";
import { Dropdown } from "simple-react-select-dropdown";
import "simple-react-select-dropdown/dist/index.css";
import { countries } from "../../utils/data/countries";
import { departments } from "../../utils/data/departments";

function CreateEmployee() {
  const navigate = useNavigate();
  const { addEmployee } = useContext(EmployeeContext);
  const { errors, isFormValid } = useErrors();
  const [firstName, setUserFirstName] = useState("");
  const [lastName, setUserLastName] = useState("");
  const [birthDate, setUserBirthDate] = useState("");
  const [startDate, setUserStartDate] = useState("");
  const [department, setSelectDepartment] = useState("");
  const [street, setUserStreet] = useState("");
  const [city, setUserCity] = useState("");
  const [selectState, setSelectState] = useState("");
  const [zipcode, setUserZipcode] = useState("");

  const formatDate = (date) => {
    const parts = date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  };

  const userInfos = {
    firstName,
    lastName,
    birthDate: formatDate(birthDate),
    startDate: formatDate(startDate),
    selectState,
    street,
    city,
    department,
    zipcode,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid(userInfos)) {
      addEmployee(userInfos);
      navigate("/current-employees", { replace: true });
    }
  };

  return (
    <PageTemplate>
      <Title title="Create Employee" />

      <Content>
        <Form onSubmit={handleSubmit}>
          <InputsWrapper>
            <ColLeft>
              <FormWrapper>
                <div className="line">
                  <FormField>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setUserFirstName(e.target.value)}
                      className={errors.firstName.error ? "error" : ""}
                    />
                    {errors.firstName.error && (
                      <span className="error-message" data-testid="first-name-error">
                        {errors.firstName.message}
                      </span>
                    )}
                  </FormField>
                  <FormField>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setUserLastName(e.target.value)}
                      className={errors.lastName.error ? "error" : ""}
                    />
                    {errors.lastName.error && <span className="error-message">{errors.lastName.message}</span>}
                  </FormField>
                </div>

                <div className="line">
                  <FormField>
                    <Label htmlFor="birthdate">Date of Birth</Label>
                    <Input
                      type="date"
                      id="birthdate"
                      value={birthDate}
                      min="1900-01-01"
                      max=""
                      onChange={(e) => setUserBirthDate(e.target.value)}
                      className={errors.birthDate.error ? "error" : ""}
                    ></Input>
                    {errors.birthDate.error && <span className="error-message">{errors.birthDate.message}</span>}
                  </FormField>
                </div>
              </FormWrapper>

              <FormWrapper>
                <div className="line">
                  <FormField>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input
                      type="date"
                      id="startDate"
                      value={startDate}
                      min="1900-01-01"
                      max=""
                      onChange={(e) => setUserStartDate(e.target.value)}
                      className={errors.startDate.error ? "error" : ""}
                    />
                    {errors.startDate.error && <span className="error-message">{errors.startDate.message}</span>}
                  </FormField>
                  <FormField className={errors.department.error ? "error" : ""}>
                    <Label htmlFor="department">Department</Label>
                    <Dropdown setSelectState={setSelectDepartment} options={departments} />
                    {errors.department.error && <span className="error-message">{errors.department.message}</span>}
                  </FormField>
                </div>
              </FormWrapper>
            </ColLeft>

            <ColRight>
              <FormWrapper>
                <div className="line">
                  <FormField>
                    <Label htmlFor="street">Street</Label>
                    <Input
                      type="text"
                      id="street"
                      value={street}
                      onChange={(e) => setUserStreet(e.target.value)}
                      className={errors.street.error ? "error" : ""}
                    />
                    {errors.street.error && <span className="error-message">{errors.street.message}</span>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="city">City</Label>
                    <Input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setUserCity(e.target.value)}
                      className={errors.city.error ? "error" : ""}
                    />
                    {errors.city.error && <span className="error-message">{errors.city.message}</span>}
                  </FormField>
                </div>

                <div className="line">
                  <FormField className={errors.selectState.error ? "error" : ""}>
                    <Label htmlFor="state">State</Label>
                    <Dropdown setSelectState={setSelectState} options={countries} />
                    {errors.selectState.error && <span className="error-message">{errors.selectState.message}</span>}
                  </FormField>
                  <FormField>
                    <Label htmlFor="zipcode">Zip Code</Label>
                    <Input
                      type="number"
                      id="zipcode"
                      value={zipcode}
                      onChange={(e) => setUserZipcode(e.target.value)}
                      className={errors.zipcode.error ? "error" : ""}
                    />
                    {errors.zipcode.error && <span className="error-message">{errors.zipcode.message}</span>}
                  </FormField>
                </div>
              </FormWrapper>
            </ColRight>
          </InputsWrapper>

          <ButtonWrapper>
            <button>Save</button>
          </ButtonWrapper>
        </Form>
      </Content>
    </PageTemplate>
  );
}

export default CreateEmployee;
