import React from "react";
import { Container, ContainerNavBar, Title } from "./styles";
import { NavBarProps } from "./navBar.interface";
import { navBarData } from "../../../constants/navBarData";

const NavBar = ({ title }: NavBarProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <ContainerNavBar>
        {navBarData.map((item) => (
          <div key={`nav-bar-key-${item.id}`}>{item.title}</div>
        ))}
      </ContainerNavBar>
    </Container>
  );
};

export default NavBar;
