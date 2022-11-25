import React from "react";
import styled from "styled-components/macro";
import PageTemplate from "../components/PageTemplate";
import Title from "../components/Title";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid orange;
`;

function CurrentEmployees() {
  return (
    <PageTemplate>
      <Title title="Current Employees" />
      <Content></Content>
    </PageTemplate>
  );
}

export default CurrentEmployees;
