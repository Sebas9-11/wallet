import styled from "styled-components";
import { Box } from "../../layouts";
import { colors } from "../../../constants";

export const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
  align-items: center;
`;

export const ContainerNavBar = styled(Box)`
  display: flex;
  width: min(100%, 500px);
  height: 80px;
  background-color: ${colors.grayScale.gray};
  border-radius: 0px 18px 0px 20px;
  align-items: center;
  padding: 0px 20px;
`;

export const Title = styled.text``;
