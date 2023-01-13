import React from "react";
import styled from "styled-components/macro";
import Sidebar from "./Sidebar";

const MainWrapper = styled.section`
  display: flex;
  min-height: 100vh;

  @media (max-width: 920px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem;

  @media (max-width: 920px) {
    width: auto;
    padding: 1rem;
  }
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
