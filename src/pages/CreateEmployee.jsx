import React, { useState } from "react";
import styled from "styled-components/macro";
import PageTemplate from "../components/PageTemplate";
import Title from "../components/Title";
import { Dropdown } from "simple-react-select-dropdown";
import "simple-react-select-dropdown/dist/index.css";
import { countries } from "../utils/data/countries";
import { departments } from "../utils/data/departments";
import colors from "../utils/style/colors";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.grey};
  border-radius: 10px;
  padding: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ColLeft = styled.div`
  margin-right: 5rem;
`;

const ColRight = styled.div``;

const FormWrapper = styled.div`
  background-color: #f3f8f2;
  margin-bottom: 3rem;
  padding: 1.5rem;

  .line {
    display: flex;
    justify-content: space-between;

    > * {
      width: 45%;
    }
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  color: ${colors.grey};
  font-size: 14px;
  margin-bottom: 0.7rem;
`;

const Input = styled.input`
  font-size: 17px;
  border-radius: 7px;
  border: none;
  padding: 12px 11px;

  &:focus-visible {
    outline: 1px solid ${colors.secondary};
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;

  button {
    background-color: ${colors.secondary};
    border-style: none;
    padding: 0.7rem 2.6rem;
    border-radius: 50px;
    font-size: 17px;
    color: white;
    cursor: pointer;
    transition: padding 300ms ease;

    &:hover {
      padding: 0.7rem 2.8rem;
    }
  }
`;

function CreateEmployee() {
  const [firstName, setUserFirstName] = useState("");
  const [lastName, setUserLastName] = useState("");
  const [birthDate, setUserBirthDate] = useState("");
  const [startDate, setUserStartDate] = useState("");
  const [department, setSelectDepartment] = useState("");
  const [street, setUserStreet] = useState("");
  const [city, setUserCity] = useState("");
  const [selectState, setSelectState] = useState("");
  const [zipcode, setUserZipcode] = useState("");

  const userInfos = {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    startDate: startDate,
    selectState: selectState,
    street: street,
    city: city,
    department: department,
    zipcode: zipcode,
  };

  const handleSubmit = (e) => {
    const userData = { userInfos };
    e.preventDefault();
    console.log(userData);
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
                    <Input type="text" id="firstName" value={firstName} onChange={(e) => setUserFirstName(e.target.value)} />
                  </FormField>
                  <FormField>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input type="text" id="lastName" value={lastName} onChange={(e) => setUserLastName(e.target.value)} />
                  </FormField>
                </div>

                <div className="line">
                  <FormField>
                    <Label htmlFor="birthdate">Last Name</Label>
                    <Input
                      type="date"
                      id="birthdate"
                      value={birthDate}
                      min="1900-01-01"
                      max=""
                      onChange={(e) => setUserBirthDate(e.target.value)}
                    ></Input>
                  </FormField>
                </div>
              </FormWrapper>

              <FormWrapper>
                <div className="line">
                  <FormField>
                    <Label htmlFor="startDate">Start Date</Label>
                    <Input type="date" id="startDate" value={startDate} min="1900-01-01" max="" onChange={(e) => setUserStartDate(e.target.value)} />
                  </FormField>
                  <FormField>
                    <Label htmlFor="department">Department</Label>
                    <Dropdown setSelectState={setSelectDepartment} options={departments} />
                  </FormField>
                </div>
              </FormWrapper>
            </ColLeft>

            <ColRight>
              <FormWrapper>
                <div className="line">
                  <FormField>
                    <Label htmlFor="street">Street</Label>
                    <Input type="text" id="street" value={street} onChange={(e) => setUserStreet(e.target.value)} />
                  </FormField>
                  <FormField>
                    <Label htmlFor="street">City</Label>
                    <Input type="text" id="city" value={city} onChange={(e) => setUserCity(e.target.value)} />
                  </FormField>
                </div>

                <div className="line">
                  <FormField>
                    <Label htmlFor="state">State</Label>
                    <Dropdown setSelectState={setSelectState} options={countries} />
                  </FormField>
                  <FormField>
                    <Label htmlFor="zipcode">Zip Code</Label>
                    <Input type="number" id="zipcode" value={zipcode} onChange={(e) => setUserZipcode(e.target.value)} />
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
