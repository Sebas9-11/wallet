import NavBar from "../../components/common/navBar/NavBar";
import { HomeLayoutProps } from "./homeLayout.interface";
import { Container, LeftContainer, RightContainer } from "./styles";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <Container>
      <LeftContainer>left container</LeftContainer>
      <RightContainer>
        <NavBar />
        {children}
      </RightContainer>
    </Container>
  );
};

export default HomeLayout;
