import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";
import { Dropdown } from "simple-react-select-dropdown";
import "simple-react-select-dropdown/dist/index.css";
import { countries } from "../utils/data/countries";
import { departments } from "../utils/data/departments";

const MainWrapper = styled.section`
  display: flex;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ColLeft = styled.div`
  border: 1px solid orange;
`;

const ColRight = styled.div`
  border: 1px solid orange;
`;

const FormWrapper = styled.div`
  background-color: #f3f8f2;
  margin-bottom: 5rem;

  .line {
    display: flex;
  }
`;

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin: auto;

  button {
    background-color: green;
    color: white;
    border-radius: 50px;
    border-style: none;
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
    <MainWrapper>
      <Sidebar />

      <ContentWrapper>
        <Title />

        <Content>
          <Form onSubmit={handleSubmit}>
            <InputsWrapper>
              <ColLeft>
                <FormWrapper>
                  <div className="line">
                    <Input>
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" value={firstName} onChange={(e) => setUserFirstName(e.target.value)} />
                    </Input>
                    <Input>
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" value={lastName} onChange={(e) => setUserLastName(e.target.value)} />
                    </Input>
                  </div>

                  <div className="line">
                    <Input>
                      <label htmlFor="birthdate">Last Name</label>
                      <input
                        type="date"
                        id="birthdate"
                        value={birthDate}
                        min="1900-01-01"
                        max=""
                        onChange={(e) => setUserBirthDate(e.target.value)}
                      ></input>
                    </Input>
                  </div>
                </FormWrapper>

                <FormWrapper>
                  <div className="line">
                    <Input>
                      <label htmlFor="startDate">Start Date</label>
                      <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        min="1900-01-01"
                        max=""
                        onChange={(e) => setUserStartDate(e.target.value)}
                      />
                    </Input>
                    <Input>
                      <label htmlFor="department">Department</label>
                      <Dropdown setSelectState={setSelectDepartment} options={departments} />
                    </Input>
                  </div>
                </FormWrapper>
              </ColLeft>

              <ColRight>
                <FormWrapper>
                  <div className="line">
                    <Input>
                      <label htmlFor="street">Street</label>
                      <input type="text" id="street" value={street} onChange={(e) => setUserStreet(e.target.value)} />
                    </Input>
                    <Input>
                      <label htmlFor="street">City</label>
                      <input type="text" id="city" value={city} onChange={(e) => setUserCity(e.target.value)} />
                    </Input>
                  </div>

                  <div className="line">
                    <Input>
                      <label htmlFor="state">State</label>
                      <Dropdown setSelectState={setSelectState} options={countries} />
                    </Input>
                    <Input>
                      <label htmlFor="zipcode">Zip Code</label>
                      <input type="number" id="zipcode" value={zipcode} onChange={(e) => setUserZipcode(e.target.value)} />
                    </Input>
                  </div>
                </FormWrapper>
              </ColRight>
            </InputsWrapper>

            <ButtonWrapper>
              <button>Save</button>
            </ButtonWrapper>
          </Form>
        </Content>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default CreateEmployee;
