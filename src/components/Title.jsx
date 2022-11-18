import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  border: 1px solid green;
`;

function Title() {
  return (
    <TitleWrapper>
      <h1>Create Employee</h1>
    </TitleWrapper>
  );
}

export default Title;
