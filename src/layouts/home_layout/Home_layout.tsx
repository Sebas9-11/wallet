import NavBar from "../../components/common/navBar/NavBar";
import { HomeLayoutProps } from "./homeLayout.interface";
import { Container, LeftContainer, RightContainer } from "./styles";
import { useNavBar } from "../../context/NavBarContext";

const HomeLayout = ({ children }: HomeLayoutProps) => {
  const { state } = useNavBar();

  return (
    <Container>
      <LeftContainer>
        <div>{state.navbar.title}</div>
      </LeftContainer>
      <RightContainer>
        <NavBar />
        {children}
      </RightContainer>
    </Container>
  );
};

export default HomeLayout;
