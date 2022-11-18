import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Title from "../components/Title";

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


function CurrentEmployees() {
  return (
    <MainWrapper>
      <Sidebar />

      <ContentWrapper>
        <Title />

        <Content>


        </Content>
      </ContentWrapper>
    </MainWrapper>
  );
}

export default CurrentEmployees;
