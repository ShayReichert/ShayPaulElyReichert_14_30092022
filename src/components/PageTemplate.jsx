import React from "react";
import styled from "styled-components/macro";
import Sidebar from "./Sidebar";

const MainWrapper = styled.section`
  display: flex;
  min-height: 100vh;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem;
`;

function PageTemplate({ children }) {
  return (
    <MainWrapper>
      <Sidebar />
      <ContentWrapper>{children}</ContentWrapper>
    </MainWrapper>
  );
}

export default PageTemplate;
