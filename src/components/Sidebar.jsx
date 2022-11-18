import React from "react";
import styled from "styled-components";
import Logo from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";


const SidebarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
`;

// const LogoLink = styled(Link)`
//   display: flex;
//   align-items: center;
// `;

const HomeLogo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const MenuButton = styled.div`
  padding: 3rem 0;
`;

function Sidebar() {

  return (
    <SidebarWrapper>
      <div className="logo">
        {/* <LogoLink to="/"> */}
        <HomeLogo src={Logo} alt="HRNET logo" />
        {/* </LogoLink> */}
      </div>
      <div className="menu">
        {/* <ItemLink to="/"> */}
        <MenuButton>
          <FontAwesomeIcon icon={faUserCircle} />
          Create employee
        </MenuButton>
        {/* </ItemLink> */}
        {/* <ItemLink to="/current-employees"> */}
        <FontAwesomeIcon icon={faSignOut} />
        View Current Employees
        {/* </ItemLink> */}
      </div>
    </SidebarWrapper>
  );
}

export default Sidebar;
