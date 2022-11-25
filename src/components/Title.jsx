import React from "react";
import styled from "styled-components/macro";

const TitleWrapper = styled.h1`
  font-size: 36px;
  font-weight: 300;
  text-align: left;
`;

function Title({ title }) {
  return (
    <div className="title-wrapper">
      <TitleWrapper>{title}</TitleWrapper>
    </div>
  );
}

export default Title;
