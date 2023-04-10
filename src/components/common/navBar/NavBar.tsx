import { navBarData } from "../../../constants/navBarData";
import { useNavBar } from "../../../context/NavBarContext";
import { NAVBAR_ACTION } from "../../../types/nav_bar";
import { ContainerNavBar, Section, Title } from "./styles";

interface NavBarProps {
  id: string;
  title: string;
  path: string;
}

const NavBar = () => {
  const { dispatch, state } = useNavBar();

  const handleOnClick = ({ id, title, path }: NavBarProps) => {
    dispatch({
      type: NAVBAR_ACTION.SET_NAVBAR,
      payload: { navbar: { id, title, path } },
    });
    console.log("id", id);
  };

  console.log("state", state);

  return (
    <ContainerNavBar>
      {navBarData.map((item) => (
        <Section
          key={`nav-bar-key-${item.id}`}
          onClick={() => handleOnClick(item)}
        >
          <Title>{item.title}</Title>
        </Section>
      ))}
    </ContainerNavBar>
  );
};

export default NavBar;
