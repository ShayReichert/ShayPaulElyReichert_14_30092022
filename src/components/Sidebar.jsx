import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import Logo from "../assets/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import colors from "../utils/style/colors";

const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  width: 25%;
  border-right: 1px solid ${colors.grey};

  @media (max-width: 920px) {
    border-right: none;
    width: 100%;
  }
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const HomeLogo = styled.img`
  max-width: 100%;
  width: 138px;
  height: auto;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${colors.grey};
  padding: 1rem 0.7rem;

  @media (max-width: 920px) {
    align-items: center;
  }
`;

const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 1rem 0.8rem;
  margin: 0.5rem 0;
  width: 80%;
  border-radius: 7px;

  &:hover,
  &.active {
    background-color: ${colors.primary};
  }

  @media (max-width: 920px) {
    width: 100%;
  }
`;

const MenuText = styled.span`
  margin-left: 0.6rem;
  text-align: left;
  font-size: 15px;
`;

function Sidebar() {
  return (
    <SidebarWrapper>
      <LogoLink to="/">
        <HomeLogo src={Logo} width="276" height="294" alt="HRNET logo" />
      </LogoLink>

      <MenuWrapper>
        <ItemLink to="/" activeclassname="active">
          <FontAwesomeIcon icon={faPlus} />
          <MenuText>Create employee</MenuText>
        </ItemLink>

        <ItemLink to="/current-employees" activeclassname="active">
          <FontAwesomeIcon icon={faUserCircle} />
          <MenuText>View Current Employees</MenuText>
        </ItemLink>
      </MenuWrapper>
    </SidebarWrapper>
  );
}

export default Sidebar;
